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
   Caption,
   Title,
   Subtitle,
   Icon,
   Image,
   Divider,
   DropDownMenu,
   Row,
   Text,
   Button
} from "@shoutem/ui";
import NavigationService from "../../../services/navigate";
import GradientButton from "react-native-gradient-buttons";
import VectorIcon from 'react-native-vector-icons/Ionicons';
import TimeAgo from 'react-native-timeago';
import { GET, POST } from "../../../api/caller";
import { HISTORY_LIST_ENDPOINT, GET_USER_ENDPOINT } from "../../../api/endpoint";

class History extends Component {
   state = {
      history: [],
      selectedHistory: [],
      filters: [
         { name: "All", value: "ALL" },
         { name: "Electricity", value: "Electricity" },
         { name: "Water", value: "Water" }
      ],
      search: ""
   };

   constructor(props) {
      super(props);

      this.renderRow = this.renderRow.bind(this);
   }

   async componentDidMount() {
      await GET(HISTORY_LIST_ENDPOINT, {}, {})
         .then(async res => {
            if (res.status == 200) {
               this.setState({
                  history: res.data.items,
                  selectedHistory: res.data.items
               });
            } else {
            }
         })
         .catch(err => console.log(err));
   }

   renderRow(history) {
      if (!history) {
         return null;
      }

      return (
         <TouchableOpacity
            onPress={() => NavigationService.navigate("HistoryDetails", { history: history })}
         >
            <View style={{ height: 15 }}>
               <Divider />
            </View>
            <Row styleName="small">
               <VectorIcon name={history.counter_type==="Electricity" ? "ios-flash" : "ios-water"} size={30} color="#00365d" />
               <View styleName="vertical stretch space-between" style={{ marginLeft: 15 ,paddingTop: 5 }}>
                  <Subtitle>{history.created_by_name}</Subtitle>
                  <Caption>{history.counter_type}<Text> - </Text><TimeAgo time={history.createdAt} /></Caption>
               </View>
            </Row>
         </TouchableOpacity>
      );
   }

   render() {
      const { selectedHistory } = this.state;

      return (
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
                  <Title style={{ paddingLeft: 20 }}>Records list</Title>
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
                              selectedHistory: this.state.history
                           });
                        } else {
                           this.setState({
                              selectedHistory: this.state.history.filter(h => h.counter_type === filter.value)
                           })
                        }
                     }
                     }
                     titleProperty="name"
                     valueProperty="value"
                  />
               }
            />

            <ListView data={selectedHistory} renderRow={this.renderRow} />
            <View style={styles.addNewButton}>
               <GradientButton
                  radius={60}
                  text={
                     <Icon
                        name="plus-button"
                        style={{ color: "white", fontSize: 30 }}
                     />
                  }
                  width="100%"
                  height="100%"
                  deepBlue
                  onPressAction={() => NavigationService.navigate("AddRecord")}
               />
            </View>
         </View>
      );
   }
}

export default History;

const styles = StyleSheet.create({
   navigation: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      paddingBottom: 55
   },
   addNewButton: {
      width: 60,
      height: 60,
      position: "absolute",
      bottom: 25,
      right: 35
   },
   titleText: {
      fontSize: 20,
      fontWeight: "bold"
   }
});
