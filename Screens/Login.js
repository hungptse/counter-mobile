import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TextInput, Platform, KeyboardAvoidingView, StatusBar, AsyncStorage } from "react-native";
import GradientButton from 'react-native-gradient-buttons';
import { POST } from "../api/caller";
import { LOGIN_ENDPOINT } from "../api/endpoint";
import DropdownAlert from 'react-native-dropdownalert';
import NavigationService from '../services/navigate';

class Login extends Component {
   constructor(props) {
      super(props);
   }
   state = { username: '', password: '' }

   handleLogin = async () => {
      const { username, password } = this.state
      if (username === '' || password === '') {
         return;
      } else {
         await POST(LOGIN_ENDPOINT, {}, {}, {
            username: username,
            password: password
         }).then(async res => {
            if (res.status == 200) {
               await AsyncStorage.setItem('jwt_token', res.data.token)
               this.passwordInput.clear();
               NavigationService.navigate('Dashboard');
            }
            if (res.status != 200) {
               this.dropDownAlertRef.alertWithType('warn', 'HKT Error Message', res.message);
            }

         })
      }
   };

   render() {
      const { navigate } = this.props.navigation;
      return (
         <KeyboardAvoidingView
            style={styles.cointainer}
            behavior="padding"
            enabled
         ><StatusBar
               translucent
               barStyle={
                  Platform.OS == "ios" ? "dark-content" : "light-content"
               }
            />
            <View style={styles.loginCointainer}>
               <DropdownAlert ref={ref => this.dropDownAlertRef = ref} />
               <Image
                  source={require("../assets/logo.png")}
                  style={{ height: 200, resizeMode: "contain" }}
               />
               <Text style={styles.slogan}>Hey, keep trying!!</Text>
               <TextInput
                  style={styles.input}
                  placeholder="username"
                  onChangeText={(content) => this.setState({ username: content })}
                  returnKeyType="next"
                  onSubmitEditing={() => this.passwordInput.focus()}
                  blurOnSubmit={false}
               />
               <TextInput
                  style={styles.input}
                  placeholder="password"
                  secureTextEntry
                  onChangeText={(content) => this.setState({ password: content })}
                  ref={input => {
                     this.passwordInput = input;
                  }}
               />
               <GradientButton
                  text="Login Now"
                  width="100%"
                  style={{ marginVertical: 2, opacity: 0.9 }}
                  pinkDarkGreen
                  impact
                  height={50}
                  radius={10}
                  textStyle={{ fontSize: 14 }}
                  onPressAction={this.handleLogin}
               />
               <Text style={{ paddingTop: 10, fontSize: 13 }}>
                  Forgot your login details?{" "}
                  <Text style={{ fontWeight: "bold" }}>
                     Get help signing in.
                  </Text>
               </Text>
            </View>
         </KeyboardAvoidingView>
      );
   }
}

export default Login;

const styles = StyleSheet.create({
   cointainer: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: StatusBar.currentHeight
   },
   loginCointainer: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 27
   },
   slogan: {
      marginBottom: 30
   },
   input: {
      alignSelf: 'stretch',
      backgroundColor: '#f7f7f7',
      borderColor: '#e3e3e3',
      borderWidth: 1.5,
      marginBottom: 15,
      height: 47,
      paddingHorizontal: 10,
      borderRadius: 5
   }
});