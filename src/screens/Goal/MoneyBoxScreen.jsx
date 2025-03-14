import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    FlatList,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { addMoneyBoxEntry, removeMoneyBoxEntry } from '../../store/slices/moneyBoxSlice';
import MoneyBoxAddGoalModal from '../../components/Goal/MoneyBoxAddGoalModal';
import CategoryModal from '../../components/CategoryModal';
import DateTimePicker from '@react-native-community/datetimepicker';
import NoteModal from '../../components/Goal/NoteModal';
import { nanoid } from '@reduxjs/toolkit';
import GoalCard from '../../components/Goal/GoalCard';

export default function MoneyBoxScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const moneyBoxData = useSelector((state) => state.moneyBox.moneyBoxData);
    const [isCategoryModalVisible, setIsCategoryModalVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [openCategoryAfterHide, setOpenCategoryAfterHide] = useState(false);
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [deadline, setDeadline] = useState('');
    const [note, setNote] = useState('');
    const [showNoteModal, setShowNoteModal] = useState(false);
    const [showPicker, setShowPicker] = useState(false);
    const [datePickerDate, setDatePickerDate] = useState(new Date());
    const [isDetailedView, setIsDetailedView] = useState(false);

    const showDatePicker = () => {
        setShowModal(false);
        setTimeout(() => {
            setShowPicker(true);
        }, 300);
    };

    const onChange = (event, selectedDate) => {
        setShowPicker(false);
        if (event.type === 'set' && selectedDate) {
            const day = ('0' + selectedDate.getDate()).slice(-2);
            const month = ('0' + (selectedDate.getMonth() + 1)).slice(-2);
            const year = selectedDate.getFullYear().toString().substr(-2);
            const formattedDate = `${day}/${month}/${year}`;
            setDeadline(formattedDate);
        }
        setTimeout(() => {
            setShowModal(true);
        }, 300);
    };

    const openNoteModal = () => {
        setShowModal(false);
        setTimeout(() => {
            setShowNoteModal(true);
        }, 500);
    };

    const handleAddPress = () => {
        setName('');
        setPrice('');
        setCategory('');
        setDeadline('');
        setNote('');
        setIsDetailedView(false);
        setShowModal(true);
        setIsCategoryModalVisible(false);
    };

    const handleGoalCardPress = (item) => {
        setName(item.name);
        setPrice(item.price);
        setCategory(item.category);
        setDeadline(item.deadline);
        setNote(item.note);
        setIsDetailedView(true);
        setShowModal(true);
    };

    const handleSelectCategory = (selectedCategory) => {
        setCategory(selectedCategory.name);
        setIsCategoryModalVisible(false);
        setTimeout(() => {
            setShowModal(true);
        }, 500);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleOpenCategoryModal = () => {
        setOpenCategoryAfterHide(true);
        setShowModal(false);
    };

    const handleMoneyBoxModalHide = () => {
        if (openCategoryAfterHide) {
            setOpenCategoryAfterHide(false);
            setIsCategoryModalVisible(true);
        }
    };

    const handleSave = () => {
        if (!name || !price || !category || !deadline) {
            return;
        }
        const entry = {
            id: nanoid(),
            name,
            price,
            category,
            deadline,
            note: note || '',
            createdAt: new Date().toISOString(),
        };
        dispatch(addMoneyBoxEntry(entry));
        setName('');
        setPrice('');
        setCategory('');
        setDeadline('');
        setNote('');
        setShowModal(false);
    };

    const handleDelete = (id) => {
        dispatch(removeMoneyBoxEntry(id));
    };

    const handleDone = (id) => {
        dispatch(removeMoneyBoxEntry(id));
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={styles.safeContainer}>
                <Header title="Money box" onBackPress={() => navigation.goBack()} />
                <View style={{ marginTop: 30 }} />
                {moneyBoxData.length === 0 ? (
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>You have no entries. Add them</Text>
                        <TouchableOpacity style={styles.addButton} onPress={handleAddPress}>
                            <Text style={styles.addButtonText}>Add</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <>
                        <Text style={styles.goalsTitle}>Your goals</Text>
                        <FlatList
                            data={moneyBoxData}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <GoalCard
                                    item={item}
                                    onDone={handleDone}
                                    onDelete={handleDelete}
                                    onPress={handleGoalCardPress}
                                />
                            )}
                            ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                            contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 80 }}
                        />
                        <TouchableOpacity style={styles.nextMonthButton} onPress={handleAddPress}>
                            <Text style={styles.nextMonthButtonText}>Add more goal</Text>
                        </TouchableOpacity>
                    </>
                )}
                <MoneyBoxAddGoalModal
                    isVisible={showModal}
                    onClose={handleCloseModal}
                    onSave={handleSave}
                    name={name}
                    setName={setName}
                    price={price}
                    setPrice={setPrice}
                    category={category}
                    deadline={deadline}
                    note={note}
                    onOpenCategoryModal={handleOpenCategoryModal}
                    onModalHide={handleMoneyBoxModalHide}
                    onOpenDatePicker={showDatePicker}
                    onOpenNoteModal={openNoteModal}
                    isDetailedView={isDetailedView}
                />
                <CategoryModal
                    isVisible={isCategoryModalVisible}
                    onClose={() => setIsCategoryModalVisible(false)}
                    onSelect={handleSelectCategory}
                />
                {showPicker && (
                    <View style={styles.modalOverlay}>
                        <View style={styles.datePickerContainer}>
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={datePickerDate}
                                mode="date"
                                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                onChange={onChange}
                                textColor="white"
                            />
                        </View>
                    </View>
                )}
                {showNoteModal && (
                    <NoteModal
                        isVisible={showNoteModal}
                        onClose={() => {
                            setShowNoteModal(false);
                            setTimeout(() => {
                                setShowModal(true);
                            }, 300);
                        }}
                        description={note}
                        onSave={(updatedNote) => setNote(updatedNote)}
                        closeButtonText="Save"
                        isDetailedView={isDetailedView}
                    />
                )}
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#20252C',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
    },
    emptyText: {
        fontFamily: 'Avenir',
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 20,
    },
    addButton: {
        width: 150,
        height: 40,
        borderWidth: 1,
        borderColor: '#F8C63D',
        backgroundColor: '#F8C63D',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonText: {
        fontFamily: 'Avenir',
        fontWeight: '800',
        fontSize: 14,
        color: '#000000',
    },
    goalsTitle: {
        fontFamily: 'Avenir',
        fontWeight: '500',
        fontSize: 15,
        color: '#FFFFFF',
        marginLeft: 20,
        marginBottom: 20,
    },
    nextMonthButton: {
        height: 40,
        borderWidth: 1,
        borderColor: '#F8C63D',
        backgroundColor: '#F8C63D',
        borderRadius: 15,
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#0A0D12',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    nextMonthButtonText: {
        fontFamily: 'Avenir',
        fontWeight: '800',
        fontSize: 14,
        color: '#000000',
    },
    modalOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
    },
    datePickerContainer: {
        width: '80%',
        backgroundColor: '#000000',
        borderRadius: 10,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
