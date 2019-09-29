import React, { Component } from "react";
import { View, StatusBar, StyleSheet, ScrollView, Platform } from "react-native";
import {
   Caption,
   Title,
   Subtitle,
   Icon,
   Divider,
   Row,
   Text,
   Tile,
   ImageBackground,
   TouchableOpacity
} from "@shoutem/ui";
import NavigationService from '../../../services/navigate';

class Settings extends Component {
   constructor(props) {
      super(props);
      
   }
   render() {
      const {navigate} = this.props.navigation;
      return (
         <>
            <View style={styles.navigation}>
               <StatusBar
                  translucent
                  barStyle={
                     Platform.OS == "ios" ? "dark-content" : "light-content"
                  }
               />
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
            </View>
            <ScrollView style={{ paddingBottom: 55 }}>
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
               <TouchableOpacity onPress={() => NavigationService.navigate("ChangePassword")}>
                  <Row styleName="small">
                     <Icon name="lock" style={{ color: "#00365d" }} />
                     <Text style={{ color: "#00365d" }}>Change password</Text>
                  </Row>
               </TouchableOpacity>
               <View style={{ height: 15 }}>
                  <Divider />
               </View>
               <Row styleName="small">
                  <Icon name="notifications" style={{ color: "#00365d" }} />
                  <Text style={{ color: "#00365d" }}>Notifications</Text>
               </Row>
               <View style={{ height: 15 }}>
                  <Divider />
               </View>
               <TouchableOpacity onPress={() => NavigationService.navigate("Login")}>
                  <Row styleName="small">
                     <Icon name="exit-to-app" style={{ color: "red" }} />
                     <Text style={{ color: "red" }}>Log Out</Text>
                  </Row>
               </TouchableOpacity>
            </ScrollView>
         </>
      );
   }
}

export default Settings;

const styles = StyleSheet.create({
   navigation: {
      paddingTop: Platform.OS == "ios" ? 20 : StatusBar.currentHeight,
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
