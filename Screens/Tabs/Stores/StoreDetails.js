import React, { Component } from "react";
import {
   View,
   Text,
   StyleSheet,
   StatusBar,
   ScrollView,
   ImageBackground
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
                        ư
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
                     <View style={{ alignItems: 'center' }}><Subtitle style={{ fontSize: 20 }}>Store Details</Subtitle></View>
                     <View style={{ marginTop: 10 }}>
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
                  </View>
               </ScrollView>
					<View style={styles.priceButton}>
               <GradientButton
                  radius={60}
                  text={
                     <VectorIcon name="ios-wallet" size={27} />
                  }
                  width="100%"
                  height="100%"
                  deepBlue
                  onPressAction={() => NavigationService.navigate("PriceTable")}
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
      marginBottom: 20
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
	priceButton: {
		width: 60,
      height: 60,
		position: "absolute",
      bottom: 25,
      right: 35
	}
});
