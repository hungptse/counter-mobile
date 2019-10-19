import React, { Component } from "react";
import { Icon, ImageBackground, NavigationBar, Title, Subtitle } from "@shoutem/ui";
import {
   StyleSheet,
   Platform,
   StatusBar,
   View,
   Text,
   Image
} from "react-native";
import { GET_USER_ENDPOINT } from "../../../api/endpoint";
import { GET } from "../../../api/caller";
import NavigationService from "../../../services/navigate";
import VectorIcon from "react-native-vector-icons/Ionicons";

class Profile extends Component {
   state = { profile: {} };

   async componentDidMount() {
      await GET(GET_USER_ENDPOINT, {}, {}).then(res => {
         // console.log(res);
         this.setState({ profile: res.data.info });
      });
   }

   async componentDidUpdate(prevProps) {
      // await GET(GET_USER_ENDPOINT,{},{}).then(res => {
      //     // console.log(res);
      //     this.setState({ profile: res.data.info });
      // })
   }
   render() {
      const { navigate } = this.props.navigation;
      const { profile } = this.state;
      return (
         <View style={styles.container}>
            <StatusBar
               translucent
               barStyle={
                  Platform.OS == "ios" ? "dark-content" : "light-content"
               }
            />
            <View style={styles.header}>
               <ImageBackground
                  source={require("../../../assets/profile-wallpaper.jpg")}
                  style={{
                     width: "100%",
                     height: "100%",
                     flex: 1,
                     flexDirection: "column",
                     justifyContent: "center"
                  }}
               >
                  <View style={styles.profile}>
                     <Text style={styles.name}>{profile.name}</Text>
                     <Image
                        style={styles.avatar}
                        source={require("../../../assets/profile-avatar.jpg")}
                     />
                  </View>
               </ImageBackground>
            </View>
            <View style={styles.body}>
            <View style={{ alignItems: 'center' }}>
               <Subtitle style={{ fontSize: 20 }}>User information</Subtitle>
            </View>
               <View style={styles.address}>
                  <Icon name={"address"} style={styles.icon} />
                  <View style={styles.profileText}>
                     <View style={{ flexDirection: "row" }}>
                        <View style={{ width: "65%" }}>
                           <Text style={styles.textProfile}>Address</Text>
                           <Text>{profile.address}</Text>
                        </View>
                        <View>
                           <VectorIcon
                              onPress={() =>
                                 NavigationService.navigate("EditProfile", {
                                    profileInf: profile
                                 })
                              }
                              name={"ios-create"}
                              size={20}
                              style={styles.editIcon}
                           />
                        </View>
                     </View>
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
               <View style={styles.myProfile}>
                  <Icon name={"users"} style={styles.icon} />
                  <View style={styles.profileText}>
                     <Text style={styles.textProfile}>Gender</Text>
                     <Text>{profile.gender ? "Male" : "Female"}</Text>
                  </View>
               </View>
            </View>
         </View>
      );
   }
}

export default Profile;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: Platform.OS == "ios" ? 20 : StatusBar.currentHeight
   },
   body: {
      flex: 2,
      paddingTop: "3%",
      backgroundColor: "#FFF"
   },
   header: {
      flex: 1
   },
   name: {
      fontSize: 27,
      flexGrow: 1,
      height: 100,
      marginLeft: 30,
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
      marginRight: 23
   },
   profile: {
      flex: 2,
      flexDirection: "row",
      marginTop: 70
   },
   myProfile: {
      flex: 1,
      flexDirection: "row",
      marginLeft: 80
   },
   address: {
      flex: 1,
      marginTop: 30,
      flexDirection: "row",
      marginLeft: 80
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
   editIcon: {
      marginRight: 45,
      width: 30,
      height: 30,
      borderWidth: 2,
      borderRadius: 10,
      paddingLeft: 7,
      paddingTop: 5,
      borderColor: "rgba(83,80,158,0.1)"
   },
   navigation: {
      paddingTop: StatusBar.currentHeight
   }
});
