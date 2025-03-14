import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Keypad from '../Keypad';
import Modal from 'react-native-modal';

const SpendingModal = ({
    visible,
    onSave,
    onRequestClose,
    amount,
    onKeyPress,
    modalTitle,
}) => {
    const insets = useSafeAreaInsets();
    const windowHeight = Dimensions.get('window').height;
    const modalHeight = windowHeight - insets.top;

    const now = new Date();
    const currentMonthIndex = now.getMonth();
    const nextMonthIndex = (currentMonthIndex + 1) % 12;
    const monthAbbreviations = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const defaultTitle = `Monthly spending goal, 1 ${monthAbbreviations[currentMonthIndex].toLowerCase()} - 1 ${monthAbbreviations[nextMonthIndex].toLowerCase()}`;

    return (
        <Modal
            isVisible={visible}
            onSwipeComplete={onRequestClose}
            swipeDirection="down"
            onBackdropPress={onRequestClose}
            style={styles.modal}
            animationIn="slideInUp"
            animationOut="slideOutDown"
        >
            <View style={[styles.modalContainer, { height: modalHeight }]}>
                <View style={styles.contentContainer}>
                    <View style={styles.modalHandle} />

                    <Text style={styles.modalTitle}>
                        {modalTitle || defaultTitle}
                    </Text>

                    <View style={styles.currencyRow}>
                        <View style={styles.currencyPill}>
                            <Text style={styles.currencyPillText}>USD</Text>
                        </View>
                        <Text style={styles.amountText}>{amount}</Text>
                    </View>

                    <View style={{ marginBottom: 40 }} />

                    <TouchableOpacity style={styles.saveButton} onPress={onSave}>
                        <Text style={styles.saveButtonText}>Save</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.keypadContainer}>
                    <Keypad onKeyPress={onKeyPress} />
                </View>
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
        justifyContent: 'space-between',
    },
    contentContainer: {
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    modalHandle: {
        width: 40,
        height: 4,
        backgroundColor: '#20252C',
        borderRadius: 999,
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
    currencyRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
    },
    currencyPill: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 999,
        backgroundColor: '#F8C63D',
        marginRight: 10,
    },
    currencyPillText: {
        fontFamily: 'Avenir',
        fontWeight: '800',
        fontSize: 14,
        color: '#000000',
    },
    amountText: {
        fontFamily: 'Avenir',
        fontWeight: '800',
        fontSize: 40,
        color: '#000000',
    },
    saveButton: {
        height: 40,
        borderWidth: 1,
        borderColor: '#F8C63D',
        backgroundColor: '#F8C63D',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        shadowColor: '#0A0D12',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        marginBottom: 20,
    },
    saveButtonText: {
        fontFamily: 'Avenir',
        fontWeight: '800',
        fontSize: 14,
        color: '#000000',
    },
    keypadContainer: {
        paddingBottom: 20,
    },
});

export default SpendingModal;
