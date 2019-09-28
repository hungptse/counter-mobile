import React, { Component } from "react";
import { View, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import {
   NavigationBar,
   ListView,
   Caption,
   Title,
   Subtitle,
   Icon,
   Image,
   Divider,
   DropDownMenu,
   Row,
   Text,
   GridRow,
   Button,
   Card,
   Tile,
   Overlay,
   ImageBackground
} from "@shoutem/ui";

class Settings extends Component {
   constructor(props) {
      super(props);
      
   }
   render() {
      return (
         <View style={styles.navigation}>
            <Tile>
               <ImageBackground
                  styleName="large-banner"
                  source={{
                     uri:
                        "https://shoutem.github.io/img/ui-toolkit/examples/image-7.png"
                  }}
               >
                  <Title style={{ color: "white" }}>
                     HKT PROJECT FALL 2019
                  </Title>
                  <Caption style={{ color: "white", fontSize: 16 }}>
                     FPT University
                  </Caption>
               </ImageBackground>
            </Tile>
            <Divider style={{ paddingTop: 0 }}>
               <Caption style={{ paddingLeft: 10 }}>AUTHORS</Caption>
            </Divider>
            <Row styleName="small" style={{ magrinBottom: 50 }}>
               <Icon name="github" />
               <View styleName="vertical stretch space-between">
                  <Subtitle>H - Phan Thanh Hung</Subtitle>
                  <Caption>@hungptse</Caption>
               </View>
            </Row>
            <Row styleName="small" style={{ magrinBottom: 50 }}>
               <Icon name="github" />
               <View styleName="vertical stretch space-between">
                  <Subtitle>K - Bui Van Khanh</Subtitle>
                  <Caption>@khanhbv</Caption>
               </View>
            </Row>
            <Row styleName="small" style={{ magrinBottom: 50 }}>
               <Icon name="github" />
               <View styleName="vertical stretch space-between">
                  <Subtitle>T - Luong Thanh Thang</Subtitle>
                  <Caption>@thangworks</Caption>
               </View>
            </Row>
            <Divider style={{ paddingTop: 15 }}>
               <Caption style={{ paddingLeft: 10 }}>SETTINGS</Caption>
            </Divider>
            <Row styleName="small" style={{ magrinBottom: 50 }}>
               <Icon name="lock" />
               <Text>Change password</Text>
            </Row>
            <View style={{height: 15}}><Divider /></View>
            <Row styleName="small" style={{ magrinBottom: 50 }}>
               <Icon name="notifications" />
               <Text>Notifications</Text>
            </Row>
            <View style={{height: 15}}><Divider /></View>
            <Row styleName="small" style={{ magrinBottom: 50 }}>
               <Icon name="exit-to-app" style={{color: 'red'}} />
               <Text style={{color: 'red'}}>Log Out</Text>
            </Row>
         </View>
      );
   }
}

export default Settings;

const styles = StyleSheet.create({
   navigation: {
      paddingTop: StatusBar.currentHeight,
      paddingBottom: 55
   },
   titleText: {
      fontSize: 20,
      fontWeight: "bold"
   },
   title: {
      fontSize: 20,
      fontWeight: "bold",
      color : "white"
   }
});
