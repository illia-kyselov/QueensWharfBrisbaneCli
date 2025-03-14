import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const UserRow = ({ avatarUri, userName }) => {
    return (
        <View style={styles.userRow}>
            {avatarUri ? (
                <Image source={{ uri: avatarUri }} style={styles.userAvatar} />
            ) : (
                <View style={styles.userAvatar} />
            )}
            <Text style={styles.userName}>{userName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    userRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userAvatar: {
        width: 35,
        height: 35,
        borderRadius: 999,
        backgroundColor: '#FFFFFF',
        marginRight: 10,
    },
    userName: {
        fontFamily: 'Avenir',
        fontWeight: '800',
        fontSize: 17,
        color: '#FFFFFF',
    },
});

export default UserRow;
