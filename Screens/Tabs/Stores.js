import React, { Component } from "react";
import { View, StatusBar, StyleSheet } from 'react-native';
import { NavigationBar, ListView, ImageBackground, Tile, Title, Subtitle, Caption, Divider, DropDownMenu, Row, Image } from "@shoutem/ui";

class Stores extends Component{
    
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
            { name: 'Ho Chi Minh', value: 'Ho Chi Minh' },
            { name: 'Can Tho', value: 'Can Tho' },
            { name: 'Da Nang', value: 'Da Nang' },
            { name: 'Vung Tau', value: 'Vung Tau' },
          ],
        }
      }
      
      renderRow(restaurant) {
        if (!restaurant) {
          return null;
        }
      
        return (
          <View style={{paddingBottom: 10}}>
            <ImageBackground
              styleName="large-banner"
              source={{ uri: restaurant.image.url }}
            >
              <Tile>
                <Title styleName="md-gutter-bottom bold" style={{fontSize: 25}}>{restaurant.name}</Title>
                <Subtitle styleName="sm-gutter-horizontal bold" style={{fontSize: 15}}>{restaurant.address}</Subtitle>
              </Tile>
            </ImageBackground>
            <Divider styleName="line" />
          </View>
         //  <Row>
         // <Image
         //    styleName="medium rounded-corners"
         //    source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-6.png' }}
         // />
         // <View styleName="vertical stretch space-between">
         //    <Subtitle>Fact Check: Wisconsin Music, Film & Photography Debate</Subtitle>
         //    <Caption>20 hours ago</Caption>
         // </View><Divider styleName="line" />

         // </Row>
        );
      }
      
      render() {
        const { restaurants } = this.state;
      
        return (
           <View style={styles.navigation}>
              {/* <NavigationBar title="Restaurants" styleName="inline" /> */}
              <NavigationBar style={{height:50}}
                 styleName="inline"
                 leftComponent={
                    <Title style={{paddingLeft: 20}}>
                       {/* {this.state.selectedFilter
                          ? this.state.selectedFilter.value
                          : this.state.filters[0].value} */}
								  Stores list
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

export default Stores;

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