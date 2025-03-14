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
import CrownSVG from '../../assets/goal/CrownSVG';
import { useNavigation } from '@react-navigation/native';
import { setSpendingData } from '../../store/slices/goalSlice';
import SpendingModal from '../../components/Goal/SpendingModal';
import { selectCurrentMonthSpent } from '../../store/slices/userSlice';

function CostsScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const spendingData = useSelector((state) => state.goal.spendingData);
    const currentMonthSpent = useSelector(selectCurrentMonthSpent);

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
        const now = new Date();
        const currentMonthIndex = now.getMonth();
        const currentMonthAbbrev = monthAbbreviations[currentMonthIndex];

        let computedDateRange = '';

        if (spendingData.length > 0) {
            const lastEntry = spendingData[spendingData.length - 1];
            if (lastEntry.dateRange) {
                const parts = lastEntry.dateRange.split(' - ');
                if (parts.length === 2) {
                    const secondPart = parts[1].trim();
                    const existingMonth = secondPart.replace('1 ', '').toLowerCase();
                    const lastMonthIndex = monthAbbreviations.indexOf(existingMonth);
                    computedDateRange = `1 ${existingMonth} - 1 ${monthAbbreviations[(lastMonthIndex + 1) % 12]}`;
                } else {
                    const nextMonthIndex = (currentMonthIndex + 1) % 12;
                    computedDateRange = `1 ${monthAbbreviations[currentMonthIndex]} - 1 ${monthAbbreviations[nextMonthIndex]}`;
                }
            } else {
                const nextMonthIndex = (currentMonthIndex + 1) % 12;
                computedDateRange = `1 ${monthAbbreviations[currentMonthIndex]} - 1 ${monthAbbreviations[nextMonthIndex]}`;
            }
        } else {
            const nextMonthIndex = (currentMonthIndex + 1) % 12;
            computedDateRange = `1 ${monthAbbreviations[currentMonthIndex]} - 1 ${monthAbbreviations[nextMonthIndex]}`;
        }

        const isCurrentMonthCard = computedDateRange.toLowerCase().startsWith(`1 ${currentMonthAbbrev}`);

        dispatch(setSpendingData({
            dateRange: computedDateRange,
            limit: Number(amount),
            spent: isCurrentMonthCard ? currentMonthSpent : 0,
            isCurrentMonth: isCurrentMonthCard,
        }));
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

            <Header title="Costs" onBackPress={() => navigation.goBack()} />

            <View style={{ marginTop: 30 }} />

            {spendingData.length > 0 ? (
                spendingData.map((data, index) => {
                    const dateRange = data.dateRange || 'No data';
                    const spendingLimit = data.limit || 0;

                    const isCurrentMonth = data.isCurrentMonth !== undefined
                        ? data.isCurrentMonth
                        : dateRange.toLowerCase().startsWith(`1 ${currentMonthAbbrev}`);

                    const spent = isCurrentMonth ? currentMonthSpent : data.spent || 0;
                    const progress = spendingLimit > 0 ? Math.min((spent / spendingLimit) * 100, 100) : 0;
                    const progressColor = spent >= spendingLimit ? '#FB8484' : '#96FB84';

                    return (
                        <View key={index} style={styles.content}>
                            <Text style={styles.dateRange}>{dateRange}</Text>

                            <View style={styles.spendingLimitContainer}>
                                <Text style={styles.spendingLimitText}>Spending limit</Text>
                                <Text style={styles.spendingLimitValue}>
                                    ${spendingLimit.toLocaleString()}
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

                            <Text style={styles.spentText}>Spend ${spent.toLocaleString()}</Text>

                            <View style={styles.crownContainer}>
                                {Array.from({ length: 10 }).map((_, index) => (
                                    <CrownSVG key={index} style={styles.crown} />
                                ))}
                            </View>
                        </View>
                    );
                })
            ) : (
                <View style={styles.massageContent}>
                    <Text style={styles.infoText}>
                        You have no entries for this month. Add them
                    </Text>

                    <TouchableOpacity style={styles.addButton} onPress={handleAddPress}>
                        <Text style={styles.addButtonText}>Add</Text>
                    </TouchableOpacity>
                </View>
            )}

            {spendingData.length > 0 && (
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
    crownContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginBottom: 30,
    },
    crown: {
        marginHorizontal: 2,
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

export default CostsScreen;
