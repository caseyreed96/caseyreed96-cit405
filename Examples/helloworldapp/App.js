import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableHighlight, Alert } from "react-native";
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.containerMain}>
      <Text style={styles.titleText}>
        Hello <Text style={styles.helloWorldText}>World!</Text>
      </Text>
      <Image
        style={styles.earthImage}
        source={require('./img/earth.png')}
      />
      <Button title="Press Me" onPress={clickAlert} />
    </View>
  );
}

function clickAlert() {
  Alert.alert('Hello World from standard function.');
}

const clickAlertES6 = () => {
  Alert.alert('Hello World from es6 function.')
};

const styles = StyleSheet.create({
  containerMain: {
    padding: 30,
  },
  titleText: {
    paddingTop: 25,
    fontSize: 25,
    color: 'black',
    fontWeight: "bold"
  },
  helloWorldText: {
    color: 'green',
  },
  earthImage: {
    width: 100,
    height: 100,
  },
  textButton: {
    textAlign: 'center',
    padding:15,
    backgroundColor:'lightgray',
  }
});
