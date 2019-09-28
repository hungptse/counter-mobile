import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar } from "react-native";
import GradientButton from 'react-native-gradient-buttons';

class Login extends Component {
  	render() {
      const {navigate} = this.props.navigation;
    	return (
         <KeyboardAvoidingView
            style={styles.cointainer}
            behavior="padding"
            enabled
         >
            <View style={styles.loginCointainer}>
               <Image
                  source={require("../assets/HKT_logo.png")}
                  style={{ height: 200, resizeMode: "contain" }}
               />
               <Text style={styles.slogan}>Hey, keep trying!!</Text>
               <TextInput
                  style={styles.input}
                  placeholder="username"
                  returnKeyType="next"
                  onSubmitEditing={() => this.passwordInput.focus()}
                  blurOnSubmit={false}
               />
               <TextInput
                  style={styles.input}
                  placeholder="password"
                  secureTextEntry
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
                  onPressAction = {() => navigate('Dashboard')}
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
      backgroundColor: '#fff',
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