import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DepositSVG from '../../assets/home/DepositSVG';
import PaySVG from '../../assets/home/PaySVG';

const ActionButtons = ({ onDepositPress, onPayPress }) => {
    return (
        <View style={styles.buttonRow}>
            <TouchableOpacity style={[styles.actionButton, { marginRight: 20 }]} onPress={onDepositPress}>
                <DepositSVG style={{ marginRight: 8 }} />
                <Text style={styles.actionButtonText}>Deposit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={onPayPress}>
                <PaySVG style={{ marginRight: 8 }} />
                <Text style={styles.actionButtonText}>Pay</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    actionButton: {
        flex: 1,
        height: 40,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#F8C63D',
        backgroundColor: '#F8C63D',
        shadowColor: '#0A0D12',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionButtonText: {
        fontFamily: 'Avenir',
        fontWeight: '800',
        fontSize: 14,
        color: '#000000',
    },
});

export default ActionButtons;
