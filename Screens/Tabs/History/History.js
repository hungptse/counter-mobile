import React, { Component } from "react";
import { View, StatusBar, StyleSheet, Platform } from 'react-native';
import { NavigationBar, ListView, Caption, Title, Subtitle, Icon, Image, Divider, DropDownMenu, Row, Text, Button } from "@shoutem/ui";

class History extends Component{
    
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
          filters: [
            { name: 'Electricity', value: 'Electricity' },
            { name: 'Water', value: 'Water' },
          ],
        }
      }
      
      renderRow(restaurant) {
        if (!restaurant) {
          return null;
        }
      
        return (
           //  <View style={{paddingBottom: 10}}>
           //    <ImageBackground
           //      styleName="large-banner"
           //      source={{ uri: restaurant.image.url }}
           //    >
           //      <Tile>
           //        <Title styleName="md-gutter-bottom bold" style={{fontSize: 25}}>{restaurant.name}</Title>
           //        <Subtitle styleName="sm-gutter-horizontal bold" style={{fontSize: 15}}>{restaurant.address}</Subtitle>
           //      </Tile>
           //    </ImageBackground>
           //    <Divider styleName="line" />
           //  </View>
           <View>
              <View style={{ height: 15 }}><Divider /></View>
              <Row styleName="small" style={{ magrinBottom: 50 }}>
                 <Icon name="add-to-favorites-off" />
                 <View styleName="vertical stretch space-between">
                    <Subtitle>Hey, keep trying!!</Subtitle>
                    <Caption>Sep 29 · 03:00</Caption>
                 </View>
              </Row>
           </View>
        );
      }
      
      render() {
        const { restaurants } = this.state;
      
        return (
           <View style={styles.navigation}>
              {/* <NavigationBar title="Restaurants" styleName="inline" /> */}
              <StatusBar
                    translucent
                    backgroundColor="#000"
                    barStyle={Platform.OS == "ios" ? "dark-content" : "light-content"}
                 />
              <NavigationBar
                 styleName="inline"
                 leftComponent={
                    <Title style={{paddingLeft: 20}}>
                       {/* {this.state.selectedFilter
                          ? this.state.selectedFilter.value
                          : this.state.filters[0].value} */}
								  Records list
                    </Title>
                 }
                 rightComponent={
                    <DropDownMenu
                       options={this.state.filters}
                       selectedOption={
                          this.state.selectedFilter
                             ? this.state.selectedFilter
                             : this.state.filters[0]
                       }
                       onOptionSelected={filter =>
                          this.setState({ selectedFilter: filter })
                       }
                       titleProperty="name"
                       valueProperty="value"
                    />
                 }
              />

              <ListView data={restaurants} renderRow={this.renderRow} />
           </View>
        );
      }
}

export default History;

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