import React, { Component } from "react";
import GradientButton from "react-native-gradient-buttons";
// import DropdownAlert from 'react-native-dropdownalert';
import {
   GET_USER_ENDPOINT,
   GET_COUNTER_BY_TYPE_STORE_ID,
   GET_USER_STORE_BY_USER_ID,
   GET_COUNTER_TIME_BY_TIME
} from "../../../api/endpoint";
import { GET } from "../../../api/caller";

import {
   View,
   StatusBar,
   StyleSheet,
   Platform,
   KeyboardAvoidingView,
   Slider,
   Alert,
   BackHandler
} from "react-native";
import {
   NavigationBar,
   Caption,
   Title,
   Subtitle,
   Icon,
   Image,
   Divider,
   Row,
   Text
} from "@shoutem/ui";
import NavigationService from "../../../services/navigate";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { POST } from "../../../api/caller";
import { CREATE_COUNTER_TIME } from "../../../api/endpoint";
import VectorIcon from "react-native-vector-icons/Ionicons";

class ElectricityScreen extends React.Component {
   constructor(props) {
      super(props);
   }

   state = {
      counter_id: "",
      created_by: "",
      profile: {},
      lastValue: 0,
      newValue: 0,
      store_id: "",
      type_id: ""
   };

   handleAddElectricity = async () => {
      const { newValue, counter_id, created_by, profile } = this.state;

      Alert.alert(
         "Send Value",
         "Are you Sure",
         [
            {
               text: "OK",
               onPress: async () =>
                  await POST(
                     CREATE_COUNTER_TIME,
                     {},
                     {},
                     {
                        value: newValue,
                        created_by: profile.username,
                        counter_id: counter_id
                     }
                  ).then(async res => {
                     if (res.status == 200) {
                        NavigationService.navigate("Dashboard");
                     } else {
                        return;
                     }
                  })
            },
            {
               text: "Cancel",
               onPress: () => console.log("Cancel Pressed"),
               style: "cancel"
            }
         ],
         { cancelable: false }
      );
   };

   async componentDidMount() {
      await GET(GET_USER_ENDPOINT, {}, {}).then(res => {
         // console.log(res);
         if (res.status == 200) {
            this.setState({ profile: res.data.info });
         }
      });
      // console.log(this.state.profile);

      await GET(
         GET_USER_STORE_BY_USER_ID + "/" + this.state.profile.id,
         {},
         {}
      ).then(res => {
         if (res.status == 200) {
            this.setState({ store_id: res.data.userStore.store_id });
         }
      });

      await POST(
         GET_COUNTER_BY_TYPE_STORE_ID,
         {},
         {},
         {
            store_id: this.state.store_id,
            type_id: 2
         }
      ).then(res => {
         if (res.status == 200) {
            this.setState({ counter_id: res.data.counter.id });
         }
      });

      await GET(
         GET_COUNTER_TIME_BY_TIME + "/" + this.state.counter_id,
         {},
         {}
      ).then(res => {
         if (res.status == 200) {
            this.setState({ lastValue: res.data });
            this.setState({ newValue: this.state.lastValue });
         }
      });
   }

