import React, { Component } from "react";
import { View, StatusBar, StyleSheet, ScrollView, Platform, KeyboardAvoidingView, TextInput } from "react-native";
import {
   Caption,
   Icon,
   Divider,
   Row,
} from "@shoutem/ui";
import GradientButton from 'react-native-gradient-buttons';

import { PUT } from "../../../api/caller";
import { CHANGE_PASSWORD_ENDPOINT } from "../../../api/endpoint";
import DropdownAlert from 'react-native-dropdownalert';
import NavigationService from '../../../services/navigate';

class Settings extends Component {
   constructor(props) {
      super(props);
   }

   state = { old_password: '', new_password: '', retype_password: '' }

   handleChangePassword = async () => {
      const { old_password, new_password, retype_password } = this.state
      if (old_password === '' || new_password === '' || retype_password === '') {
         this.dropDownAlertRef.alertWithType('warn', 'HKT Message', "Please fill all input fields");
         return;
      } else if (new_password != retype_password) {
         this.dropDownAlertRef.alertWithType('warn', 'HKT Error Message', "Password and confirm password does not match");
         return;
      } else {
         await PUT(CHANGE_PASSWORD_ENDPOINT, {}, {},{
            old_password: old_password,
            new_password: new_password,
            retype_password: retype_password
         }).then(async res => {
            if (res.status == 200) {
               await this.dropDownAlertRef.alertWithType('success', 'HKT Message', res.message);
               const sleep = (ms) => {
                  return new Promise(resolve => setTimeout(resolve, ms));
               }
               await sleep(1200);
               NavigationService.navigate('HistoryDetails');
            } else {
               this.dropDownAlertRef.alertWithType('warn', 'HKT Error Message', res.message);
            }
         })
      }
   }

   render() {
      const {navigate} = this.props.navigation;
      return (
         <KeyboardAvoidingView behavior="height" style={styles.navigation}
         enabled>
         <DropdownAlert ref={ref => this.dropDownAlertRef = ref} />

            {/* <View style={styles.navigation}>
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
            </View> */}
            {/* <ScrollView style={{ paddingBottom: 55 }}> */}
            <View
                  style={{
                     flexGrow: 1,
                     alignItems: "center",
                     justifyContent: "center",
                     padding: 27
                  }}
               >
               <Divider style={{ paddingTop: 50 }}>
                  <Caption style={{ paddingLeft: 10 }}>CHANGE PASSWORD</Caption>
               </Divider>
               <Row styleName="small">
                  <Icon name="lock" />
                  <View
                     styleName="vertical stretch space-between"
                     style={{ width: "75%" }}
                  >
                     <TextInput secureTextEntry
                        placeholder={"Current password"}
                        onChangeText={(content) => this.setState({ old_password: content })}
                        returnKeyType="next"
                        onSubmitEditing={() => this.newPasswordInput.focus()}
                        blurOnSubmit={false}
                        style={{ borderBottomWidth: 1 }}
                     />
                  </View>
               </Row>
               <Row styleName="small">
                  <Icon name="lock" />
                  <View
                     styleName="vertical stretch space-between"
                     style={{ width: "75%" }}
                  >
                     <TextInput secureTextEntry
                        placeholder={"New password"}
                        onChangeText={(content) => this.setState({ new_password: content })}
                        ref={input => {
                           this.newPasswordInput = input;
                        }}
                        returnKeyType="next"
                        onSubmitEditing={() => this.retypePasswordInput.focus()}
                        blurOnSubmit={false}
                        style={{ borderBottomWidth: 1 }}
                     />
                  </View>
               </Row>
               <Row styleName="small">
                  <Icon name="lock" />
                  <View
                     styleName="vertical stretch space-between"
                     style={{ width: "75%" }}
                  >
                     <TextInput secureTextEntry
                        placeholder={"Confirm new password"}
                        onChangeText={(content) => this.setState({ retype_password: content })}
                        ref={input => {
                           this.retypePasswordInput = input;
                        }}
                        style={{ borderBottomWidth: 1 }}
                     />
                  </View>
               </Row>               
               <View style={{ height: 30 }}>
                  <Divider />
               </View>
                  <GradientButton
                     text="Submit"
                     width="70%"
                     pinkDarkGreen
                     impact
                     height={50}
                     radius={150}
                     textStyle={{ fontSize: 14 }}
                     onPressAction={this.handleChangePassword}
                  />
                  <View style={{ height: 30 }}>
                  <Divider />
               </View>
                  <GradientButton
                     text="Cancel"
                     width="70%"
                     impact
                     deepBlue
                     height={50}
                     radius={150}
                     textStyle={{ fontSize: 14 }}
                     onPressAction={() => NavigationService.navigate("Dashboard")}
                  />
               </View>
            {/* </ScrollView> */}
         </KeyboardAvoidingView>
      );
   }
}

export default Settings;

const styles = StyleSheet.create({
   navigation: {
      marginTop: Platform.OS == "ios" ? 20 : StatusBar.currentHeight,
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
