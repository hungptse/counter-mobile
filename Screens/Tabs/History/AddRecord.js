import React, { Component } from "react";
import {
   View,
   StatusBar,
   StyleSheet,
   Platform,
   TouchableOpacity
} from "react-native";
import {
   NavigationBar,
   ImageBackground,
   Caption,
   Title,
   Subtitle,
   Icon,
   Image,
   Divider,
   Tile,
   Row,
   Text,
   Button
} from "@shoutem/ui";
import NavigationService from "../../../services/navigate";

import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

class HomeScreen extends React.Component {
   render() {
      return (
         <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
         >
            <Text>Home!</Text>
         </View>
      );
   }
}

class SettingsScreen extends React.Component {
   render() {
      return (
         <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
         >
            <Text>Settings!</Text>
         </View>
      );
   }
}

const TabNavigator = createAppContainer(
   createMaterialTopTabNavigator({
      Electricity: HomeScreen,
      Water: SettingsScreen
   }, {
      tabBarOptions: {
         upperCaseLabel: false,
         indicatorStyle: {
            backgroundColor: '#00365d'
         },
         labelStyle: {
            color: '#000'
         },
         style: {
            backgroundColor: 'white'
         }
      }
   })
);

class AddRecord extends Component {
   constructor(props) {
      super(props);
   }

   render() {
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
               centerComponent={<Title>Add new record</Title>}
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
                  alignItems: "center",
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
                  <Caption>Time: Oct 03, 2019 - 00:56</Caption>
               </Row>
               <Row styleName="small" style={{ height: 40 }}>
                  <Icon name="add-to-favorites-off" />
                  <Subtitle>Staff: Luong Thanh Thang</Subtitle>
               </Row>
            </View>
            <View style={{ height: 15, backgroundColor: "#F6F6F6" }}>
               <Divider />
            </View>
            <TabNavigator/>
         </View>
      );
   }
}

export default AddRecord;

const styles = StyleSheet.create({
   navigation: {
      flex: 1,
      paddingTop: StatusBar.currentHeight
   }
});
