import React, { Component } from "react";
import {
   View,
   Text,
   Image,
   StatusBar,
   StyleSheet,
   Platform,
   TouchableOpacity
} from "react-native";
import {
   NavigationBar,
   ListView,
   ImageBackground,
   Tile,
   Title,
   Subtitle,
   Divider,
   DropDownMenu,
   TextInput
} from "@shoutem/ui";
import NavigationService from "../../../services/navigate";
import { GET } from "../../../api/caller";
import { STORE_LIST_ENDPOINT } from "../../../api/endpoint";

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
      search: ""
   };
   constructor(props) {
      super(props);

      this.renderRow = this.renderRow.bind(this);
   }

   async componentDidMount() {
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
   }

   renderRow(stores) {
      if (!stores) {
         return null;
      }

      return (
         <TouchableOpacity
            onPress={() => NavigationService.navigate("StoreDetails")}
         >
            <ImageBackground
               styleName="large-banner"
               //  source={{ uri: stores.image.url }}
               source={{
                  uri:
                     "https://shoutem.github.io/static/getting-started/restaurant-6.jpg"
               }}
            >
               <Tile>
                  <Title
                     styleName="md-gutter-bottom bold"
                     style={{ fontSize: 25 }}
                  >
                     {stores.name}
                  </Title>
                  <Subtitle
                     styleName="sm-gutter-horizontal bold"
                     style={{ fontSize: 15 }}
                  >
                     {stores.address}
                  </Subtitle>
               </Tile>
            </ImageBackground>
            <View style={{ height: 15 }}>
               <Divider />
            </View>
         </TouchableOpacity>
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

   render() {
      const { selectedStore } = this.state;

      return (
         <View style={styles.navigation}>
            <StatusBar
               translucent
               barStyle={
                  Platform.OS == "ios" ? "dark-content" : "light-content"
               }
            />
            <NavigationBar
               styleName="inline"
               leftComponent={
                  <TextInput
                     placeholder={"Records list"}
                     style={{ width: "150%" }}
                     onChangeText={this.handleSearch}
                  />
               }
               rightComponent={
                  <DropDownMenu
                     options={this.state.filters}
                     selectedOption={
                        this.state.selectedFilter
                           ? this.state.selectedFilter
                           : this.state.filters[0]
                     }
                     onOptionSelected={filter => {
                        this.setState({ selectedFilter: filter });
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
            {selectedStore.length != 0 ? (
               <ListView data={selectedStore} renderRow={this.renderRow} />
            ) : (
               <View style={{ alignItems: 'center', paddingTop: '35%' }}>
                  <Image source={require("../../../assets/not_found.png")} style={{ height: 130, resizeMode: 'contain' }}/>
               </View>
            )}
         </View>
      );
   }
}

export default Stores;

const styles = StyleSheet.create({
   navigation: {
      paddingTop: StatusBar.currentHeight,
      paddingBottom: 50
   },
   titleText: {
      fontSize: 20,
      fontWeight: "bold"
   }
});
