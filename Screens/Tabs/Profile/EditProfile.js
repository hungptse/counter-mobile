import React, { Component } from "react";
import {
   Text,
   StyleSheet,
   View,
   KeyboardAvoidingView,
   StatusBar,
   ScrollView,
   Platform,
   BackHandler
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Icon } from "@shoutem/ui";
import { NavigationBar, Title } from "@shoutem/ui";
import GradientButton from "react-native-gradient-buttons";
import { TextInput } from "react-native-gesture-handler";
import { PUT } from "../../../api/caller";
import { UPDATE_USER } from "../../../api/endpoint";
import NavigationService from "../../../services/navigate";
import DropdownAlert from "react-native-dropdownalert";

class EditProfile extends Component {
   state = { profile: {}, address: "" };
   goBack = () => {
      this.props.navigation.goBack();
      return true;
   };
   componentWillMount() {
      BackHandler.addEventListener("hardwareBackPress", this.goBack);
   }
   componentWillUnmount() {
      BackHandler.removeEventListener("hardwareBackPress", this.goBack);
   }

   componentDidMount() {
      this.setState({ profile: this.props.navigation.getParam("profileInf") });
   }

   handleUpdateProfile = async () => {
      const { address } = this.state;
      await PUT(
         UPDATE_USER,
         {},
         {},
         {
            address: address
         }
      ).then(async res => {
         if (res.status == 200) {
            await this.dropDownAlertRef.alertWithType(
               "success",
               "HKT Message",
               res.message
            );
            const sleep = ms => {
               return new Promise(resolve => setTimeout(resolve, ms));
            };
            await sleep(1200);
            NavigationService.navigate("Dashboard");
         } else {
            this.dropDownAlertRef.alertWithType(
               "warn",
               "HKT Error Message",
               res.message
            );
         }
      });
   };

   render() {
      const { navigate } = this.props.navigation;
      const { profile } = this.state;
      return (
         <KeyboardAvoidingView
            behavior="height"
            style={styles.navigation1}
            enabled
         >
            <DropdownAlert ref={ref => (this.dropDownAlertRef = ref)} />
            <View style={styles.container}>
               <View style={styles.navigation}>
                  <NavigationBar
                     styleName="inline"
                     leftComponent={
                        <Icon
                           name="left-arrow"
                           style={{ fontSize: 35 }}
                           onPress={() =>
                              NavigationService.navigate("Dashboard")
                           }
                        />
                     }
                     centerComponent={<Title>EDIT PROFILE</Title>}
                  />
               </View>
               <ScrollView styles={{ flex: 1 }}>
                  <View style={styles.body}>
                     <View style={styles.myProfile}>
                        <Icon name={"user-profile"} style={styles.icon} />
                        <View style={styles.profileText}>
                           <Text style={styles.textProfile}>Name</Text>
                           <Text>{profile.name}</Text>
                        </View>
                     </View>
                     <View style={styles.address}>
                        <Icon name={"address"} style={styles.icon} />
                        <View style={styles.profileText}>
                           <Text style={styles.textProfile}>Address</Text>
                           <TextInput
                              maxLength={50}
                              onSubmitEditing={() => {
                                 this.secondTextInput.focus();
                              }}
                              onChangeText={text =>
                                 this.setState({ address: text })
                              }
                              multiline={true}
                              style={{ borderBottomWidth: 1, width: 200 }}
                           >
                              {profile.address}
                           </TextInput>
                        </View>
                     </View>
                     <View style={styles.myProfile}>
                        <Icon name={"call"} style={styles.icon} />
                        <View style={styles.profileText}>
                           <Text style={styles.textProfile}>Phone</Text>
                           <Text>{profile.phone_number}</Text>
                        </View>
                     </View>
                     <View style={styles.myProfile}>
                        <Icon name={"email"} style={styles.icon} />
                        <View style={styles.profileText}>
                           <Text style={styles.textProfile}>Email</Text>
                           <Text>{profile.email}</Text>
                        </View>
                     </View>
                     <View style={{ alignItems: "center", marginTop: 30 }}>
                        <GradientButton
                           text="Save"
                           width="55%"
                           style={{
                              opacity: 0.9,
                              marginTop: 10
                           }}
                           pinkDarkGreen
                           impact
                           height={50}
                           radius={10}
                           textStyle={{ fontSize: 14 }}
                           onPressAction={this.handleUpdateProfile}
                           // onPressAction={() => navigate("Profile")}
                        />
                     </View>
                  </View>
               </ScrollView>
            </View>
         </KeyboardAvoidingView>
      );
   }
}

export default EditProfile;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center"
   },
   iconBack: {
      color: "black"
   },
   body: {
      flex: 1,
      backgroundColor: "#FFF"
   },

   name: {
      fontSize: 25,
      // flexDirection: 'column',
      width: 0,
      flexGrow: 1,
      height: 100,
      marginTop: 30,
      fontWeight: "bold",
      color: "#FFF",
      alignItems: "flex-start",
      flexWrap: "wrap"
   },
   avatar: {
      width: 110,
      height: 110,
      borderRadius: 55,
      borderColor: "#FFF",
      borderWidth: 4,
      marginBottom: 20,
      marginRight: 8
   },

   myProfile: {
      flex: 1,
      alignItems: "center",
      flexDirection: "row",
      marginTop: 30
   },
   address: {
      flex: 1,
      // marginTop: 30,
      flexDirection: "row",
      marginTop: 35
   },

   profileText: {
      flexDirection: "column"
   },
   textProfile: {
      opacity: 0.5
   },
   icon: {
      marginRight: 25,
      width: 40,
      height: 40,
      borderWidth: 3,
      borderRadius: 20,
      paddingTop: 2,
      borderColor: "rgba(83,80,158,0.1)"
   },
   wrapIcon: {
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 12
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,
      elevation: 24
   },
   navigation: {
      marginBottom: 20,
      borderBottomColor: "#d7d7d7",
      borderBottomWidth: 1
   },
   navigation1: {
      marginTop: Platform.OS == "ios" ? 20 : StatusBar.currentHeight,
      flex: 1
   }
});
