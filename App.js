import React, { Component } from "react";
import { Platform, ActivityIndicator, StatusBar, View } from "react-native";
import * as Font from "expo-font";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "./Screens/Login";
import Dashboard from "./Screens/Dashboard";
import EditProfile from "./Screens/Tabs/Profile/EditProfile";
import Profile from "./Screens/Tabs/Profile/Profile";
import NavigationService from './services/navigate';
import registerForPushNotificationsAsync from './services/notification'
import PriceTable from "./Screens/Tabs/Stores/PriceTable"
import {
   Notifications,
} from 'expo';
// Stores
import StoreDetails from './Screens/Tabs/Stores/StoreDetails';

// History
import HistoryDetails from './Screens/Tabs/History/HistoryDetails';
import AddRecord from './Screens/Tabs/History/AddRecord';

// Profile


// Settings
import ChangePassword from "./Screens/Tabs/Settings/ChangePassword";

// Disable Yellow box notification
// console.disableYellowBox = true;

const Container = createStackNavigator(
   {
    

      Login: {
         screen: Login,
         navigationOptions: {
            header: null,
            gesturesEnabled: false
         }
      },
      Dashboard: {
         screen: Dashboard,
         navigationOptions: {
            header: null,
            gesturesEnabled: false
         }
      },
      // Stores
      StoreDetails: {
         screen: StoreDetails,
         navigationOptions: {
            header: null,
            gesturesEnabled: false
         }
      },
      PriceTable:{
        screen: PriceTable,
        navigationOptions: {
           header: null,
           gesturesEnabled: false
        }
    },
      // History
      HistoryDetails: {
         screen: HistoryDetails,
         navigationOptions: {
            header: null,
            gesturesEnabled: false
         }
      },
      AddRecord: {
         screen: AddRecord,
         navigationOptions: {
            header: null,
            gesturesEnabled: false
         }
      },
      // Profile
      Profile: {
         screen: Profile,
         navigationOptions: {
            header: null,
         }
      },
      EditProfile: {
         screen: EditProfile,
         navigationOptions: {
            header: null,
         }
      },
      // Settings
      ChangePassword: {
         screen: ChangePassword,
         navigationOptions: {
            header: null,
            gesturesEnabled: false
         }
      }
   },
   {
      initialRouteName: "StoreDetails",
   }
);
const AppContainer = createAppContainer(Container);

export default class App extends Component {
   // Loading font
   state = {
      fontsAreLoaded: false,
      notification: {}
   };

   async componentWillMount() {
      await Font.loadAsync({
         "Rubik-Black": require("./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf"),
         "Rubik-BlackItalic": require("./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf"),
         "Rubik-Bold": require("./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf"),
         "Rubik-BoldItalic": require("./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf"),
         "Rubik-Italic": require("./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf"),
         "Rubik-Light": require("./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf"),
         "Rubik-LightItalic": require("./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf"),
         "Rubik-Medium": require("./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf"),
         "Rubik-MediumItalic": require("./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf"),
         "Rubik-Regular": require("./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf"),
         "rubicon-icon-font": require("./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf")
      });
      registerForPushNotificationsAsync();
      this._notificationSubscription = Notifications.addListener(this._handleNotification);
      this.setState({ fontsAreLoaded: true });
      if (Platform.OS === 'android') {
         Notifications.createChannelAndroidAsync('counter-android', {
            name: 'Counter',
            priority: 'max',
            vibrate: [0, 250, 250, 250],
            sound: true
         });
      }
   }
   

   // _createNotificationAsync = () => {
   //    Notifications.presentLocalNotificationAsync({
   //       title: 'New Message',
   //       body: 'Message!!!!',
   //       android: {
   //          channelId: 'counter-android',
   //       },
   //    });
   // }

   _handleNotification = (notification) => {
      this.setState({ notification: notification });
   };

   render() {
      const { notification } = this.state
      if (!this.state.fontsAreLoaded) {
         return (
            <View style={{ flex: 1 }}>
               <ActivityIndicator
                  size="large"
                  color="#00ff00"
                  style={{ flex: 1 }}
               />
            </View>
         );
      }
      return (
         <>
            <StatusBar
               translucent
               barStyle={
                  Platform.OS == "ios" ? "dark-content" : "light-content"
               }
            />
            <AppContainer
               ref={navigatorRef => {
                  NavigationService.setTopLevelNavigator(navigatorRef);
               }}
            // ref={nav => {
            //    this.navigator = nav;
            // }}
            />
         </>
      );
   }
}

