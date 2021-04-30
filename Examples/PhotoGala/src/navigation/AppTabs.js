import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from '../screens/Home'; //Navigation stack defined in Photos/index.js
import Settings from '../screens/Settings'; //Navigation stack defined in Settings/index.js

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
  //<NavigationContainer> //Needed only if we are not defining drawer navigator menu
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Settings') {
              iconName =  'settings';
              return <MaterialIcons name={iconName} size={size} color={color} />;
            }

          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
  //</NavigationContainer>
  );
}
