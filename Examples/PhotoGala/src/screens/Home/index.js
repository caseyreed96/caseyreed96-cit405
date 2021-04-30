import React from 'react';
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen.js'
import PhotosScreen from './PhotosScreen.js'
import PhotoViewerScreen from './PhotoViewerScreen.js'
import PhotoDetailsScreen from './PhotoDetailsScreen.js'

const Stack = createStackNavigator();

export default function Photos({ navigation }) {
    return (
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'Home Screen' }}

          />
          <Stack.Screen
              name="Photos"
              component={PhotosScreen}
              options={{ title: 'Photo Listing' }}

          />
            <Stack.Screen
                name="PhotoViewer"
                component={PhotoViewerScreen}
                options={{ title: 'Photo Viewer' }}
            />
            <Stack.Screen
                name="Details"
                component={PhotoDetailsScreen}
                options={{ title: 'Photo Detail' }}
            />
        </Stack.Navigator>
    );
}
