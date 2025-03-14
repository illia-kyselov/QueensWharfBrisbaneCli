import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import useAvatarPicker from '../hooks/useAvatarPicker';

import {
    setAbout,
    setEmail,
    setFirstName,
    setLastName,
} from '../store/slices/userSlice';

import PlusSVG from '../assets/profile/PlusSVG';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const { email, firstName, lastName, about, avatarUri } = useSelector(
        (state) => state.user
    );

    const isFormValid =
        email.trim() !== '' &&
        firstName.trim() !== '' &&
        lastName.trim() !== '' &&
        avatarUri && avatarUri.trim() !== '';

    const selectAvatar = useAvatarPicker();

    const handleDone = () => {
        if (!isFormValid) return;
        navigation.navigate('ProfileView');
    };

    return (
        <SafeAreaView style={styles.safeContainer}>
            <TouchableOpacity
                style={styles.doneButton}
                disabled={!isFormValid}
                onPress={handleDone}
            >
                <Text
                    style={[
                        styles.doneButtonText,
                        { opacity: isFormValid ? 1 : 0.5 },
                    ]}
                >
                    Done
                </Text>
            </TouchableOpacity>

            <View style={styles.queenContainer}>
                <Image
                    source={require('../assets/profile/Queen.png')}
                    style={styles.queenImage}
                />
            </View>

            <View style={styles.container}>
                <View style={styles.avatarContainer}>
                    <Image
                        source={require('../assets/profile/crown.png')}
                        style={styles.crown}
                    />
                    <TouchableOpacity
                        style={styles.avatar}
                        onPress={selectAvatar}
                    >
                        {avatarUri ? (
                            <Image
                                source={{ uri: avatarUri }}
                                style={styles.avatarImage}
                            />
                        ) : (
                            <PlusSVG />
                        )}
                    </TouchableOpacity>
                </View>

                <View style={{ marginBottom: 45 }} />

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.value}
                        value={email}
                        onChangeText={(text) => dispatch(setEmail(text))}
                        placeholder="required"
                        placeholderTextColor="#848484"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Your first name</Text>
                    <TextInput
                        style={styles.value}
                        value={firstName}
                        onChangeText={(text) => dispatch(setFirstName(text))}
                        placeholder="required"
                        placeholderTextColor="#848484"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Your last name</Text>
                    <TextInput
                        style={styles.value}
                        value={lastName}
                        onChangeText={(text) => dispatch(setLastName(text))}
                        placeholder="required"
                        placeholderTextColor="#848484"
                    />
                </View>

                <View style={{ marginVertical: 10 }} />
                <Text style={styles.aboutLabel}>A little about myself</Text>

                <View style={styles.aboutContainer}>
                    <TextInput
                        style={styles.aboutInput}
                        value={about}
                        onChangeText={(text) => dispatch(setAbout(text))}
                        multiline
                        placeholder="Write something here..."
                        placeholderTextColor="#848484"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#20252C',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        overflow: 'hidden',
        position: 'relative',
    },
    doneButton: {
        position: 'absolute',
        top: 54,
        right: 15,
        zIndex: 2,
    },
    doneButtonText: {
        color: '#FFFFFF',
        fontFamily: 'Avenir',
        fontWeight: '500',
        fontSize: 16,
    },
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        paddingHorizontal: 20,
        paddingTop: 30,
        position: 'relative',
        zIndex: 1,
    },
    avatarContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    crown: {
        position: 'absolute',
        resizeMode: 'contain',
        top: -45,
        right: '30%',
        zIndex: 2,
    },
    avatar: {
        width: 100,
        height: 100,
        backgroundColor: '#363E4A',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    avatarImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    inputContainer: {
        height: 50,
        backgroundColor: 'rgba(54,62,74,0.8)',
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    label: {
        fontFamily: 'Avenir',
        fontWeight: '400',
        fontSize: 14,
        color: '#D9D9D9',
    },
    value: {
        fontFamily: 'Avenir',
        fontWeight: '400',
        fontSize: 14,
        color: '#FFFFFF',
        textAlign: 'right',
        flex: 1,
        marginLeft: 10,
    },
    aboutLabel: {
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: 10,
        color: '#696969',
        marginBottom: 5,
    },
    aboutContainer: {
        minHeight: 148,
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: '#20252CCC',
        borderColor: '#2B323B',
        marginBottom: 20,
        padding: 10,
    },
    aboutInput: {
        flex: 1,
        fontFamily: 'Inter',
        fontSize: 14,
        color: '#FFFFFF',
        textAlignVertical: 'top',
    },
    queenContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 200,
        height: 331,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
    },
    queenImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});

export default ProfileScreen;