   render() {
      const { profile } = this.state;

      return (
         <View style={{ flex: 1, alignItems: "center" }}>
            <View style={styles.countCard}>
               <View
                  style={{
                     flex: 1,
                     alignItems: "center",
                     justifyContent: "center"
                  }}
               >
                  {/* <VectorIcon name="ios-card" size={47} color="#737373" /> */}
                  <Image
                     style={{ height: 90, width: 90 }}
                     source={{
                        uri:
                           "https://icons-for-free.com/iconfiles/png/512/credit+card+debit+card+master+card+icon-1320184902602310693.png"
                     }}
                  />
               </View>
               <View style={{ flex: 3, marginLeft: 15, marginTop: 7 }}>
                  <Text style={{ fontSize: 20 }}>
                     <VectorIcon name="ios-flash" size={20} color="#00365d" />{" "}
                     {this.state.newValue - this.state.lastValue}/
                     {this.state.newValue} KWh New/All
                  </Text>
                  <Slider
                     minimumTrackTintColor="#13a9d6"
                     step={1}
                     onValueChange={newValue =>
                        this.setState({ newValue: newValue })
                     }
                     minimumValue={this.state.lastValue}
                     maximumValue={this.state.lastValue + 200}
                     style={styles.thumb}
                     thumbTintColor="#0c6692"
                  />
                  <Text style={{ fontSize: 20, marginBottom: 10 }}>
                     <VectorIcon
                        name="ios-calendar"
                        size={20}
                        color="#00365d"
                     />{" "}
                     {new Date().toDateString()}
                  </Text>
                  <GradientButton
                     text="Submit"
                     width="50%"
                     style={{ marginVertical: 2, opacity: 0.9 }}
                     pinkDarkGreen
                     impact
                     height={45}
                     radius={10}
                     textStyle={{ fontSize: 14 }}
                     style={{ marginTop: 25 }}
                     onPressAction={this.handleAddElectricity}
                  />
               </View>
            </View>
         </View>
      );
   }
}

class WaterScreen extends React.Component {
   constructor(props) {
      super(props);
   }

   state = {
      counter_id: "",
      created_by: "",
      profile: {},
      lastValue: 0,
      newValue: 0,
      store_id: "",
      type_id: ""
   };

   handleAddWater = async () => {
      const { newValue, counter_id, created_by, profile } = this.state;

      Alert.alert(
         "Send Value",
         "Are you Sure",
         [
            {
               text: "Cancel",
               style: "cancel"
            },
            {
               text: "OK",
               onPress: async () =>
                  await POST(
                     CREATE_COUNTER_TIME,
                     {},
                     {},
                     {
                        value: newValue,
                        created_by: profile.username,
                        counter_id: counter_id
                     }
                  ).then(async res => {
                     if (res.status == 200) {
                        NavigationService.navigate("Dashboard");
                     } else {
                        return;
                     }
                  })
            }
         ],
         { cancelable: false }
      );
   };

   async componentDidMount() {
      await GET(GET_USER_ENDPOINT, {}, {}).then(res => {
         // console.log(res);
         if (res.status == 200) {
            this.setState({ profile: res.data.info });
         }
      });

      await GET(
         GET_USER_STORE_BY_USER_ID + "/" + this.state.profile.id,
         {},
         {}
      ).then(res => {
         if (res.status == 200) {
            this.setState({ store_id: res.data.userStore.store_id });
         }
      });

      await POST(
         GET_COUNTER_BY_TYPE_STORE_ID,
         {},
         {},
         {
            store_id: this.state.store_id,
            type_id: 1
         }
      ).then(res => {
         if (res.status == 200) {
            this.setState({ counter_id: res.data.counter.id });
         }
      });

      await GET(
         GET_COUNTER_TIME_BY_TIME + "/" + this.state.counter_id,
         {},
         {}
      ).then(res => {
         if (res.status == 200) {
            this.setState({ lastValue: res.data });
            this.setState({ newValue: this.state.lastValue });
         }
      });
   }

   render() {
      const { profile } = this.state;
      return (
         <View style={{ flex: 1, alignItems: "center" }}>
            <View style={styles.countCard}>
               <View
                  style={{
                     flex: 1,
                     alignItems: "center",
                     justifyContent: "center"
                  }}
               >
                  <Image
                     style={{ height: 90, width: 90 }}
                     source={{
                        uri:
                           "https://icons-for-free.com/iconfiles/png/512/credit+card+debit+card+master+card+icon-1320184902602310693.png"
                     }}
                  />
               </View>
               <View style={{ flex: 3, marginLeft: 15, marginTop: 7 }}>
                  <Text style={{ fontSize: 20 }}>
                     <VectorIcon name="ios-water" size={20} color="#00365d" />{" "}
                     {this.state.newValue - this.state.lastValue}/
                     {this.state.newValue} m3 New/All
                  </Text>
                  <Slider
                     minimumTrackTintColor="#13a9d6"
                     step={1}
                     onValueChange={newValue =>
                        this.setState({ newValue: newValue })
                     }
                     minimumValue={this.state.lastValue}
                     maximumValue={this.state.lastValue + 200}
                     style={styles.thumb}
                     thumbTintColor="#0c6692"
                  />
                  <Text style={{ fontSize: 20, marginBottom: 10 }}>
                     <VectorIcon
                        name="ios-calendar"
                        size={20}
                        color="#00365d"
                     />{" "}
                     {new Date().toDateString()}
                  </Text>
                  <GradientButton
                     text="Submit"
                     width="50%"
                     style={{ marginVertical: 2, opacity: 0.9 }}
                     pinkDarkGreen
                     impact
                     height={45}
                     radius={10}
                     textStyle={{ fontSize: 14 }}
                     style={{ marginTop: 25 }}
                     onPressAction={this.handleAddWater}
                  />
               </View>
            </View>
         </View>
      );
   }
}

