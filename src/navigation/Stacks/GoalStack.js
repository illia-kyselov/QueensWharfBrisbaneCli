import React from 'react';

import GoalScreen from '../../screens/GoalScreen';
import CostsScreen from '../../screens/Goal/CostsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EarningsScreen from '../../screens/Goal/EarningsScreen';
import MoneyBoxScreen from '../../screens/Goal/MoneyBoxScreen';

const Stack = createNativeStackNavigator();

export default function GoalStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Goal" component={GoalScreen} />
            <Stack.Screen name="Costs" component={CostsScreen} />
            <Stack.Screen name="Earnings" component={EarningsScreen} />
            <Stack.Screen name="MoneyBox" component={MoneyBoxScreen} />
        </Stack.Navigator>
    );
}
