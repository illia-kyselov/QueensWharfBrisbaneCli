import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Platform,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
import QueenPng from '../assets/profile/Queen.png';
import OperationCard from '../components/Home/OperationCard';
import ActionButtons from '../components/Home/ActionButtons';
import UserRow from '../components/Home/UserRow';
import { getDateHeader } from '../helpers/dateHelpers';
import OperationsModal from '../components/Home/OperationsModal';
import CategoryModal from '../components/CategoryModal';
import AllTransactionsModal from '../components/Home/AllTransactionsModal';
import { addTransaction, setMoney } from '../store/slices/userSlice';
import NoteModalHome from '../components/Home/NoteModalHome';

const HomeScreen = () => {
    const [operationsModalVisible, setOperationsModalVisible] = useState(false);
    const [categoryModalVisible, setCategoryModalVisible] = useState(false);
    const [noteModalVisible, setNoteModalVisible] = useState(false);
    const [allTransactionsModalVisible, setAllTransactionsModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [openCategoryAfterHide, setOpenCategoryAfterHide] = useState(false);
    const [openNoteAfterHide, setOpenNoteAfterHide] = useState(false);
    const [isViewOnly, setIsViewOnly] = useState(false);
    const [operationName, setOperationName] = useState('');
    const [note, setNote] = useState('');
    const [amount, setAmount] = useState(0);
    const [deadline, setDeadline] = useState('');
    const [showPicker, setShowPicker] = useState(false);
    const [datePickerDate, setDatePickerDate] = useState(new Date());

    const dispatch = useDispatch();

    const { firstName, lastName, avatarUri, money: userBalance, transactions } = useSelector(
        (state) => state.user
    );
    const userName =
        (firstName || lastName) ? `${firstName} ${lastName}`.trim() : 'User';
    const txs = transactions.length ? transactions : [];

    const groupedTx = {};
    txs.forEach((tx) => {
        const header = getDateHeader(tx.date);
        if (!groupedTx[header]) groupedTx[header] = [];
        groupedTx[header].push(tx);
    });
    const groupKeys = Object.keys(groupedTx);

    const handleDeposit = () => {
        setModalTitle('Deposit');
        setIsViewOnly(false);
        setOperationsModalVisible(true);
    };

    const handlePay = () => {
        setModalTitle('Pay');
        setIsViewOnly(false);
        setOperationsModalVisible(true);
    };

    const handleOpenCategoryModal = () => {
        setOpenCategoryAfterHide(true);
        setOperationsModalVisible(false);
    };

    const handleOpenNoteModal = () => {
        setOpenNoteAfterHide(true);
        setOperationsModalVisible(false);
    };

    const handleSaveNote = (newNote) => {
        setNote(newNote);
        setNoteModalVisible(false);
        setTimeout(() => {
            setOperationsModalVisible(true);
        }, 500);
    };

    const handleOperationsModalHide = () => {
        if (openCategoryAfterHide) {
            setOpenCategoryAfterHide(false);
            setCategoryModalVisible(true);
        } else if (openNoteAfterHide) {
            setOpenNoteAfterHide(false);
            setNoteModalVisible(true);
        }
    };

    const handleSelectCategory = (category) => {
        setSelectedCategory(category.name);
        setCategoryModalVisible(false);
        setTimeout(() => {
            setOperationsModalVisible(true);
        }, 500);
    };

    const handleOpenDatePicker = () => {
        setOperationsModalVisible(false);
        setTimeout(() => {
            setShowPicker(true);
        }, 300);
    };

    const onChange = (event, selectedDate) => {
        setShowPicker(false);
        if (event.type === 'set' && selectedDate) {
            const hours = ('0' + selectedDate.getHours()).slice(-2);
            const minutes = ('0' + selectedDate.getMinutes()).slice(-2);
            const day = ('0' + selectedDate.getDate()).slice(-2);
            const month = ('0' + (selectedDate.getMonth() + 1)).slice(-2);
            const year = selectedDate.getFullYear().toString().substr(-2);
            const formattedDateTime = `${hours}:${minutes} ${day}/${month}/${year}`;
            setDeadline(formattedDateTime);
        }
        setTimeout(() => {
            setOperationsModalVisible(true);
        }, 300);
    };

    const handleSaveOperation = (data) => {
        const parsedAmount = Math.abs(parseFloat(data.amount)) || 0;
        const finalAmount = data.type === 'Deposit' ? parsedAmount : -parsedAmount;

        const newTransaction = {
            id: Date.now().toString(),
            title: data.name || (data.type === 'Deposit' ? 'Deposit' : 'Payment'),
            amount: parsedAmount,
            category: data.category,
            date: data.deadline,
            color: data.color,
            note: data.note,
            type: data.type,
        };

        const newBalance = userBalance + finalAmount;
        dispatch(addTransaction(newTransaction));
        dispatch(setMoney(newBalance));

        setOperationName('');
        setSelectedCategory(null);
        setDeadline('');
        setNote('');
    };

    const handleViewOperation = (op) => {
        setModalTitle(op.type);
        setOperationName(op.title);
        setSelectedCategory(op.category);
        setDeadline(op.date);
        setNote(op.note);
        setAmount(op.amount);
        setIsViewOnly(true);
        setOperationsModalVisible(true);
    };

    return (
        <>
            <View style={styles.rootContainer}>
                <Image source={QueenPng} style={styles.queenImage} />
                <SafeAreaView style={styles.safeArea}>
                    <ScrollView contentContainerStyle={styles.scrollContent}>
                        <View style={{ marginTop: 16 }} />
                        <UserRow avatarUri={avatarUri} userName={userName} />
                        <View style={{ marginBottom: 30 }} />
                        <Text style={styles.youHaveText}>You have</Text>
                        <Text style={styles.balanceText}>
                            {userBalance < 0 ? '-$' : '$'}
                            {Math.abs(userBalance).toLocaleString()}
                        </Text>
                        <View style={{ marginBottom: 15 }} />
                        <ActionButtons onDepositPress={handleDeposit} onPayPress={handlePay} />
                        <View style={{ marginBottom: 40 }} />
                        <View style={styles.operationsRow}>
                            <Text style={styles.operationsTitle}>Operations</Text>
                            <TouchableOpacity onPress={() => setAllTransactionsModalVisible(true)}>
                                <Text style={styles.viewAllText}>View all</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 20 }} />

                        {groupKeys.map((header, idx) => (
                            <View key={header} style={idx > 0 ? { marginTop: 20 } : {}}>
                                <Text style={styles.groupHeader}>{header}</Text>
                                <View style={{ marginBottom: 10 }} />
                                {groupedTx[header].map((op) => (
                                    <TouchableOpacity key={op.id} onPress={() => handleViewOperation(op)}>
                                        <OperationCard operation={op} />
                                    </TouchableOpacity>
                                ))}
                            </View>
                        ))}
                    </ScrollView>
                </SafeAreaView>
            </View>

            <OperationsModal
                isVisible={operationsModalVisible}
                onClose={() => setOperationsModalVisible(false)}
                onModalHide={handleOperationsModalHide}
                title={modalTitle}
                name={operationName}
                setName={setOperationName}
                category={selectedCategory}
                deadline={deadline}
                note={note}
                onSetNote={setNote}
                onOpenCategoryModal={handleOpenCategoryModal}
                onOpenDatePicker={handleOpenDatePicker}
                onOpenNoteModal={handleOpenNoteModal}
                onSave={handleSaveOperation}
                amount={amount}
                readOnly={isViewOnly}
            />

            <CategoryModal
                isVisible={categoryModalVisible}
                onClose={() => setCategoryModalVisible(false)}
                onSelect={handleSelectCategory}
            />

            <AllTransactionsModal
                isVisible={allTransactionsModalVisible}
                onClose={() => setAllTransactionsModalVisible(false)}
                transactions={txs}
            />

            {showPicker && (
                <View style={styles.modalOverlay}>
                    <View style={styles.datePickerContainer}>
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={datePickerDate}
                            mode="datetime"
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            onChange={onChange}
                            textColor="white"
                        />
                    </View>
                </View>
            )}

            <NoteModalHome
                isVisible={noteModalVisible}
                onClose={() => setNoteModalVisible(false)}
                description={note}
                onSave={handleSaveNote}
            />
        </>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#20252C',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        overflow: 'visible',
    },
    queenImage: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    safeArea: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    youHaveText: {
        fontFamily: 'Avenir',
        fontWeight: '400',
        fontSize: 15,
        color: '#FFFFFF',
        marginBottom: 2,
    },
    balanceText: {
        fontFamily: 'Avenir',
        fontWeight: '800',
        fontSize: 40,
        color: '#FFFFFF',
    },
    operationsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    operationsTitle: {
        fontFamily: 'Avenir',
        fontWeight: '500',
        fontSize: 15,
        color: '#FFFFFF',
    },
    viewAllText: {
        fontFamily: 'Avenir',
        fontWeight: '500',
        fontSize: 15,
        color: '#F8C63D',
    },
    groupHeader: {
        fontFamily: 'Avenir',
        fontWeight: '400',
        fontSize: 13,
        color: '#D6D6D6',
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

export default HomeScreen;
