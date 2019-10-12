import React, { Component } from "react";
import { View, StatusBar, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { NavigationBar, ImageBackground, Caption, Title, Subtitle, Icon, Image, Divider, Tile, Row, Text, Button } from "@shoutem/ui";
import NavigationService from '../../../services/navigate';

class History extends Component{
   state = {
      history : {}
   }
    constructor(props) {
        super(props)
      }
      
      componentDidMount(){
         this.setState({ history : this.props.navigation.getParam("history") });
      }
      render() {
         const { history } = this.state;
        return (
           <View style={styles.navigation}>
              {/* <NavigationBar title="Restaurants" styleName="inline" /> */}
              <StatusBar
                 translucent
                 backgroundColor="#000"
                 barStyle={
                    Platform.OS == "ios" ? "dark-content" : "light-content"
                 }
              />
              <NavigationBar
                 styleName="inline"
                 leftComponent={
                    <Icon
                       name="left-arrow"
                       style={{ fontSize: 35 }}
                       onPress={() => NavigationService.navigate("History")}
                    />
                 }
                 centerComponent={<Title>Record details</Title>}
              />
              <View>
                 <Image
                    styleName="large-banner"
                    source={{
                       uri:
                          "https://shoutem.github.io/static/getting-started/restaurant-1.jpg"
                    }}
                 ></Image>
              </View>
              <View
                 style={{
                    alignItems: 'center',
                    margin: 15,
                    marginTop: -50,
                    borderRadius: 10,
                    overflow: "hidden",
                    opacity: 0.9
                 }}
              >
                 <Row styleName="small" style={{ height: 60 }}>
                    <Icon name="home" />
                    <Subtitle>Phuc Long Tea Kha Van Can</Subtitle>
                 </Row>
                 <Row styleName="small" style={{ height: 30 }}>
                       <Caption>Address: 123 Kha Van Can, Thu Duc, HCM</Caption>
                 </Row>
                 <Row styleName="small" style={{ height: 30 }}>
                  <Caption>Time: {history.createdAt}</Caption>
                 </Row>
                 <Row styleName="small" style={{ height: 40 }}>
                    <Icon name="add-to-favorites-off" />
                       <Subtitle>Staff: {history.created_by_name}</Subtitle>
                 </Row>
              </View>
              <View style={{ height: 15, backgroundColor: "#F6F6F6" }}>
                 <Divider />
              </View>
              <Row styleName="small">
                    <Icon name="add-to-favorites-off" />
                       <Subtitle>Value: {history.value}</Subtitle>
                 </Row>
                 <Row styleName="small">
                    <Icon name="add-to-favorites-off" />
                       <Subtitle>Type: {history.counter_type}</Subtitle>
                 </Row>
                 <Row styleName="small">
                    <Icon name="add-to-favorites-off" />
                       <Subtitle>Counter ID: {history.counter_id}</Subtitle>
                 </Row>
           </View>
        );
      }
}

export default History;

const styles = StyleSheet.create({
    navigation:{
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    }
});