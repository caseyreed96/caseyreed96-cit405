import React from 'react';
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Settings from './Settings.js'

import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function SettingsScreen({ navigation }) {
    return (
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{ title: 'Settings' }}
            />
        </Stack.Navigator>
    );
}
