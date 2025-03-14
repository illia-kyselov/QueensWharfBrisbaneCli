import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import ProfileViewScreen from '../../screens/ProfileViewScreen';
import ProfileScreen from '../../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
    const { email, firstName, lastName, about, avatarUri } = useSelector(
        (state) => state.user
    );

    const hasUserData =
        email.trim() ||
        firstName.trim() ||
        lastName.trim() ||
        about.trim() ||
        (avatarUri && avatarUri.trim());

    return (
        <Stack.Navigator
            initialRouteName={hasUserData ? 'ProfileView' : 'Profile'}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="ProfileView" component={ProfileViewScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    );
}
