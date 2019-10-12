import React, { Component } from "react";
import {
   View,
   StatusBar,
   StyleSheet,
   Platform,
   TouchableOpacity,
   RefreshControl,
   ScrollView
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
   Text
} from "@shoutem/ui";
import NavigationService from "../../../services/navigate";
import GradientButton from "react-native-gradient-buttons";
import VectorIcon from "react-native-vector-icons/Ionicons";
import TimeAgo from "react-native-timeago";
import {
   BarIndicator
} from "react-native-indicators";

import { GET } from "../../../api/caller";
import {
   HISTORY_LIST_ENDPOINT,
   USER_STORE_ENDPOINT
} from "../../../api/endpoint";

class History extends Component {
   state = {
      history: [],
      selectedHistory: [],
      filters: [
         { name: "All", value: "ALL" },
         { name: "Electricity", value: "Electricity" },
         { name: "Water", value: "Water" }
      ],
      user_store: { store: {} },
      refreshing: false
   };

   constructor(props) {
      super(props);

      this.renderRow = this.renderRow.bind(this);
   }

   async componentDidMount() {
      this.setState({ refreshing: true });
      await this.callAPI();
      this.setState({ refreshing: false });
   }

   async callAPI() {
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
      await GET(USER_STORE_ENDPOINT, {}, {}).then(async res => {
         if (res.status == 200) {
            this.setState({
               user_store: res.data.user_store
            });
         }
      });
   }

   renderRow(history) {
      if (!history) {
         return null;
      }
      return (
         <TouchableOpacity
            onPress={() =>
               NavigationService.navigate("HistoryDetails", {
                  store: this.state.user_store.store,
                  history: history
               })
            }
         >
            <View style={{ height: 15 }}>
               <Divider />
            </View>
            <Row styleName="small">
               <VectorIcon
                  name={
                     history.counter_type === "Electricity"
                        ? "ios-flash"
                        : "ios-water"
                  }
                  size={30}
                  color="#00365d"
               />
               <View
                  styleName="vertical stretch space-between"
                  style={{ marginLeft: 15, paddingTop: 5 }}
               >
                  <Subtitle>{history.created_by_name}</Subtitle>
                  <Caption>
                     {history.counter_type}
                     <Text> - </Text>
                     <TimeAgo time={history.createdAt} />
                  </Caption>
               </View>
            </Row>
         </TouchableOpacity>
      );
   }
   onRefresh = async () => {
      this.setState({ refreshing: true });
      await this.callAPI();
      this.setState({ refreshing: false });
   };
   render() {
      const { selectedHistory, refreshing } = this.state;

      // const [refreshing, setRefreshing] = React.useState(false);

      // const onRefresh = React.useCallback(() => {
      //    setRefreshing(true);

      //    wait(2000).then(() => setRefreshing(false));
      // }, [refreshing]);

      return (
         <View style={styles.navigation}>
            <ScrollView contentContainerStyle={{ flex: 1, justifyContent: "space-between"}}
               refreshControl={
                  <RefreshControl
                     refreshing={refreshing}
                     onRefresh={this.onRefresh}
                     title="Ahhhhhhhhhhh"
                  />
               }
            >
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
                                 selectedHistory: this.state.history.filter(
                                    h => h.counter_type === filter.value
                                 )
                              });
                           }
                        }}
                        titleProperty="name"
                        valueProperty="value"
                     />
                  }
               />
               {/* <BarIndicator
               color="black"
               hidesWhenStopped={false}
               animating={true}
               interaction={false}
               count={5}
            /> */}
               {refreshing ? (
                  <View
                     style={styles.overlay}
                  >
                     <BarIndicator
                        size={50}
                        color="#00365d"
                        hidesWhenStopped={false}
                        animating={true}
                        interaction={false}
                        count={5}
                     />
                  </View>
               ) : (
                  <ListView data={selectedHistory} renderRow={this.renderRow} />
               )}
               {/* <ListView data={selectedHistory} renderRow={this.renderRow} /> */}
            </ScrollView>
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
   },
   overlay: {
      flex: 1,
    } 
});
