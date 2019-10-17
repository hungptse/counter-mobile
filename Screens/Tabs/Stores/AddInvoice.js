import React, { Component } from "react";
import {
   View,
   StatusBar,
   StyleSheet,
   Platform,
   Text,
   TextInput,
   BackHandler,
   Picker,
   Image
} from "react-native";
import { Caption, Icon, Divider, Row, Subtitle } from "@shoutem/ui";
import GradientButton from "react-native-gradient-buttons";

import { POST, UPLOAD } from "../../../api/caller";
import {
   ADD_INVOICE_ENDPOINT
} from "../../../api/endpoint";
import DropdownAlert from "react-native-dropdownalert";
import NavigationService from "../../../services/navigate";
import VectorIcon from "react-native-vector-icons/Ionicons";

class AddInvoice extends Component {
   state = {
      store: {},
      currentTime: "",
      invoiceType: "1", // default
      invoicePrice: "",
      photo: ""
   };
   constructor(props) {
      super(props);
   }
   goBack = () => {
      this.props.navigation.goBack();
      return true;
   };
   componentWillMount() {
      let month = [
         "Jan",
         "Feb",
         "Mar",
         "Apr",
         "May",
         "Jun",
         "Jul",
         "Aug",
         "Sep",
         "Oct",
         "Nov",
         "Dec"
      ];
      let lastMonth = new Date();
      lastMonth.setMonth(lastMonth.getMonth() - 1);
      let currentTime =
         month[lastMonth.getMonth()] + " " + lastMonth.getFullYear();
      this.setState({ currentTime: currentTime });

      BackHandler.addEventListener("hardwareBackPress", this.goBack);
   }
   componentWillUnmount() {
      BackHandler.removeEventListener("hardwareBackPress", this.goBack);
   }
   componentDidMount() {
      this.setState({ store: this.props.navigation.getParam("store") });
   }

   componentWillReceiveProps(props) {
      this.setState({ photo: props.navigation.getParam("photo") });
   }

   handleSubmitInvoice = async () => {
      const { store, invoiceType, invoicePrice, photo } = this.state;
      if (invoicePrice === "") {
         this.dropDownAlertRef.alertWithType(
            "warn",
            "HKT Message",
            "Please input invoice price"
         );
         return;
      } else if (photo === ""){
         this.dropDownAlertRef.alertWithType(
            "warn",
            "HKT Message",
            "Please take a picture of new invoice"
         );
         return;
      } else {
         await POST(ADD_INVOICE_ENDPOINT, {}, {}, {
            store_id: store.id,
            type_id: invoiceType,
            price: invoicePrice,
            // snap_image: photo
         }).then(async res => {
            if (res.status == 200){
               this.dropDownAlertRef.alertWithType(
                  "success",
                  "HKT Message",
                  res.message
               );
               const sleep = ms => {
                  return new Promise(resolve => setTimeout(resolve, ms));
               };
               await sleep(1200);
               NavigationService.navigate("StoreDetails");
            } else {
               this.dropDownAlertRef.alertWithType(
                  "warn",
                  "HKT Error Message",
                  res.message
               );
            }
         })
      }
   }

   render() {
      const { navigate } = this.props.navigation;
      const { store, currentTime } = this.state;
      return (
         <View behavior="height" style={styles.navigation} enabled>
            <DropdownAlert ref={ref => (this.dropDownAlertRef = ref)} />
            <View
               style={{
                  flexGrow: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 15
               }}
            >
               <View>
                  <Subtitle>Store: {store.name}</Subtitle>
               </View>
               <Divider style={{ paddingTop: 10 }}>
                  <Caption style={{ paddingLeft: 10 }}>INVOICE DETAILS</Caption>
               </Divider>
               <Row styleName="small">
                  <VectorIcon
                     name="ios-today"
                     size={25}
                     color="#00365d"
                     style={{ marginRight: 10 }}
                  />
                  <View
                     styleName="vertical stretch space-between"
                     style={{ width: "75%", marginTop: 20, paddingLeft: 10 }}
                  >
                     <Subtitle>Time: {currentTime}</Subtitle>
                  </View>
               </Row>
               <Row styleName="small">
                  <VectorIcon
                     name="ios-options"
                     size={25}
                     color="#00365d"
                     style={{ marginRight: 10 }}
                  />
                  <View
                     styleName="vertical stretch space-between"
                     style={{ width: "75%" }}
                  >
                     <Picker
                        selectedValue={this.state.invoiceType}
                        style={{ height: 50, width: "100%" }}
                        onValueChange={(itemValue, itemIndex) =>
                           this.setState({ invoiceType: itemValue })
                        }
                     >
                        <Picker.Item label="Electricity" value="1" />
                        <Picker.Item label="Water" value="2" />
                     </Picker>
                  </View>
               </Row>
               <Row styleName="small">
                  <VectorIcon
                     name={
                        this.state.invoiceType == "Water"
                           ? "ios-water"
                           : "ios-flash"
                     }
                     size={this.state.invoiceType == "Water" ? 20 : 25}
                     color="#00365d"
                     style={{ marginRight: 10 }}
                  />
                  <View
                     styleName="vertical stretch space-between"
                     style={{ width: "75%", flexDirection: "row" }}
                  >
                     <TextInput
                        keyboardType="numeric"
                        placeholder={"Input invoice price"}
                        onChangeText={content =>
                           this.setState({ invoicePrice: content })
                        }
                        style={{
                           borderBottomWidth: 1,
                           width: "85%",
                           flexDirection: "row"
                        }}
                     />
                     <VectorIcon
                        name="md-photos"
                        size={25}
                        color="#00365d"
                        style={styles.photoIcon}
                        onPress={() =>
                           NavigationService.navigate("InvoiceImagePicker")
                        }
                     />
                  </View>
               </Row>
               {this.state.photo != "" ? (
                  <View
                     style={{
                        width: "100%",
                        height: 300,
                        marginTop: 20
                     }}
                  >
                     <Image
                        style={{
                           flex: 1,
                           width: "100%",
                           resizeMode: "contain",
                           borderRadius: 15,
                           overflow: "hidden"
                        }}
                        source={{
                           uri: `data:image/png;base64,${this.state.photo}`
                        }}
                     />
                  </View>
               ) : (
                  <View></View>
               )}
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
                  onPressAction={this.handleSubmitInvoice}
               />
               <View style={{ height: 15 }}>
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
                  onPressAction={() => NavigationService.navigate('StoreDetails')}
               />
            </View>
         </View>
      );
   }
}

export default AddInvoice;

const styles = StyleSheet.create({
   navigation: {
      marginTop: Platform.OS == "ios" ? 20 : StatusBar.currentHeight
   },
   titleText: {
      fontSize: 20,
      fontWeight: "bold"
   },
   title: {
      fontSize: 20,
      fontWeight: "bold",
      color: "white"
   },
   photoIcon: {
      marginLeft: 10,
      flexDirection: "row",
      width: 30,
      height: 30,
      paddingLeft: 5,
      paddingTop: 3,
      borderWidth: 1,
      borderRadius: 5
   }
});
