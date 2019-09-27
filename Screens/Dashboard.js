import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';

//import Icon from 'react-native-vector-icons/Ionicons';
import Profile from './Tabs/Profile';
import Stores from './Tabs/Stores';
import History from './Tabs/History';
import Settings from './Tabs/Settings';
import { Icon } from '@shoutem/ui';

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
const TabNavigator = createMaterialBottomTabNavigator(
   {
      Profile: {
         screen: Profile,
         navigationOptions: {
            tabBarLabel: "Profile",
            tabBarIcon: ({ tintColor }) => (
               <Icon name="user-profile" style={{ color: tintColor }} />
            )
         }
      },
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
      initialRouteName: "Profile",
      activeColor: "red",
      shifting: true,
      
      barStyle: {
         backgroundColor: "white"
      }
   }
);
export default createAppContainer(TabNavigator);

// import {createBottomTabNavigator} from 'react-navigation-tabs';

// const TabNavigator = createBottomTabNavigator(
//    {
//       Profile: {
//          screen: Profile,
//          navigationOptions: {
//             tabBarLabel: "Profile",
//             tabBarIcon: ({ tintColor }) => (
//                <Icon name="user-profile" style={{ color: tintColor }} />
//             )
//          }
//       },
//       Stores: {
//          screen: Stores,
//          navigationOptions: {
//             tabBarLabel: "Stores",
//             tabBarIcon: ({ tintColor }) => (
//                <Icon name="home" style={{ color: tintColor }} />
//             )
//          }
//       },
//       History: {
//          screen: History,
//          navigationOptions: {
//             tabBarLabel: "History",
//             tabBarIcon: ({ tintColor }) => (
//                <Icon name="rsvp" style={{ color: tintColor }} />
//             )
//          }
//       },
//       Settings: {
//          screen: Settings,
//          navigationOptions: {
//             tabBarLabel: "Settings",
//             tabBarIcon: ({ tintColor }) => (
//                <Icon name="settings" style={{ color: tintColor }} />
//             )
//          },
         
//       }
//    },
//    {
//       tabBarOptions: {
//          activeTintColor: "red",
//          activeTabStyle: {
//             backgroundColor: "green"
//          },
//          inactiveTintColor: "grey",
//          style: {
//             height: 55,
//             backgroundColor: "white",
//             borderTopWidth: 1,
//             shadowOffset: { width: 5, height: 3 },
//             shadowColor: "black",
//             shadowOpacity: 0.5,
//             elevation: 5
//          }
//       }
//    }
// );

// export default createAppContainer(TabNavigator);
