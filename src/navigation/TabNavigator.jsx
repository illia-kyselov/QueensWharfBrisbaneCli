import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import StudyScreen from '../screens/StudyScreen';
import ProfileStack from './Stacks/ProfileStack';
import GoalStack from './Stacks/GoalStack';

import HomeSVG from '../assets/navbar/HomeSVG';
import GoalSVG from '../assets/navbar/GoalSVG';
import StudySVG from '../assets/navbar/StudySVG';
import ProfileSVG from '../assets/navbar/ProfileSVG';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ color }) => {
                        switch (route.name) {
                            case 'Home':
                                return <HomeSVG color={color} />;
                            case 'Goal':
                                return <GoalSVG color={color} />;
                            case 'Study':
                                return <StudySVG color={color} />;
                            case 'Profile':
                                return <ProfileSVG color={color} />;
                            default:
                                return null;
                        }
                    },
                    tabBarActiveTintColor: '#000000',
                    tabBarInactiveTintColor: '#ACACAC',
                    tabBarLabelStyle: {
                        fontFamily: 'Avenir',
                        fontWeight: '500',
                        fontSize: 12,
                        marginTop: 2,
                    },
                    tabBarStyle: {
                        backgroundColor: '#FFFFFF',
                        height: 100,
                    },
                    tabBarIconStyle: {
                        marginTop: 10,
                    },
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />

                <Tab.Screen name="Goal" component={GoalStack} />

                <Tab.Screen name="Study" component={StudyScreen} />
                <Tab.Screen name="Profile" component={ProfileStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
