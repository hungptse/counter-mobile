import React, { Component } from "react";
import { View, StatusBar, StyleSheet, ScrollView, Platform, KeyboardAvoidingView } from "react-native";
import {
   Caption,
   Title,
   Icon,
   Divider,
   Row,
   Text,
   Tile,
   ImageBackground,
   TouchableOpacity,
   TextInput
} from "@shoutem/ui";
import GradientButton from 'react-native-gradient-buttons';

class Settings extends Component {
   constructor(props) {
      super(props);
      
   }
   render() {
      const {navigate} = this.props.navigation;
      return (
         <KeyboardAvoidingView behavior="height"
         enabled>
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
                        maxLength={10}
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
                        maxLength={10}
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
                        placeholder={"Retype new password"}
                        maxLength={10}
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
                     onPressAction={() => navigate("Dashboard")}
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
                     onPressAction={() => navigate("Dashboard")}
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
      paddingTop: Platform.OS == "ios" ? 20 : StatusBar.currentHeight,
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
