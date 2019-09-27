import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

class Login extends Component {
  	render() {
    	return (
         <KeyboardAvoidingView
            style={styles.cointainer}
            behavior="padding"
            enabled
         >
            <View style={styles.loginCointainer}>
               <Image
                  source={require("../assets/HKT_logo.png")}
                  style={{ height: 70, resizeMode: "contain" }}
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
                  ref={(input) => {this.passwordInput = input}}
               />
               <TouchableOpacity style={styles.buttonCointainer} activeOpacity={.7}>
                  <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Profile')}>Log In</Text>
               </TouchableOpacity>
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
      marginBottom: 50
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
   },
   buttonCointainer: {
      alignSelf: 'stretch',
      paddingVertical: 12,
      backgroundColor: '#53509e',
      borderRadius: 5
   },
   buttonText: {
      textAlign: 'center',
      color: '#FFF',
      fontWeight: '700'
   }
});