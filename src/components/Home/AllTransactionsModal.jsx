import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import OperationCard from './OperationCard';
import { getDateHeader } from '../../helpers/dateHelpers';

const AllTransactionsModal = ({ isVisible, onClose, transactions }) => {
    const insets = useSafeAreaInsets();
    const windowHeight = Dimensions.get('window').height;
    const modalHeight = windowHeight - insets.top;

    const groupedTx = {};
    if (!transactions || !Array.isArray(transactions)) return null;
    transactions.forEach((tx) => {
        const header = getDateHeader(tx.date);
        if (!groupedTx[header]) groupedTx[header] = [];
        groupedTx[header].push(tx);
    });
    const groupKeys = Object.keys(groupedTx);

    return (
        <Modal
            isVisible={isVisible}
            onSwipeComplete={onClose}
            swipeDirection="down"
            onBackdropPress={onClose}
            style={styles.modal}
        >
            <View style={[styles.modalContainer, { height: modalHeight }]}>
                <View style={styles.modalHandle} />
                <Text style={styles.modalTitle}>All operations</Text>
                <ScrollView contentContainerStyle={styles.modalContent}>
                    {groupKeys.map((header, idx) => (
                        <View key={header} style={idx > 0 ? { marginTop: 20 } : {}}>
                            <Text style={styles.groupHeader}>{header}</Text>
                            <View style={{ marginBottom: 10 }} />
                            {groupedTx[header].map((op) => (
                                <OperationCard key={op.id} operation={op} isModal />
                            ))}
                        </View>
                    ))}
                </ScrollView>
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
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    modalHandle: {
        width: 40,
        height: 4,
        backgroundColor: '#20252C',
        borderRadius: 999,
        alignSelf: 'center',
        marginVertical: 10,
    },
    modalTitle: {
        fontFamily: 'Avenir',
        fontWeight: '500',
        fontSize: 15,
        color: '#000000',
        marginBottom: 20,
    },
    modalContent: {
        paddingBottom: 20,
    },
    groupHeader: {
        fontFamily: 'Avenir',
        fontWeight: '400',
        fontSize: 13,
        color: '#4C4C4C',
        marginBottom: 10,
    },
});

export default AllTransactionsModal;
