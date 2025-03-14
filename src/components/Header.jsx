import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ArrowBackSVG from '../assets/goal/ArrowBackSVG';

const Header = ({ title, onBackPress }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
                <ArrowBackSVG style={styles.backIcon} />
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        height: 40,
        position: 'relative',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 10,
    },
    backIcon: {
        marginRight: 6,
    },
    backText: {
        fontFamily: 'Avenir',
        fontWeight: '500',
        fontSize: 16,
        color: '#FFFFFF',
    },
    headerTitle: {
        fontFamily: 'Avenir',
        fontWeight: '500',
        fontSize: 16,
        color: '#FFFFFF',
        position: 'absolute',
        left: '50%',
        transform: [{ translateX: -26 }],
    },
});

export default Header;
