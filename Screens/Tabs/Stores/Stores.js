import React, { Component } from "react";
import {
   View,
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
      ]
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
         //  <Row>
         // <Image
         //    styleName="medium rounded-corners"
         //    source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-6.png' }}
         // />
         // <View styleName="vertical stretch space-between">
         //    <Subtitle>Fact Check: Wisconsin Music, Film & Photography Debate</Subtitle>
         //    <Caption>20 hours ago</Caption>
         // </View><Divider styleName="line" />

         // </Row>
      );
   }

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
               leftComponent={<TextInput placeholder={"Records list"} />}
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
            <ListView data={selectedStore} renderRow={this.renderRow} />
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
