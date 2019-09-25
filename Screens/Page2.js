import React, { Component } from "react";
import * as Font from 'expo-font';
import { View, StatusBar, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationBar, ListView, ImageBackground, Tile, Title, Subtitle, Divider } from "@shoutem/ui";
import { GET } from "../api/caller";
import { STORE_LIST_ENDPOINT } from "../api/endpoint";

class Page2 extends Component {

  state = {
    fontsAreLoaded: false,
    stores: []
  };

  componentWillMount = async () => {
    await Font.loadAsync({
      'Rubik': require('../node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
      'Rubik-Black': require('../node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
      'Rubik-BlackItalic': require('../node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
      'Rubik-Bold': require('../node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
      'Rubik-BoldItalic': require('../node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
      'Rubik-Italic': require('../node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
      'Rubik-Light': require('../node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
      'Rubik-LightItalic': require('../node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
      'Rubik-Medium': require('../node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
      'Rubik-MediumItalic': require('../node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
      'Rubik-Regular': require('../node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
      'rubicon-icon-font': require('../node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
    });

    this.setState({ fontsAreLoaded: true });
  }

  constructor(props) {
    super(props)

    this.renderRow = this.renderRow.bind(this);
    
  }
  async componentDidMount(){
    await GET(STORE_LIST_ENDPOINT, {}, {
      'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYWRtaW4iLCJpYXQiOjE1NjkzMjg5MzMsImV4cCI6MTU2OTQxNTMzM30.KCJEFI9UkbsfQxPJAIlZie2mNvJbQYSLS6tVa63OiEk"
    }).then(res => res.json()).then(res => {
      console.log(res);
      this.setState({ stores: res.data.items })
    }).catch(err => {
      console.log(err);
    })
  }

  renderRow(restaurant) {
    if (!restaurant) {
      return null;
    }

    return (
      <View>
        <ImageBackground
          styleName="large-banner"
          source={{ uri: "https://shoutem.github.io/static/getting-started/restaurant-3.jpg"  }}
        >
          <Tile>
            <Title styleName="md-gutter-bottom">{restaurant.name}</Title>
            <Subtitle styleName="sm-gutter-horizontal">{restaurant.address}</Subtitle>
          </Tile>
        </ImageBackground>
        <Divider styleName="line" />
      </View>
    );
  }

  render() {
    if (!this.state.fontsAreLoaded) {
      return <ActivityIndicator />;
    }

    const { stores } = this.state;

    return (
      <View style={styles.navigation}>
        <NavigationBar
          title="Store of HKT"
          styleName="inline"
        />
        <ListView
          data={stores}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

export default Page2;

const styles = StyleSheet.create({
  navigation: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 55,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});