const TabNavigator = createAppContainer(
   createMaterialTopTabNavigator(
      {
         Electricity: ElectricityScreen,
         Water: WaterScreen
      },
      {
         tabBarOptions: {
            upperCaseLabel: false,
            indicatorStyle: {
               backgroundColor: "#00365d"
            },
            labelStyle: {
               color: "#000"
            },
            style: {
               backgroundColor: "white"
            }
         }
      }
   )
);

class AddRecord extends Component {
   constructor(props) {
      super(props);
   }

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
   render() {
      return (
         <KeyboardAvoidingView
            style={styles.cointainer}
            behavior="padding"
            enabled
         >
            <View style={styles.navigation}>
               <StatusBar
                  translucent
                  backgroundColor="#000"
                  barStyle={
                     Platform.OS == "ios" ? "dark-content" : "light-content"
                  }
               />
               <NavigationBar
                  styleName="inline"
                  leftComponent={
                     <Icon
                        name="left-arrow"
                        style={{ fontSize: 35 }}
                        onPress={() => NavigationService.navigate("Dashboard")}
                     />
                  }
                  centerComponent={<Title>Add new record</Title>}
               />
               <View style={{ height: 100 }}>
                  <Image
                     styleName="large-banner"
                     source={{
                        uri:
                           "https://shoutem.github.io/static/getting-started/restaurant-1.jpg"
                     }}
                  ></Image>
               </View>
               <View
                  style={{
                     alignItems: "center",
                     margin: 15,
                     marginTop: -50,
                     borderRadius: 10,
                     overflow: "hidden",
                     opacity: 0.9
                  }}
               >
                  <Row styleName="small" style={{ height: 60 }}>
                     <Icon name="home" />
                     <Subtitle>Phuc Long Tea Kha Van Can</Subtitle>
                  </Row>
                  <Row styleName="small" style={{ height: 30 }}>
                     <Caption>Address: 123 Kha Van Can, Thu Duc, HCM</Caption>
                  </Row>
                  <Row styleName="small" style={{ height: 30 }}>
                     <Caption>Time: Oct 03, 2019 - 00:56</Caption>
                  </Row>
                  <Row styleName="small" style={{ height: 40 }}>
                     <Icon name="add-to-favorites-off" />
                     <Subtitle>Staff: Luong Thanh Thang</Subtitle>
                  </Row>
               </View>
               <View style={{ height: 15, backgroundColor: "#F6F6F6" }}>
                  <Divider />
               </View>
               <TabNavigator />
            </View>
         </KeyboardAvoidingView>
      );
   }
}

export default AddRecord;

const styles = StyleSheet.create({
   navigation: {
      flex: 1
   },
   cointainer: {
      flex: 1,
      backgroundColor: "white",
      paddingTop: StatusBar.currentHeight
   },
   thumb: {
      width: 230,
      height: 50,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.5,
      shadowRadius: 1
   },
   countCard: {
      flex: 1,
      flexDirection: "row",
      marginTop: 20,
      marginLeft: 10,
      marginRight: 10,
      height: 160,
      backgroundColor: "#fcfcfc",
      borderRadius: 10,
      overflow: "hidden",
      marginBottom: 15,

      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 4
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,

      elevation: 9
   }
});
