import React, { Component } from "react";

import { StyleSheet, Text, View, TextInput, Image, ImageBackground } from "react-native";
import Forecast from "./Forecast.js";
import OpenWeatherMap from "./open_weather_map.js";
import Icon from 'react-native-vector-icons/FontAwesome';

class WeatherProject extends Component {
  constructor(props) {
    super(props);
    this.state = { zip: "", forecast: null };
  }

  getForecastDate(forecast_date){
    const unixTimestamp = forecast_date;
	const milliseconds = unixTimestamp * 1000;
	const dateObject = new Date(milliseconds);
	const humanDateFormat = dateObject.toLocaleString();
	return (humanDateFormat.substring(0,10));
  }
  
  getForecastIcon(forecast){
	  if(forecast.indexOf("Clouds")> -1)
		  return "cloudy";
	  else if(forecast.indexOf("Clear")> -1 || forecast.indexOf("Sunny")> -1)
		  return "sun";
	  else if(forecast.indexOf("rain")> -1 || forecast.indexOf("Thunder")> -1)
		  return "rainy-outline";
  }
  

  _handleTextChange = event => {
    let zip = event.nativeEvent.text;
    OpenWeatherMap.fetchForecast(zip).then(forecast => {
	  let forecast_props={
		  "city": forecast.city,
		  "date": this.getForecastDate(forecast.date),
		  "description": forecast.description,
		  "temp": forecast.temp,
		  "icon":this.getForecastIcon(forecast.main)
	  };
      this.setState({ forecast: forecast });
    });
  };

  render() {
    let content = null;
    if (this.state.forecast !== null) {
      content = (
	   <Forecast
          date={this.state.forecast.date}
          city={this.state.forecast.city}
          temp={Math.round((this.state.forecast.temp))}
          description={this.state.forecast.description}
          icon={this.state.forecast.icon}
       />
      );
    }

    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./images/weatherapp-caseyreed96-1.jpg")}
          resizeMode="cover"
          style={styles.backdrop}>
          <View style={styles.overlay}>
            <View style={styles.row}>
              <Text style={styles.mainText}>
                Current weather for
              </Text>
              <View style={styles.zipContainer}>
                <TextInput
                  style={[styles.zipCode, styles.mainText]}
                  onSubmitEditing={event => this._handleTextChange(event)}
                />
              </View>
            </View>
            {content}
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const baseFontSize = 16;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingTop: 30 },
  backdrop: { flex: 1, flexDirection: "column", resizeMode: "cover" },
  overlay: {
	height: 600,
    paddingTop: 5,
    backgroundColor: "#000000",
    opacity: 0.7,
    flexDirection: "column",
    alignItems: "center"
  },
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    padding: 130
  },
  zipContainer: {
    height: baseFontSize + 10,
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
  },
  zipCode: { flex: 1, flexBasis: 1, width: 50, height: baseFontSize },
  mainText: { fontSize: baseFontSize, color: "white" }
});

export default WeatherProject;
