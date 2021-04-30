import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';

import AppHeader from '../../components/AppHeader.js';
import FlickrAPI from "../../scripts/flickr_api";

import {styles} from '../../styles/styles.js';

class SettingsScreen extends React.Component {

  constructor() {
    super();
    this.state = {}
  };
  componentDidMount() {
    this.setState({refreshing: true, isLoading: true,});
    FlickrAPI.fetchProfile().then(json => {
      this.setState({
        id: json.profile.id,
        first_name: json.profile.first_name,
        last_name: json.profile.last_name,
        occupation: json.profile.occupation,
        city: json.profile.city,
        country: json.profile.country,
        profile_description: json.profile.profile_description,
       });
    });
    FlickrAPI.fetchProfilePhoto().then(json => {
      this.setState({photo_uri: json.photo_url});
    });
}

  render() {
    return (
      <View style={styles.container}>
        <AppHeader nav={this.props} />
        <View style={styles.settingsHeaderView}>
          <Text style={styles.settingsHeaderText}>Your Flickr Settings </Text>
        </View>
        <View style={styles.settingsItem}>
          <Text style={styles.settingsText} >Name: {this.state.first_name} {this.state.last_name} </Text>
        </View>
        <View style={styles.settingsItem}>
          <Text style={styles.settingsText} >City: {this.state.city} </Text>
        </View>
        <View style={styles.settingsItem}>
          <Text style={styles.settingsText} >Country: {this.state.country} </Text>
        </View>
        <View style={styles.settingsItem}>
          <Text style={styles.settingsText} >Description: {this.state.profile_description} </Text>
        </View>
        <View style={styles.settingsItem}>
          <Text style={styles.settingsText} >Custom Image:  </Text>
          <Image
            source={{uri: this.state.photo_uri }}
            style = {{ width: 200, height: 200 }}
          />
        </View>
      </View>
    )
  }
}
export default SettingsScreen;
