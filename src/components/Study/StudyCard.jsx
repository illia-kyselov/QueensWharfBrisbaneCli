import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ArrowSVG from '../../assets/study/ArrowSVG';

const StudyCard = ({ name, onPress, imageUri }) => {
    return (
        <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
            {imageUri ? (
                <Image style={styles.innerBlock} source={{ uri: imageUri }} />
            ) : (
                <View style={styles.innerBlock} />
            )}
            <Text style={styles.cardName}>{name}</Text>
            <View style={styles.arrowIcon}>
                <ArrowSVG />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '48%',
        height: 221,
        backgroundColor: '#363E4A',
        borderRadius: 20,
        marginBottom: 10,
        padding: 5,
        position: 'relative',
    },
    innerBlock: {
        backgroundColor: '#FFFFFF',
        height: 84,
        borderRadius: 19,
        marginBottom: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardName: {
        fontWeight: '500',
        fontSize: 14,
        marginLeft: 10,
        color: '#FFFFFF',
    },
    arrowIcon: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
});

export default StudyCard;
