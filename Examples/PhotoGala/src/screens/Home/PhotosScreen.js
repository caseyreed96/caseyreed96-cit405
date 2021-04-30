import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, FlatList, SafeAreaView } from 'react-native';

import AppHeader from '../../components/AppHeader.js';
import FlickrAPI from "../../scripts/flickr_api";

import {styles} from '../../styles/styles.js';

class PhotosScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  componentDidMount() {
    this.setState({refreshing: true, isLoading: true,});
    FlickrAPI.fetchPhotos().then(photos => {
      //console.log(photos);
      this.setState({ data: photos.photos.photo });
    });
}
  render() {
    return (
      <View style={styles.container}>
        <AppHeader nav={this.props} />
        <Text style={styles.photoHeaderText}>Photo Listing</Text>
        <SafeAreaView>
          <FlatList
            data={this.state.data}
            renderItem={({item}) =>
              <View style={{flexDirection: 'column', padding: 10, alignItems: 'stretch'}}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Details', {photo_id: item.id, secret:item.secret, server: item.server, farm: item.farm, owner: item.owner})}>
                  <View>
                    <Text style={{paddingRight: 20}}>{item.title}</Text>
                      <Text>View Photo</Text>
                    <Text>------------------------------------------------------------</Text>
                  </View>
                </TouchableHighlight>

              </View>
            }
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
    );
  }
}

export default PhotosScreen;
