import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home/HomeScreen.js';
import PhotosScreen from '../screens/Home/PhotosScreen.js';
import PhotoViewerScreen from '../screens/Home/PhotoViewerScreen.js';
import PhotoDetailsScreen from '../screens/Home/PhotoDetailsScreen.js';

const Stack = createStackNavigator()

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{ title: 'Home Screen' }}
        />
        <Stack.Screen
          name='Photos'
          component={PhotosScreen}
          options={{ title: 'Photo Gala' }}
        />
        <Stack.Screen
          name='PhotoViewerScreen'
          component={PhotoViewerScreen}
          options={{ title: 'Photo Viewer' }}
        />
        <Stack.Screen
          name='Details'
          component={PhotoDetailsScreen}
          options={{ title: 'Photo Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
