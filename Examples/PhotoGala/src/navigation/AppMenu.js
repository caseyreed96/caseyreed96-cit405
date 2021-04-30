import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text, Image, Button, TouchableHighlight } from 'react-native';

import AppTabs from './AppTabs.js';
import {styles} from '../styles/styles.js';

const Drawer = createDrawerNavigator();
function CustomDrawerContent({ navigation }) {
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.drawerHeaderView}>
        <Text style={styles.drawerHeaderText}>Main Menu</Text>
      </View>
      <TouchableHighlight onPress={() => navigation.navigate('Home')}>
        <Text style={styles.drawerMenuItem}> Home </Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('Photos')}>
        <Text style={styles.drawerMenuItem}> Photo Gala </Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.drawerMenuItem}> Settings </Text>
      </TouchableHighlight>
    </View>
  );
}

export default function AppMenu() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={AppTabs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
