import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

//import Icon from 'react-native-vector-icons/Ionicons';
import Profile from './Tabs/Profile/Profile';
import Stores from './Tabs/Stores/Stores';
import History from './Tabs/History/History';
import Settings from './Tabs/Settings/Settings';
import { Icon } from '@shoutem/ui';

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
export default createAppContainer(TabNavigator);