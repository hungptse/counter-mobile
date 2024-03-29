import React, { Component } from "react";
import {
   View,
   Text,
   StyleSheet,
   Platform,
   ScrollView,
   StatusBar,
   BackHandler
} from "react-native";
import { NavigationBar, Title, Icon, Subtitle } from "@shoutem/ui";
import VectorIcon from "react-native-vector-icons/Ionicons";
import NavigationService from "../../../services/navigate";
import { POST } from "../../../api/caller";
import {
   GET_ACTIVE_PRICE_LIST_ENDPOINT,
   GET_PRICE_DETAIL
} from "../../../api/endpoint";

export default class PriceTable extends Component {
   state = {
      store: {},
      electricityPrice: [],
      waterPrice: [],
      currentTime: ""
   };

   constructor(props) {
      super(props);
   }

   componentWillMount() {
      let date = new Date();
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
      let currentTime = month[date.getMonth()] + " " + date.getFullYear();
      this.setState({ currentTime: currentTime });

      BackHandler.addEventListener("hardwareBackPress", this.goBack);
   }
   goBack = () => {
      this.props.navigation.goBack();
      return true;
   };
   componentWillUnmount() {
      BackHandler.removeEventListener("hardwareBackPress", this.goBack);
   }
   async componentDidMount() {
      let store = this.props.navigation.getParam("store");
      this.setState({ store: store });
      await POST(
         GET_ACTIVE_PRICE_LIST_ENDPOINT,
         {},
         {},
         {
            store_id: store.id
         }
      ).then(async res => {
         // get plist_id
         if (res.status == 200) {
            await POST(
               GET_PRICE_DETAIL,
               {},
               {},
               {
                  plist_id: res.data.active_price_list.plist_id
               }
            ).then(async detail => {
               if (detail.status == 200) {
                  const prices = await detail.data.price_details;
                  const electricity = prices.filter(
                     p => p.type_name == "Electricity"
                  );
                  const water = await prices.filter(
                     p => p.type_name == "Water"
                  );
                  this.setState({
                     electricityPrice: electricity
                  });
                  this.setState({
                     waterPrice: water
                  });
               }
            });
         }
      });
   }

   findEPrice = (v, t) => {
      const e = this.state.electricityPrice;
      const p = e.filter(i => i.voltage_level == v && i.time_type == t)[0];
      if (p != undefined) {
         return <Text style={styles.headerText}>{p.price}</Text>
      }
   };

