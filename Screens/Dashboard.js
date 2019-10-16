import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { BackHandler, Alert } from 'react-native'
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

//import Icon from 'react-native-vector-icons/Ionicons';
import Profile from "./Tabs/Profile/Profile";
import Stores from "./Tabs/Stores/Stores";
import History from "./Tabs/History/History";
import Settings from "./Tabs/Settings/Settings";
import { Icon } from "@shoutem/ui";

class Dashboard extends React.Component {
   handleBackButton = () => {
      Alert.alert(
         "Exit App",
         "Exiting the application?",
         [
            {
               text: "Cancel",
               onPress: () => console.log("Cancel Pressed"),
               style: "cancel"
            },
            {
               text: "OK",
               onPress: () => BackHandler.exitApp()
            }
         ],
         {
            cancelable: false
         }
      );
      return true;
   };

   componentDidMount() {
      BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
   }
   componentWillUnmount() {
      BackHandler.removeEventListener(
         "hardwareBackPress",
         this.handleBackButton
      );
   }

   render() {
      const TabNavigator = createMaterialBottomTabNavigator(
         {
            Stores: {
               screen: Stores,
               navigationOptions: {
                  tabBarLabel: "Stores",
                  tabBarIcon: ({ tintColor }) => (
                     <Icon name="home" style={{ color: tintColor }} />
                  )
               }
            },
            History: {
               screen: History,
               navigationOptions: {
                  tabBarLabel: "History",
                  tabBarIcon: ({ tintColor }) => (
                     <Icon name="rsvp" style={{ color: tintColor }} />
                  )
               }
            },
            Profile: {
               screen: Profile,
               navigationOptions: {
                  tabBarLabel: "Profile",
                  tabBarIcon: ({ tintColor }) => (
                     <Icon name="user-profile" style={{ color: tintColor }} />
                  )
               }
            },
            Settings: {
               screen: Settings,
               navigationOptions: {
                  tabBarLabel: "Settings",
                  tabBarIcon: ({ tintColor }) => (
                     <Icon name="settings" style={{ color: tintColor }} />
                  )
               }
            }
         },
         {
            initialRouteName: "Stores",
            activeColor: "#00365d",
            inactiveColor: "#00a294",
            shifting: true,

            barStyle: {
               backgroundColor: "white"
            }
         }
      );
      const AppContainer = createAppContainer(TabNavigator);
      return <AppContainer />;
   }
}
export default Dashboard;
