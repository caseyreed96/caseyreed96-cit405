import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';

import AppHeader from '../../components/AppHeader.js';

import {styles} from '../../styles/styles.js';

import FlickrAPI from "../../scripts/flickr_api";

class PhotoDetailsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        params: props.route.params,
    };
    console.log(this.state.params);
  };

  componentDidMount() {
    this.setState({refreshing: true, isLoading: true,});
    let url=FlickrAPI.fetchPhoto(this.state.params.photo_id, this.state.params.server, this.state.params.secret, this.state.params.farm, this.state.params.owner);
    this.setState({ photo_url: url });
}


  render() {
    return (
      <View style={styles.container}>
        <AppHeader nav={this.props} />
        <Text style={styles.photoHeaderText} > Photo Details </Text>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: this.state.photo_url}}
            style = {{ width: 200, height: 200, align: 'center' }}
          />
        </View>
        <Text style={styles.imageCaption} > Img URL: {this.state.params.url}  </Text>
        <Text style={styles.imageCaption} > Img ID:  {this.state.params.photo_id} </Text>
        <Text style={styles.imageCaption} > Img Server ID:  {this.state.params.server_id} </Text>
        <Text style={styles.imageCaption} > Farm ID: {this.state.params.farm} </Text>
      </View>
    )
  }
}
export default PhotoDetailsScreen;
