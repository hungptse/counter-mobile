import React, { Component } from "react";
import {
   View,
   Text,
   StyleSheet,
   Platform,
   ScrollView,
   StatusBar
} from "react-native";
import { NavigationBar, Title, Icon, Subtitle } from "@shoutem/ui";
import VectorIcon from "react-native-vector-icons/Ionicons";
import NavigationService from "../../../services/navigate";

export default class PriceTable extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      const { navigate } = this.props.navigation;
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
                        <Text>Phuc Long Kha Van Can</Text>
                     </View>
                  </View>
                  <View style={styles.detailRows}>
                     <Icon name="address" style={styles.detailIcons} />
                     <View>
                        <Text style={styles.detailTitles}>Address</Text>
                        <Text>1016 Kha Van Can, Thu Duc, HCM</Text>
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
                        <Text>Oct 2019</Text>
                     </View>
                  </View>
               </View>
					<View style={{ alignItems: 'center', marginTop: 10 }}><Subtitle style={{ fontSize: 20 }}>Electricity</Subtitle></View>
               <View style={styles.body}>
                  <View style={styles.header}>
                     <Text style={styles.headerText1}>
                        <VectorIcon name="md-options" size={27} />
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
                           name="md-trending-down"
                           size={27}
                           color="#3DDC84"
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
                     <Text style={styles.headerText}>Head 2</Text>
                     <Text style={styles.headerText}>Head 3</Text>
                     <Text style={styles.headerText}>Head 4</Text>
                  </View>
                  <View style={styles.row}>
                     <Text style={styles.headerText1}>6 ~ 22 kV</Text>
                     <Text style={styles.headerText}>Head 2</Text>
                     <Text style={styles.headerText}>Head 3</Text>
                     <Text style={styles.headerText}>Head 4</Text>
                  </View>
                  <View style={styles.row}>
                     <Text style={styles.headerText1}>> 22 kV</Text>
                     <Text style={styles.headerText}>Head 2</Text>
                     <Text style={styles.headerText}>Head 3</Text>
                     <Text style={styles.headerText}>Head 4</Text>
                  </View>
               </View>
					<View style={{ alignItems: 'center', marginTop: 20 }}><Subtitle style={{ fontSize: 20 }}>Water</Subtitle></View>
						
            </ScrollView>
         </View>
      );
   }
}
const styles = StyleSheet.create({
   navigation: {
      marginTop: Platform.OS == "ios" ? 20 : StatusBar.currentHeight,
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

      elevation: 9,
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
