import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
} from 'react-native';

import FireSVG from '../assets/goal/FireSVG';
import MoneySVG from '../assets/goal/MoneySVG';
import GiftSVG from '../assets/goal/GiftSVG';
import { useNavigation } from '@react-navigation/native';

const GoalScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.outerSafeContainer}>
            <StatusBar barStyle="light-content" />
            <View style={styles.innerContainer}>
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate('Costs')}
                >
                    <Text style={styles.cardTitle}>Control costs</Text>
                    <Text style={styles.cardSubtitle}>
                        Set yourself a monthly spending goal
                    </Text>
                    <View style={styles.iconContainer}>
                        <FireSVG />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate('Earnings')}
                >
                    <Text style={styles.cardTitle}>Set an earnings goal</Text>
                    <Text style={styles.cardSubtitle}>
                        Earn in a month at most
                    </Text>
                    <View style={styles.iconContainer}>
                        <MoneySVG />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate('MoneyBox')}
                >
                    <Text style={styles.cardTitle}>Realize a dream</Text>
                    <Text style={styles.cardSubtitle}>
                        Save up for your most coveted item
                    </Text>
                    <View style={styles.iconContainer}>
                        <GiftSVG />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    outerSafeContainer: {
        flex: 1,
        backgroundColor: '#20252C',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
    },
    innerContainer: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    card: {
        height: 142,
        borderWidth: 1,
        borderColor: '#617085',
        borderRadius: 20,
        backgroundColor: '#363E4A',
        marginBottom: 16,
        position: 'relative',
        paddingTop: 20,
        overflow: 'hidden',
    },
    cardTitle: {
        fontFamily: 'Avenir',
        fontWeight: '800',
        fontSize: 20,
        color: '#FFFFFF',
        marginLeft: 21,
        marginBottom: 10,
    },
    cardSubtitle: {
        fontFamily: 'Avenir',
        fontWeight: '400',
        fontSize: 14,
        color: '#FFFFFF',
        marginLeft: 21,
    },
    iconContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
});

export default GoalScreen;
