import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Platform,
} from 'react-native';
import { useSelector } from 'react-redux';

function ProfileViewScreen({ navigation }) {
    const { email, firstName, lastName, about, avatarUri, money } = useSelector(
        (state) => state.user
    );

    const fullName = `${firstName || ''} ${lastName || ''}`.trim();
    const emailDisplay = email;
    const aboutDisplay = about;
    const moneyDisplay = money ? `$${money.toLocaleString()}` : '$0';

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FDF1CE' }}>
            <View
                style={{
                    height: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
                    backgroundColor: '#FDF1CE',
                }}
            />
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

            <View style={styles.safeContainer}>
                <View style={styles.header}>
                    <Image
                        source={require('../assets/profile/headerBG.png')}
                        style={styles.headerBG}
                        resizeMode="cover"
                    />
                    <TouchableOpacity
                        style={styles.editButton}
                        onPress={() => navigation.navigate('Profile')}
                    >
                        <Text style={styles.editButtonText}>Edit</Text>
                    </TouchableOpacity>
                </View>

                {avatarUri && (
                    <View style={styles.avatarWrapper}>
                        <Image source={require('../assets/profile/crown.png')} style={styles.crown} />
                        <View style={styles.avatarBorder}>
                            <View style={styles.avatarInner}>
                                <Image
                                    source={{ uri: avatarUri }}
                                    style={styles.avatarImage}
                                    resizeMode="cover"
                                />
                            </View>
                        </View>
                    </View>
                )}

                {(fullName || emailDisplay || aboutDisplay || moneyDisplay) && (
                    <View style={styles.content}>
                        {fullName ? <Text style={styles.nameText}>{fullName}</Text> : null}
                        {emailDisplay ? <Text style={styles.emailText}>{emailDisplay}</Text> : null}
                        {aboutDisplay ? <Text style={styles.descriptionText}>{aboutDisplay}</Text> : null}

                        {moneyDisplay && (
                            <View style={styles.moneyContainer}>
                                <Text style={styles.youHaveText}>You have</Text>
                                <Text style={styles.moneyText}>{moneyDisplay}</Text>
                            </View>
                        )}
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#20252C',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
    },
    header: {
        height: 200,
        backgroundColor: '#FDF1CE',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        overflow: 'hidden',
        position: 'relative',
    },
    headerBG: {
        width: '100%',
        height: '100%',
    },
    editButton: {
        position: 'absolute',
        top: 10,
        right: 15,
    },
    editButtonText: {
        fontFamily: 'Avenir',
        fontWeight: '500',
        fontSize: 16,
        color: '#000000',
    },
    avatarWrapper: {
        position: 'absolute',
        top: 150,
        alignSelf: 'center',
        width: 100,
        height: 100,
    },
    crown: {
        position: 'absolute',
        top: -40,
        right: -18,
        resizeMode: 'contain',
        zIndex: 2,
    },
    avatarBorder: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#FFFFFF4D',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarInner: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    avatarImage: {
        width: '100%',
        height: '100%',
    },
    content: {
        marginTop: 70,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    nameText: {
        fontFamily: 'Avenir',
        fontWeight: '800',
        fontSize: 22,
        color: '#FFFFFF',
        marginBottom: 2,
    },
    emailText: {
        fontFamily: 'Avenir',
        fontWeight: '500',
        fontSize: 18,
        color: '#FFFFFF',
        marginBottom: 20,
    },
    descriptionText: {
        fontFamily: 'Avenir',
        fontWeight: '400',
        fontSize: 15,
        color: '#FFFFFF',
        marginBottom: 40,
        textAlign: 'center',
    },
    moneyContainer: {
        height: 105,
        width: '100%',
        borderRadius: 20,
        backgroundColor: '#363E4A',
        padding: 15,
    },
    youHaveText: {
        fontFamily: 'Avenir',
        fontWeight: '400',
        fontSize: 15,
        color: '#FFFFFF',
        marginBottom: 2,
    },
    moneyText: {
        fontFamily: 'Avenir',
        fontWeight: '800',
        fontSize: 40,
        color: '#FFFFFF',
    },
});

export default ProfileViewScreen;
