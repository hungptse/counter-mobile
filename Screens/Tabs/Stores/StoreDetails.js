import React, { Component } from "react";
import {
   View,
   Text,
   StyleSheet,
   StatusBar,
   ScrollView,
   ImageBackground,
   Image
} from "react-native";
import { NavigationBar, Title, Icon, Subtitle } from "@shoutem/ui";
import GradientButton from "react-native-gradient-buttons";
import NavigationService from "../../../services/navigate";
import TimeAgo from "react-native-timeago";
import VectorIcon from "react-native-vector-icons/Ionicons";

class StoreDetails extends Component {
   constructor(props) {
      super(props);
   }
   state = { store: {} };
   componentDidMount() {
      this.setState({ store: this.props.navigation.getParam("storeInf") });
   }

   render() {
      const { navigate } = this.props.navigation;
      const { store } = this.state;
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
                              <Text>{store.address}</Text>
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
                           <Text style={{ fontSize: 30 }}>
                              <VectorIcon
                                 name="ios-flash"
                                 size={20}
                                 color="#00365d"
                              />{" "}
                              11.217.000 đ
                           </Text>
                           <Text style={{ fontSize: 30, marginBottom: 10 }}>
                              <VectorIcon
                                 name="ios-water"
                                 size={20}
                                 color="#00365d"
                              />{" "}
                              6.456.000 đ
                           </Text>
                           <Text>Money on current Invoice</Text>
                           <Text>Time: 10/2019</Text>
                        </View>
                     </View>
                  </View>
               </ScrollView>
               <View style={styles.priceButton}>
                  <GradientButton
                     radius={60}
                     text={<VectorIcon name="ios-list-box" size={27} />}
                     width="100%"
                     height="100%"
                     deepBlue
                     onPressAction={() =>
                        NavigationService.navigate("PriceTable")
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
      bottom: 25,
      right: 35
   }
});
