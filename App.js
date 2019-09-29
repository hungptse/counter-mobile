import React, { Component } from "react";
import { Platform, View, ActivityIndicator, StatusBar } from "react-native";
import * as Font from "expo-font";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "./Screens/Login";
import Dashboard from "./Screens/Dashboard";

// Stores

// History

// Profile


// Settings
import ChangePassword from "./Screens/Tabs/Settings/ChangePassword";

const instructions = Platform.select({
   ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
   android:
      "Double tap R on your keyboard to reload,\n" +
      "Shake or press menu button for dev menu"
});

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
      ChangePassword: {
        screen: ChangePassword,
        navigationOptions: {
          header: null,
          gesturesEnabled: false
        }
     }
   },
   {
      initialRouteName: "Login",
   }
);
const AppContainer = createAppContainer(Container);

export default class App extends Component {
   // Loading font
   state = {
      fontsAreLoaded: false
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

      this.setState({ fontsAreLoaded: true });
   }
   render() {
      if (!this.state.fontsAreLoaded) {
         return <ActivityIndicator />;
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
               ref={nav => {
                  this.navigator = nav;
               }}
            />
         </>
      );
   }
}
