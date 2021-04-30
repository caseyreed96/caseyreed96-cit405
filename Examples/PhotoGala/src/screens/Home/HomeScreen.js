import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';

import AppHeader from '../../components/AppHeader.js';

import {styles} from '../../styles/styles.js';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  render() {
    return (
      <View style={styles.container}>
        <AppHeader nav={this.props} />
        <Text style={styles.menuHeading} > Home Screen </Text>
        <View style={styles.mainMenu}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Photos')}>
            <Text style={styles.menuItems} > View Photos </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Settings')}>
            <Text style={styles.menuItems} > View Settings </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
