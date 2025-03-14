import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { setEarningsData } from '../../store/slices/earningsSlice';
import SpendingModal from '../../components/Goal/SpendingModal';
import { selectCurrentMonthDeposit } from '../../store/slices/userSlice';

function EarningsScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const earningsData = useSelector((state) => state.earnings.earningsData);
    const currentMonthDeposit = useSelector(selectCurrentMonthDeposit);

    const [showModal, setShowModal] = useState(false);
    const [amount, setAmount] = useState('0');

    const handleAddPress = () => {
        setShowModal(true);
    };

    const handleSavePress = () => {
        const monthAbbreviations = [
            'jan', 'feb', 'mar', 'apr', 'may', 'jun',
            'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
        ];
        let computedDateRange = '';

        if (earningsData.length > 0) {
            const lastEntry = earningsData[earningsData.length - 1];
            if (lastEntry.dateRange) {
                const parts = lastEntry.dateRange.split(' - ');
                if (parts.length === 2) {
                    const secondPart = parts[1].trim();
                    const existingMonth = secondPart.replace('1 ', '').toLowerCase();
                    const lastMonthIndex = monthAbbreviations.indexOf(existingMonth);
                    computedDateRange = `1 ${existingMonth} - 1 ${monthAbbreviations[(lastMonthIndex + 1) % 12]}`;
                } else {
                    const now = new Date();
                    const currentMonthIndex = now.getMonth();
                    const nextMonthIndex = (currentMonthIndex + 1) % 12;
                    computedDateRange = `1 ${monthAbbreviations[currentMonthIndex]} - 1 ${monthAbbreviations[nextMonthIndex]}`;
                }
            } else {
                const now = new Date();
                const currentMonthIndex = now.getMonth();
                const nextMonthIndex = (currentMonthIndex + 1) % 12;
                computedDateRange = `1 ${monthAbbreviations[currentMonthIndex]} - 1 ${monthAbbreviations[nextMonthIndex]}`;
            }
        } else {
            const now = new Date();
            const currentMonthIndex = now.getMonth();
            const nextMonthIndex = (currentMonthIndex + 1) % 12;
            computedDateRange = `1 ${monthAbbreviations[currentMonthIndex]} - 1 ${monthAbbreviations[nextMonthIndex]}`;
        }

        dispatch(
            setEarningsData({
                dateRange: computedDateRange,
                goal: Number(amount),
                earned: 0,
            })
        );
        setShowModal(false);
    };

    const handleKeyPress = (key) => {
        if (key === '⌫') {
            setAmount((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
        } else if (key === '.') {
            setAmount((prev) => (prev.includes('.') ? prev : prev + '.'));
        } else {
            setAmount((prev) => (prev === '0' ? key : prev + key));
        }
    };

    const now = new Date();
    const monthAbbreviations = [
        'jan', 'feb', 'mar', 'apr', 'may', 'jun',
        'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
    ];
    const currentMonthAbbrev = monthAbbreviations[now.getMonth()];

    return (
        <SafeAreaView style={styles.safeContainer}>
            <StatusBar barStyle="light-content" />
            <View style={{ marginTop: 12 }} />

            <Header title="Earnings" onBackPress={() => navigation.goBack()} />

            <View style={{ marginTop: 30 }} />

            {earningsData.length === 0 ? (
                <View style={styles.massageContent}>
                    <Text style={styles.infoText}>
                        You have no entries for this month. Add them
                    </Text>
                    <TouchableOpacity style={styles.addButton} onPress={handleAddPress}>
                        <Text style={styles.addButtonText}>Add</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                earningsData.map((data, index) => {
                    const dateRange = data.dateRange || 'No data';
                    const goal = data.goal || 0;
                    const isCurrentMonth = dateRange.toLowerCase().startsWith(`1 ${currentMonthAbbrev}`);
                    const depositAmount = isCurrentMonth ? currentMonthDeposit : data.earned || 0;

                    const rawProgress = goal > 0 ? (depositAmount / goal) * 100 : 0;
                    const progress = Math.min(rawProgress, 100);

                    let progressColor = '#D3D8DF';
                    if (progress >= 50 && progress < 100) {
                        progressColor = '#FB8484';
                    } else if (progress >= 100) {
                        progressColor = '#96FB84';
                    }

                    return (
                        <View key={index} style={styles.content}>
                            <Text style={styles.dateRange}>{dateRange}</Text>

                            <View style={styles.spendingLimitContainer}>
                                <Text style={styles.spendingLimitText}>Goal</Text>
                                <Text style={styles.spendingLimitValue}>
                                    ${goal.toLocaleString()}
                                </Text>
                            </View>

                            <View style={styles.progressBarBackground}>
                                <View
                                    style={[
                                        styles.progressBarFill,
                                        { width: `${progress}%`, backgroundColor: progressColor },
                                    ]}
                                />
                            </View>

                            <Text style={styles.spentText}>Deposit ${depositAmount.toLocaleString()}</Text>
                        </View>
                    );
                })
            )}

            {earningsData.length > 0 && (
                <TouchableOpacity style={styles.nextMonthButton} onPress={handleAddPress}>
                    <Text style={styles.nextMonthButtonText}>Add for the next month</Text>
                </TouchableOpacity>
            )}

            <SpendingModal
                visible={showModal}
                onSave={handleSavePress}
                onRequestClose={() => setShowModal(false)}
                amount={amount}
                onKeyPress={handleKeyPress}
                modalTitle="Monthly earnings goal, 1 oct - 1 nov"
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#20252C',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        position: 'relative',
    },
    content: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    massageContent: {
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    infoText: {
        fontFamily: 'Avenir',
        fontWeight: '400',
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 16,
        textAlign: 'center',
        maxWidth: 224,
    },
    addButton: {
        width: 150,
        height: 40,
        borderWidth: 1,
        borderColor: '#F8C63D',
        backgroundColor: '#F8C63D',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonText: {
        fontFamily: 'Avenir',
        fontWeight: '800',
        fontSize: 14,
        color: '#000000',
    },
    dateRange: {
        fontFamily: 'Avenir',
        fontWeight: '800',
        fontSize: 18,
        color: '#FFFFFF',
        marginBottom: 25,
    },
    spendingLimitContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    spendingLimitText: {
        fontFamily: 'Avenir',
        fontWeight: '500',
        fontSize: 16,
        color: '#FFFFFF',
    },
    spendingLimitValue: {
        fontFamily: 'Avenir',
        fontWeight: '500',
        fontSize: 16,
        color: '#FFFFFF',
    },
    progressBarBackground: {
        height: 4,
        backgroundColor: '#363E4A',
        borderRadius: 999,
        overflow: 'hidden',
        marginBottom: 10,
    },
    progressBarFill: {
        height: '100%',
        borderRadius: 999,
    },
    spentText: {
        fontFamily: 'Avenir',
        fontWeight: '400',
        fontSize: 12,
        color: '#B1ACAC',
        marginBottom: 10,
    },
    nextMonthButton: {
        height: 40,
        borderWidth: 1,
        borderColor: '#F8C63D',
        backgroundColor: '#F8C63D',
        borderRadius: 15,
        paddingTop: 10,
        paddingBottom: 10,
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#0A0D12',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    nextMonthButtonText: {
        fontFamily: 'Avenir',
        fontWeight: '800',
        fontSize: 14,
        color: '#000000',
    },
});

export default EarningsScreen;
