import React, { Component } from "react";
import {
   View,
   ScrollView,
   RefreshControl,
   Image,
   StatusBar,
   StyleSheet,
   Platform,
   TouchableOpacity,
   SafeAreaView,
   ImageBackground,
   Keyboard,
   Text
} from "react-native";
import {
   NavigationBar,
   ListView,
   Title,
   Subtitle,
   Divider,
   DropDownMenu,
   TextInput
} from "@shoutem/ui";
import NavigationService from "../../../services/navigate";
import { BarIndicator } from "react-native-indicators";

import { GET } from "../../../api/caller";
import { STORE_LIST_ENDPOINT } from "../../../api/endpoint";

const randomImage = [
   "https://image.freepik.com/free-vector/abstract-technology-concept-design-with-wire-mesh_1017-14624.jpg",
   "https://image.freepik.com/free-vector/stylish-hexagonal-line-abstract-background_1017-20593.jpg",
   "https://image.freepik.com/free-vector/cyber-security-concept_53876-93190.jpg"
];
class Stores extends Component {
   state = {
      stores: [],
      location: [],
      selectedStore: [],
      filters: [
         { name: "All", value: "ALL" },
         { name: "Sai Gon", value: "SG" },
         { name: "Can Tho", value: "CT" },
         { name: "Da Nang", value: "DN" },
         { name: "Ha Noi", value: "HN" }
      ],
      selectedFilter: {},
      search: "",
      refreshing: true,
      confirmExit: false
   };
   constructor(props) {
      super(props);

      this.renderRow = this.renderRow.bind(this);
   }

   async componentDidMount() {
      this.setState({ selectedFilter: this.state.filters[0] });
      this.setState({ refreshing: true });
      await this.callAPI();
      this.setState({ refreshing: false });
   }

   async callAPI() {
      await GET(STORE_LIST_ENDPOINT, {}, {})
         .then(async res => {
            if (res.status == 200) {
               this.setState({
                  stores: res.data.items,
                  selectedStore: res.data.items
               });
            } else {
            }
         })
         .catch(err => {
            console.log(err);
         });
      this.state.stores.forEach(
         s =>
            (s["img"] =
               randomImage[Math.floor(Math.random() * randomImage.length)])
      );
   }

   renderRow(stores) {
      if (!stores) {
         return null;
      }

      return (
         <View style={styles.row}>
            <TouchableOpacity
               activeOpacity={0.7}
               onPress={() => {
                  NavigationService.navigate("StoreDetails", {
                     storeInf: stores
                  });
               }}
            >
               <ImageBackground
                  style={{ width: "100%", height: "100%" }}
                  ư
                  source={{
                     uri: stores.img
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
                        {stores.name}
                     </Title>
                     <Subtitle
                        styleName="sm-gutter-horizontal bold"
                        style={{
                           fontSize: 15,
                           color: "#00365d"
                        }}
                     >
                        {stores.address}
                     </Subtitle>
                  </View>
               </ImageBackground>
            </TouchableOpacity>
            <View style={{ height: 15 }}>
               <Divider />
            </View>
         </View>
      );
   }

   handleSearch = async content => {
      this.setState({ search: content });

      let filterValue =
         this.state.selectedFilter == undefined
            ? this.state.filters[0]
            : this.state.selectedFilter;

      this.setState({
         selectedStore: this.state.stores.filter(
            s =>
               (s.city === filterValue.value && s.name.includes(content)) ||
               (filterValue.value === "ALL" && s.name.includes(content))
         )
      });
   };
   onRefresh = async () => {
      this.setState({ search: "" });
      Keyboard.dismiss();
      this.setState({ selectedFilter: this.state.filters[0] });
      this.setState({ refreshing: true });
      await this.callAPI().catch(res => {});
      this.setState({ refreshing: false });
   };
   render() {
      const { selectedStore, refreshing } = this.state;
      return (
         <View style={styles.navigation}>
            <StatusBar
               translucent
               barStyle={
                  Platform.OS == "ios" ? "dark-content" : "light-content"
               }
            />
            <View
               style={{ borderBottomColor: "#d7d7d7", borderBottomWidth: 1 }}
            >
               <NavigationBar
                  styleName="inline"
                  leftComponent={
                     <TextInput
                        placeholder={"Search a store..."}
                        style={{ width: "150%" }}
                        onChangeText={this.handleSearch}
                        value={this.state.search}
                     />
                  }
                  centerComponent={
                     <Subtitle style={{ paddingLeft: 50 }}>Total: {selectedStore.length} </Subtitle>
                  }
                  rightComponent={
                     <DropDownMenu
                        options={this.state.filters}
                        selectedOption={this.state.selectedFilter}
                        onOptionSelected={filter => {
                           this.setState({
                              search: "",
                              selectedFilter: filter
                           });
                           if (filter.value === "ALL") {
                              this.setState({
                                 selectedStore: this.state.stores
                              });
                           } else {
                              this.setState({
                                 selectedStore: this.state.stores.filter(
                                    s => s.city === filter.value
                                 )
                              });
                           }
                        }}
                        titleProperty="name"
                        valueProperty="value"
                     />
                  }
               />
            </View>
            <SafeAreaView>
               <ScrollView
                  contentContainerStyle={{
                     flex: 1,
                     justifyContent: "space-between"
                  }}
                  refreshControl={
                     <RefreshControl
                        refreshing={refreshing}
                        onRefresh={this.onRefresh}
                     />
                  }
               >
                  {refreshing ? (
                     <View style={{ flex: 1 }}>
                        <BarIndicator
                           style={{
                              flex: 1,
                              marginTop: "60%",
                              paddingBottom: "20%"
                           }}
                           size={50}
                           color="#00365d"
                           hidesWhenStopped={false}
                           animating={true}
                           interaction={false}
                           count={5}
                        />
                     </View>
                  ) : (
                     <View>
                        {selectedStore.length != 0 ? (
                           <ListView
                              data={selectedStore}
                              renderRow={this.renderRow}
                           />
                        ) : (
                           <View
                              style={{
                                 alignItems: "center",
                                 paddingTop: "35%"
                              }}
                           >
                              <Image
                                 source={require("../../../assets/not_found.png")}
                                 style={{ height: 130, resizeMode: "contain" }}
                              />
                           </View>
                        )}
                     </View>
                  )}
               </ScrollView>
            </SafeAreaView>
            
         </View>
      );
   }
}

export default Stores;

const styles = StyleSheet.create({
   navigation: {
      marginTop: StatusBar.currentHeight,
      flex: 1,
      paddingBottom: 66,
      backgroundColor: "#f1f1f1"
   },
   row: {
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
      height: 200,
      overflow: "hidden",
      borderRadius: 15,
      borderWidth: 1,
      borderColor: "#B9B9B9",

      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 4
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,

      elevation: 9
   },
   titleText: {
      fontSize: 20,
      fontWeight: "bold"
   }
});
