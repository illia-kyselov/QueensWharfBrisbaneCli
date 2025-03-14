import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Keypad = ({ onKeyPress }) => {
    const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '⌫'];

    return (
        <View style={styles.sheetContainer}>
            <View style={styles.handle} />

            <View style={styles.keypadGrid}>
                {keys.map((key) => (
                    <TouchableOpacity
                        key={key}
                        style={styles.keypadButton}
                        onPress={() => onKeyPress(key)}
                    >
                        <Text style={styles.keypadButtonText}>{key}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    sheetContainer: {
        height: 344,
        backgroundColor: '#16191D',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center',
    },
    handle: {
        width: 40,
        height: 4,
        borderRadius: 999,
        backgroundColor: '#FFFFFF',
        marginTop: 15,
        marginBottom: 15,
    },
    keypadGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    keypadButton: {
        width: 104,
        height: 50,
        backgroundColor: '#20252C',
        borderRadius: 208,
        padding: 8,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    keypadButtonText: {
        fontFamily: 'Avenir',
        fontWeight: '500',
        fontSize: 26,
        color: '#FFFFFF',
    },
});

export default Keypad;
