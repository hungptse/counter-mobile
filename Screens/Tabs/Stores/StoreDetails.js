import React, { Component } from "react";
import {
   View,
   Text,
   StyleSheet,
   StatusBar,
   ScrollView,
   ImageBackground,
   Image,
   ActivityIndicator,
   BackHandler
} from "react-native";
import { NavigationBar, Title, Icon, Subtitle } from "@shoutem/ui";
import GradientButton from "react-native-gradient-buttons";
import NavigationService from "../../../services/navigate";
import TimeAgo from "react-native-timeago";
import VectorIcon from "react-native-vector-icons/Ionicons";
import { POST } from "../../../api/caller";
import { CURRENT_INVOICE_ENDPOINT } from "../../../api/endpoint";

class StoreDetails extends Component {
   constructor(props) {
      super(props);
   }
   state = {
      store: {},
      invoices: [],
      electricityInvoice: {},
      waterInvoice: {},
      currentTime: "",
      invoiceLoaded: false
   };
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

   async componentDidMount() {
      let store = await this.props.navigation.getParam("storeInf");
      this.setState({
         store: store
      });
      await POST(
         CURRENT_INVOICE_ENDPOINT,
         {},
         {},
         {
            store_id: this.state.store.id
         }
      ).then(async res => {
         if (res.status == 200) {
            this.setState({ invoices: res.data.invoices });
            if (this.state.invoices.length > 0) {
               this.state.invoices.forEach(i => {
                  if (i.type_name == "Water") {
                     this.setState({ waterInvoice: i });
                  }
                  if (i.type_name == "Electricity") {
                     this.setState({ electricityInvoice: i });
                  }
               });
            }
         }
         setTimeout(() => {
            this.setState({ invoiceLoaded: true });
         }, 500);
      });
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
   }

   render() {
      const {
         store,
         electricityInvoice,
         waterInvoice,
         currentTime,
         invoiceLoaded
      } = this.state;

      return (
         <View style={styles.container}>
            <View style={styles.navigation}>
               <NavigationBar
                  styleName="inline"
                  leftComponent={
                     <Icon
                        name="left-arrow"
                        style={{ fontSize: 35 }}
                        onPress={() => NavigationService.navigate("Dashboard")}
                     />
                  }
                  centerComponent={<Title>STORE DETAILS</Title>}
               />
            </View>
            <View style={{ flex: 1 }}>
               <ScrollView
                  style={{ flex: 1 }}
                  showsVerticalScrollIndicator={false}
               >
                  <View style={styles.storeImg}>
                     <ImageBackground
                        style={{ width: "100%", height: "100%" }}
                        source={{
                           uri: store.img
                        }}
                     >
                        <View
                           style={{
                              flex: 1,
                              alignItems: "center",
                              justifyContent: "center"
                           }}
                        >
                           <Title
                              styleName="md-gutter-bottom bold"
                              style={{
                                 fontSize: 25,
                                 color: "#00365d"
                              }}
                           >
                              {store.name}
                           </Title>
                        </View>
                     </ImageBackground>
                  </View>
                  <View style={{ flex: 1, marginLeft: 20, marginRight: 20 }}>
                     <View style={{ alignItems: "center" }}>
                        <Subtitle style={{ fontSize: 20 }}>
                           Store Details
                        </Subtitle>
                     </View>
                     <View style={{ marginTop: 20 }}>
                        <View style={styles.detailRows}>
                           <Icon name="address" style={styles.detailIcons} />
                           <View>
                              <Text style={styles.detailTitles}>Address</Text>
                              <Text>
                                 {store.address} {store.id}
                              </Text>
                           </View>
                        </View>
                        <View style={styles.detailRows}>
                           <Icon name="home" style={styles.detailIcons} />
                           <View>
                              <Text style={styles.detailTitles}>Company</Text>
                              <Text>{store.company_name}</Text>
                           </View>
                        </View>
                        <View style={styles.detailRows}>
                           <Icon name="about" style={styles.detailIcons} />
                           <View>
                              <Text style={styles.detailTitles}>Opening</Text>
                              <Text>
                                 <TimeAgo time={store.createdAt} />
                              </Text>
                           </View>
                        </View>
                     </View>
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
                        {invoiceLoaded != true ? (
                           <View
                              style={{
                                 flex: 3,
                                 marginLeft: 15,
                                 marginTop: 7,
                                 alignItems: "center",
                                 justifyContent: "center"
                              }}
                           >
                              <ActivityIndicator
                                 size="large"
                                 color="#00365d"
                                 style={{ flex: 1 }}
                              />
                           </View>
                        ) : (
                           <View
                              style={{ flex: 3, marginLeft: 15, marginTop: 7 }}
                           >
                              <Text style={{ fontSize: 30 }}>
                                 <VectorIcon
                                    name="ios-flash"
                                    size={25}
                                    color="#00365d"
                                 />{" "}
                                 {electricityInvoice.price
                                    ? electricityInvoice.price + "đ"
                                    : "..."}
                              </Text>
                              <Text style={{ fontSize: 30, marginBottom: 10 }}>
                                 <VectorIcon
                                    name="ios-water"
                                    size={20}
                                    color="#00365d"
                                 />{" "}
                                 {waterInvoice.price
                                    ? waterInvoice.price + "đ"
                                    : "..."}
                              </Text>
                              <Text>Last month's invoice</Text>
                              <Text>Time: {currentTime}</Text>
                           </View>
                        )}
                     </View>
                  </View>
               </ScrollView>
               <View style={styles.priceButton}>
                  <GradientButton
                     radius={60}
                     text={<VectorIcon name="ios-arrow-forward" size={27} />}
                     width="100%"
                     height="100%"
                     deepBlue
                     onPressAction={() =>
                        NavigationService.navigate("PriceTable", {
                           store: store
                        })
                     }
                  />
               </View>
               <View style={styles.invoiceButton}>
                  <GradientButton
                     radius={60}
                     text={<VectorIcon name="md-add" size={27} />}
                     width="100%"
                     height="100%"
                     deepBlue
                     onPressAction={() =>
                        NavigationService.navigate("AddInvoice", {
                           store: store
                        })
                     }
                  />
               </View>
            </View>
         </View>
      );
   }
}

export default StoreDetails;

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   storeImg: {
      flex: 1,
      height: 200,
      margin: 20,
      overflow: "hidden",
      borderRadius: 15,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 4
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,

      elevation: 9
   },
   storeImage: {
      width: "100%",
      height: 200,
      borderRadius: 15,
      marginBottom: 15
   },
   navigation: {
      paddingTop: StatusBar.currentHeight
   },
   detailRows: {
      flex: 1,
      flexDirection: "row",
      marginLeft: 30,
      marginBottom: 25
   },
   detailTitles: {
      opacity: 0.5
   },
   detailIcons: {
      marginRight: 15,
      width: 44,
      height: 44,
      borderWidth: 3,
      borderRadius: 22,
      paddingTop: 2,
      borderColor: "rgba(83,80,158,0.1)"
   },
   countCard: {
      flex: 1,
      flexDirection: "row",
      marginTop: 40,
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
   },
   priceButton: {
      width: 60,
      height: 60,
      position: "absolute",
      bottom: 30,
      right: 35
   },
   invoiceButton: {
      width: 60,
      height: 60,
      position: "absolute",
      bottom: 105,
      right: 35
   }
});
