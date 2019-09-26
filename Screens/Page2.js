import React, { Component } from "react";
import * as Font from 'expo-font';
import { View, StatusBar, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationBar, ListView, ImageBackground, Tile, Title, Subtitle, Divider } from "@shoutem/ui";

class Page2 extends Component{

    state = {
        fontsAreLoaded: false,
      };
    
      componentWillMount = async() => {
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
      
        this.state = {
          restaurants: [
            {
              "name": "Gaspar Brasserie",
              "address": "185 Sutter St, San Francisco, CA 94109",
              "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" },
            },
            {
              "name": "Chalk Point Kitchen",
              "address": "527 Broome St, New York, NY 10013",
              "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
            },
            {
              "name": "Kyoto Amber Upper East",
              "address": "225 Mulberry St, New York, NY 10012",
              "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg" },
            },
            {
              "name": "Sushi Academy",
              "address": "1900 Warner Ave. Unit A Santa Ana, CA",
              "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-4.jpg" },
            },
            {
              "name": "Sushibo",
              "address": "35 Sipes Key, New York, NY 10012",
              "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-5.jpg" },
            },
            {
              "name": "Mastergrill",
              "address": "550 Upton Rue, San Francisco, CA 94109",
              "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-6.jpg" },
            }
          ],
        }
      }
      
      renderRow(restaurant) {
        if (!restaurant) {
          return null;
        }
      
        return (
          <View>
            <ImageBackground
              styleName="large-banner"
              source={{ uri: restaurant.image.url }}
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

        const { restaurants } = this.state;
      
        return (
          <View style={styles.navigation}>
            <NavigationBar
              title="Restaurants"
              styleName="inline"
            />
            <ListView
              data={restaurants}
              renderRow={this.renderRow}
            />
          </View>
        );
      }
}

export default Page2;

const styles = StyleSheet.create({
    navigation:{
        paddingTop: StatusBar.currentHeight,
        paddingBottom: 55,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
      }
});