   render() {
      const { store, currentTime, waterPrice } = this.state;
      return (
         <View style={styles.container}>
            <View style={styles.navigation}>
               <NavigationBar
                  styleName="inline"
                  leftComponent={
                     <Icon
                        name="left-arrow"
                        style={{ fontSize: 35 }}
                        onPress={() =>
                           NavigationService.navigate("StoreDetails")
                        }
                     />
                  }
                  centerComponent={<Title>PRICE DETAILS</Title>}
               />
            </View>
            <ScrollView
               style={{ flex: 1 }}
               showsHorizontalScrollIndicator={false}
            >
               <View style={{ marginTop: 20 }}>
                  <View style={styles.detailRows}>
                     <Icon name="receipt" style={styles.detailIcons} />
                     <View>
                        <Text style={styles.detailTitles}>Name</Text>
                        <Text>{store.name}</Text>
                     </View>
                  </View>
                  <View style={styles.detailRows}>
                     <Icon name="address" style={styles.detailIcons} />
                     <View>
                        <Text style={styles.detailTitles}>Address</Text>
                        <Text>{store.address}</Text>
                     </View>
                  </View>
                  <View style={styles.detailRows}>
                     <VectorIcon
                        name="md-time"
                        size={27}
                        style={styles.detailVectorIcons}
                     />
                     <View>
                        <Text style={styles.detailTitles}>Time</Text>
                        <Text>{currentTime}</Text>
                     </View>
                  </View>
               </View>
               <View style={{ alignItems: "center", marginTop: 10 }}>
                  <Subtitle style={{ fontSize: 20 }}>Electricity (đ)</Subtitle>
               </View>
               <View style={styles.body}>
                  <View style={styles.header}>
                     <Text style={styles.headerText1}>
                        <VectorIcon name="md-options" size={27} />
                     </Text>
                     <Text style={styles.headerText1}>
                        <VectorIcon
                           name="md-trending-down"
                           size={27}
                           color="#3DDC84"
                        />
                     </Text>
                     <Text style={styles.headerText1}>
                        <VectorIcon
                           name="md-arrow-forward"
                           size={27}
                           color="#FFC300"
                        />
                     </Text>
                     <Text style={styles.headerText1}>
                        <VectorIcon
                           name="md-trending-up"
                           size={27}
                           color="red"
                        />
                     </Text>
                  </View>
                  <View style={styles.row}>
                     <Text style={styles.headerText1}>{"<"} 6 kV</Text>
                     {this.findEPrice(1, "TD") ? this.findEPrice(1, "TD") : <Text style={styles.headerText}>...</Text>}
                     {this.findEPrice(1, "BT") ? this.findEPrice(1, "BT") : <Text style={styles.headerText}>...</Text>}
                     {this.findEPrice(1, "CD") ? this.findEPrice(1, "CD") : <Text style={styles.headerText}>...</Text>}
                  </View>
                  <View style={styles.row}>
                     <Text style={styles.headerText1}>6 ~ 22 kV</Text>
                     {this.findEPrice(2, "TD") ? this.findEPrice(2, "TD") : <Text style={styles.headerText}>...</Text>}
                     {this.findEPrice(2, "BT") ? this.findEPrice(2, "BT") : <Text style={styles.headerText}>...</Text>}
                     {this.findEPrice(2, "CD") ? this.findEPrice(2, "CD") : <Text style={styles.headerText}>...</Text>}
                  </View>
                  <View style={styles.row}>
                     <Text style={styles.headerText1}>> 22 kV</Text>
                     {this.findEPrice(3, "TD") ? this.findEPrice(3, "TD") : <Text style={styles.headerText}>...</Text>}
                     {this.findEPrice(3, "BT") ? this.findEPrice(3, "BT") : <Text style={styles.headerText}>...</Text>}
                     {this.findEPrice(3, "CD") ? this.findEPrice(3, "CD") : <Text style={styles.headerText}>...</Text>}
                  </View>
               </View>
               <View style={{ alignItems: "center", marginTop: 20 }}>
                  <Subtitle style={{ fontSize: 20, marginBottom: 25 }}>
                     Water (đ)
                  </Subtitle>
                  <Text style={styles.headerText}>
                     The current water price is
                     <Text style={{ fontWeight: "bold" }}>
                        {" "}
                        {waterPrice[0] ? waterPrice[0].price : "..."} /m&#179;{" "}
                     </Text>
                  </Text>
               </View>
            </ScrollView>
         </View>
      );
   }
}
const styles = StyleSheet.create({
   navigation: {
      marginTop: Platform.OS == "ios" ? 20 : StatusBar.currentHeight
   },
   container: {
      flex: 1
   },
   body: {
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      borderWidth: 0.7,
      borderColor: "#a8a5ab",
      backgroundColor: "#fcfcfc",
      borderRadius: 10,
      marginBottom: 15,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 4
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,

      elevation: 9
   },
   header: {
      height: 50,
      padding: 20,
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      textAlign: "center",
      borderBottomWidth: 0.5
   },
   headerText: {
      flex: 1,
      textAlign: "center",
      fontSize: 18
   },
   headerText1: {
      flex: 1,
      textAlign: "center",
      fontSize: 17,
      fontWeight: "bold"
   },
   iconBack: {
      fontSize: 35
   },
   row: {
      padding: 20,
      flexDirection: "row",
      borderTopWidth: 0.5,
      borderBottomWidth: 0.5,
      borderColor: "#a8a5ab"
   },
   detailRows: {
      flex: 1,
      flexDirection: "row",
      marginLeft: 50,
      marginBottom: 20
   },
   detailTitles: {
      opacity: 0.5
   },
   detailVectorIcons: {
      paddingLeft: 11.5,
      marginRight: 15,
      width: 44,
      height: 44,
      borderWidth: 3,
      borderRadius: 22,
      paddingTop: 8.5,
      borderColor: "rgba(83,80,158,0.1)"
   },
   detailIcons: {
      marginRight: 15,
      width: 44,
      height: 44,
      borderWidth: 3,
      borderRadius: 22,
      paddingTop: 2,
      borderColor: "rgba(83,80,158,0.1)"
   }
});
