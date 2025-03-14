import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    TextInput,
    ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import { SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ArrowRightSVG from '../../assets/goal/ArrowRightSVG';

const OperationsModal = ({
    isVisible,
    onClose,
    onSave,
    title,
    amount = 0,
    onOpenCategoryModal,
    onOpenDatePicker,
    onOpenColorModal,
    onOpenNoteModal,
    name,
    setName,
    category,
    deadline,
    color,
    note,
    onModalHide,
    readOnly,
}) => {
    const insets = useSafeAreaInsets();
    const windowHeight = Dimensions.get('window').height;
    const modalHeight = windowHeight - insets.top;
    const [currentAmount, setCurrentAmount] = useState(String(amount));
    const [isEditingAmount, setIsEditingAmount] = useState(false);

    const handleAmountChange = (newVal) => {
        setCurrentAmount(newVal);
    };

    useEffect(() => {
        setCurrentAmount(String(amount));
    }, [amount]);

    const amountStyle =
        currentAmount === "0"
            ? styles.zeroAmount
            : title === 'Deposit'
                ? styles.depositAmount
                : styles.payAmount;

    const displayAmount =
        currentAmount === "0"
            ? "0"
            : title === 'Deposit'
                ? `+${currentAmount}`
                : `-${currentAmount}`;

    const handleSave = () => {
        const transactionData = {
            type: title,
            amount: parseFloat(currentAmount) || 0,
            name,
            category,
            deadline,
            color,
            note,
        };
        if (onSave) {
            onSave(transactionData);
        }
        setCurrentAmount('0');
        setName('');
        onClose();
    };

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            onSwipeComplete={onClose}
            swipeDirection="down"
            style={styles.modalContainer}
            onModalHide={onModalHide}
        >
            <View style={[styles.container, { height: modalHeight }]}>
                <View style={styles.modalHandle} />
                <ScrollView
                    style={{ flex: 1 }}
                    contentContainerStyle={styles.contentWrapper}
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.headerLabel}>{title}</Text>
                    <View style={styles.amountRow}>
                        <View style={styles.currencyButton}>
                            <Text style={styles.currencyButtonText}>USD</Text>
                        </View>
                        {isEditingAmount ? (
                            <TextInput
                                style={[styles.amountText, amountStyle]}
                                value={currentAmount}
                                onChangeText={handleAmountChange}
                                keyboardType="numeric"
                                autoFocus
                                onBlur={() => setIsEditingAmount(false)}
                            />
                        ) : (
                            <TouchableOpacity onPress={() => setIsEditingAmount(true)}>
                                <Text style={[styles.amountText, amountStyle]}>
                                    {displayAmount}
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>
                    <Text style={styles.detailedLabel}>Detailed</Text>
                    <View style={[styles.inputRow, { marginBottom: 10 }]}>
                        <Text style={styles.inputLabel}>Name</Text>
                        <TextInput
                            style={[styles.inputText, styles.inputValue]}
                            placeholder="required"
                            placeholderTextColor="#CDCDCD"
                            value={name}
                            onChangeText={setName}
                        />
                    </View>
                    <TouchableOpacity
                        style={[styles.inputRow, { marginBottom: 10 }]}
                        onPress={onOpenCategoryModal}
                    >
                        <Text style={styles.inputLabel}>Category</Text>
                        <View style={styles.rightSide}>
                            {category ? (
                                <Text style={styles.inputText}>{category}</Text>
                            ) : (
                                <ArrowRightSVG />
                            )}
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.inputRow, { marginBottom: 30 }]}
                        onPress={onOpenDatePicker}
                    >
                        <Text style={styles.inputLabel}>Date and time</Text>
                        <View style={styles.rightSide}>
                            {deadline ? (
                                <Text style={styles.inputText}>{deadline}</Text>
                            ) : (
                                <ArrowRightSVG />
                            )}
                        </View>
                    </TouchableOpacity>
                    <Text style={[styles.detailedLabel, { marginBottom: 10 }]}>
                        Detailed
                    </Text>
                    {/* <TouchableOpacity
                        style={[styles.inputRow, { marginBottom: 10 }]}
                        onPress={onOpenColorModal}
                    >
                        <Text style={styles.inputLabel}>Color</Text>
                        <View style={styles.rightSide}>
                            {color ? (
                                <Text style={styles.inputText}>{color}</Text>
                            ) : (
                                <ArrowRightSVG />
                            )}
                        </View>
                    </TouchableOpacity> */}
                    <TouchableOpacity
                        style={[styles.inputRow, { marginBottom: 30 }]}
                        onPress={onOpenNoteModal}
                    >
                        <Text style={styles.inputLabel}>Note</Text>
                        <View style={styles.rightSide}>
                            <ArrowRightSVG />
                        </View>
                    </TouchableOpacity>
                </ScrollView>
                {!readOnly && (
                    <SafeAreaView style={styles.safeAreaBottom}>
                        <TouchableOpacity style={styles.closeButton} onPress={handleSave}>
                            <Text style={styles.closeButtonText}>Save</Text>
                        </TouchableOpacity>
                    </SafeAreaView>
                )}
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        margin: 0,
        justifyContent: 'flex-end',
    },
    container: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        overflow: 'visible',
    },
    inputText: {
        fontFamily: 'Avenir',
        fontWeight: '400',
        fontSize: 14,
        color: '#000000',
    },
    modalHandle: {
        width: 40,
        height: 4,
        backgroundColor: '#20252C',
        borderRadius: 999,
        alignSelf: 'center',
        marginVertical: 10,
    },
    contentWrapper: {
        paddingBottom: 20,
    },
    headerLabel: {
        fontFamily: 'Avenir',
        fontWeight: '800',
        fontSize: 14,
        color: '#000000',
        marginBottom: 15,
    },
    amountRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    currencyButton: {
        width: 53,
        height: 35,
        borderRadius: 999,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: '#F8C63D',
        justifyContent: 'center',
        alignItems: 'center',
    },
    currencyButtonText: {
        fontFamily: 'Avenir',
        fontWeight: '800',
        fontSize: 14,
        color: '#000000',
    },
    amountText: {
        fontFamily: 'Avenir',
        fontWeight: '800',
        fontSize: 40,
        marginLeft: 10,
    },
    depositAmount: {
        color: '#2DCA11',
    },
    payAmount: {
        color: '#CA2A11',
    },
    zeroAmount: {
        color: '#CDCDCD',
    },
    detailedLabel: {
        fontFamily: 'Avenir',
        fontWeight: '500',
        fontSize: 15,
        color: '#000000',
        marginBottom: 10,
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
        overflow: 'visible',
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
    safeAreaBottom: {
        padding: 10,
    },
    closeButton: {
        height: 40,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#F8C63D',
        backgroundColor: '#F8C63D',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButtonText: {
        fontFamily: 'Avenir',
        fontWeight: '800',
        fontSize: 14,
        color: '#000000',
    },
    keypadModalContainer: {
        margin: 0,
        justifyContent: 'flex-end',
    },
});

export default OperationsModal;
