import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ArrowRightSVG from '../../assets/goal/ArrowRightSVG';

const MoneyBoxAddGoalModal = ({
    isVisible,
    onClose,
    onSave,
    name,
    setName,
    price,
    setPrice,
    category,
    deadline,
    onOpenCategoryModal,
    onModalHide,
    onOpenDatePicker,
    onOpenNoteModal,
    isDetailedView = false,
}) => {
    const insets = useSafeAreaInsets();
    const windowHeight = Dimensions.get('window').height;
    const modalHeight = windowHeight - insets.top;

    return (
        <Modal
            isVisible={isVisible}
            onSwipeComplete={onClose}
            swipeDirection="down"
            onBackdropPress={onClose}
            style={styles.modal}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            onModalHide={onModalHide}
        >
            <View style={[styles.modalContainer, { height: modalHeight }]}>
                <View style={styles.contentContainer}>
                    <View style={styles.modalHandle} />
                    <Text style={styles.modalTitle}>
                        {isDetailedView ? 'Detailed' : 'Write down the goal'}
                    </Text>

                    <View style={styles.inputRow}>
                        <Text style={styles.inputLabel}>Name</Text>
                        <TextInput
                            style={[
                                styles.inputValue,
                                { color: name ? '#000000' : '#CDCDCD' },
                            ]}
                            placeholder="required"
                            placeholderTextColor="#CDCDCD"
                            value={name}
                            onChangeText={setName}
                        />
                    </View>

                    <View style={styles.gap} />

                    <View style={styles.inputRow}>
                        <Text style={styles.inputLabel}>Price</Text>
                        <TextInput
                            style={[
                                styles.inputValue,
                                { color: price ? '#000000' : '#CDCDCD' },
                            ]}
                            placeholder="required"
                            placeholderTextColor="#CDCDCD"
                            value={price}
                            onChangeText={setPrice}
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.gap} />

                    <TouchableOpacity style={styles.inputRow} onPress={onOpenCategoryModal}>
                        <Text style={styles.inputLabel}>Category</Text>
                        <View style={styles.rightSide}>
                            {category ? (
                                <Text style={styles.inputValue}>{category}</Text>
                            ) : (
                                <ArrowRightSVG />
                            )}
                        </View>
                    </TouchableOpacity>

                    <View style={styles.gap} />

                    <TouchableOpacity style={styles.inputRow} onPress={onOpenDatePicker}>
                        <Text style={styles.inputLabel}>Deadline</Text>
                        <View style={styles.rightSide}>
                            {deadline ? (
                                <Text style={styles.inputValue}>{deadline}</Text>
                            ) : (
                                <ArrowRightSVG />
                            )}
                        </View>
                    </TouchableOpacity>

                    <View style={{ marginBottom: 30 }} />
                    <Text style={styles.labelDetailed}>Detailed</Text>
                    <View style={{ marginBottom: 10 }} />

                    <TouchableOpacity style={styles.inputRow} onPress={onOpenNoteModal}>
                        <Text style={styles.noteLabel}>Note</Text>
                        <View style={styles.rightSide}>
                            <ArrowRightSVG />
                        </View>
                    </TouchableOpacity>
                </View>

                {!isDetailedView && (
                    <TouchableOpacity style={styles.saveButton} onPress={onSave}>
                        <Text style={styles.saveButtonText}>Save</Text>
                    </TouchableOpacity>
                )}
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        margin: 0,
        justifyContent: 'flex-end',
    },
    modalContainer: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    contentContainer: {
        paddingHorizontal: 20,
    },
    modalHandle: {
        width: 40,
        height: 4,
        backgroundColor: '#20252C',
        borderRadius: 999,
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 25,
    },
    modalTitle: {
        fontFamily: 'Avenir',
        fontWeight: '800',
        fontSize: 14,
        color: '#000000',
        marginBottom: 16,
        alignSelf: 'flex-start',
    },
    inputRow: {
        height: 50,
        borderRadius: 14,
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        elevation: 2,
    },
    gap: {
        height: 10,
    },
    inputLabel: {
        fontFamily: 'Avenir',
        fontWeight: '400',
        fontSize: 14,
        color: '#000000',
    },
    inputValue: {
        fontFamily: 'Avenir',
        fontWeight: '400',
        fontSize: 14,
        color: '#000000',
    },
    rightSide: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    saveButton: {
        height: 40,
        borderWidth: 1,
        borderColor: '#F8C63D',
        backgroundColor: '#F8C63D',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 20,
    },
    saveButtonText: {
        fontFamily: 'Avenir',
        fontWeight: '800',
        fontSize: 14,
        color: '#000000',
    },
    labelDetailed: {
        fontFamily: 'Avenir',
        fontWeight: '400',
        fontSize: 14,
        color: '#000000',
    },
    noteLabel: {
        fontFamily: 'Avenir',
        fontWeight: '400',
        fontSize: 14,
        color: '#000000',
    },
});

export default MoneyBoxAddGoalModal;
