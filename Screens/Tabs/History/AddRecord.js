import React, { Component } from "react";
import { TextInput } from "react-native-gesture-handler";
import GradientButton from 'react-native-gradient-buttons';
// import DropdownAlert from 'react-native-dropdownalert';
import { GET_USER_ENDPOINT } from '../../../api/endpoint';
import { GET } from "../../../api/caller";

import {
      View,
      StatusBar,
      StyleSheet,
      Platform,
      TouchableOpacity,
      KeyboardAvoidingView
} from "react-native";
import {
      NavigationBar,
      ImageBackground,
      Caption,
      Title,
      Subtitle,
      Icon,
      Image,
      Divider,
      Tile,
      Row,
      Text,
      Button
} from "@shoutem/ui";
import NavigationService from "../../../services/navigate";
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { POST } from "../../../api/caller";
import { CREATE_COUNTER_TIME } from "../../../api/endpoint";




class ElectricityScreen extends React.Component {

      constructor(props) {
            super(props);
      }

      state = { value: '', counter_id: '', created_by: '', profile: {} }
      handleAddElectricity = async () => {
            const { value, counter_id, created_by, profile } = this.state;
            await POST(CREATE_COUNTER_TIME, {}, {}, {
                  value: value,
                  created_by: profile.username,
                  counter_id: counter_id
            }).then(async res => {
                  if (res.status == 200) {
                       
                        NavigationService.navigate('Dashboard');
                  } else {
                        return;
                  }
            })
      }



      async componentDidMount() {

            await GET(GET_USER_ENDPOINT, {}, {}).then(res => {
                  // console.log(res);
                  this.setState({ profile: res.data.info });
            })
      }


      render() {
            const { profile } = this.state;
            return (

                  <View
                        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                  >

                        <TextInput maxLength={15}

                              onChangeText={(content) => this.setState({ value: content,  counter_id: 2 })}
                              keyboardType='numeric'
                              style={{ borderBottomWidth: 1, width: 200, textAlign: 'center' }}
                              placeholder='Input number of electricity'
                        >

                        </TextInput>
                        <GradientButton
                              text="Send"
                              width="40%"
                              style={{ marginVertical: 2, opacity: 0.9 }}
                              pinkDarkGreen
                              impact
                              height={45}
                              radius={10}

                              textStyle={{ fontSize: 14 }}
                              style={{ marginTop: 20, }}
                              onPressAction={this.handleAddElectricity}

                        />
                  </View>


            );
      }
}

class WaterScreen extends React.Component {

      constructor(props) {
            super(props);
      }

      state = { value: '', counter_id: '', created_by: '', profile: {} }
      handleAddWater = async () => {
            const { value, counter_id, created_by,profile } = this.state;
            // console.log(profile);
            await POST(CREATE_COUNTER_TIME, {}, {}, {
                  value: value,
                  created_by: profile.username,
                  counter_id: counter_id
            }).then(async res => {
                  if (res.status == 200) {
                        NavigationService.navigate('Dashboard');
                  } else {
                        return;
                  }
            })
      }

      async componentDidMount() {
            await GET(GET_USER_ENDPOINT, {}, {}).then(res => {
                  // console.log(res);
                  this.setState({ profile: res.data.info });
            })
      }

      render() {
            const { profile } = this.state;
            return (
                  <View
                        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                  >
                        {/* <DropdownAlert ref={ref => this.dropDownAlertRef = ref} /> */}
                        <TextInput

                              maxLength={10}
                              onChangeText={(content) => this.setState({ value: content, counter_id: 3 })}
                              keyboardType='numeric'
                              style={{ borderBottomWidth: 1, width: 200, textAlign: 'center' }}
                              placeholder='Input number of water'
                        >

                        </TextInput>
                        <GradientButton
                              text="Send"
                              width="40%"
                              style={{ marginVertical: 2, opacity: 0.9 }}
                              pinkDarkGreen
                              impact
                              height={45}
                              radius={10}
                              textStyle={{ fontSize: 14 }}
                              style={{ marginTop: 20, }}
                              onPressAction={this.handleAddWater}

                        />
                  </View>
            );
      }
}

const TabNavigator = createAppContainer(
      createMaterialTopTabNavigator({
            Electricity: ElectricityScreen,
            Water: WaterScreen
      }, {
                  tabBarOptions: {
                        upperCaseLabel: false,
                        indicatorStyle: {
                              backgroundColor: '#00365d'
                        },
                        labelStyle: {
                              color: '#000'
                        },
                        style: {
                              backgroundColor: 'white'
                        }
                  }
            })
);

class AddRecord extends Component {
      constructor(props) {
            super(props);
      }

      render() {
            return (
                  <KeyboardAvoidingView
                        style={styles.cointainer}
                        behavior="padding"
                        enabled
                  >

                        <View style={styles.navigation}>
                              {/* <NavigationBar title="Restaurants" styleName="inline" /> */}
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
                                          <Icon
                                                name="left-arrow"
                                                style={{ fontSize: 35 }}
                                                onPress={() => NavigationService.navigate("History")}
                                          />
                                    }
                                    centerComponent={<Title>Add new record</Title>}
                              />
                              <View style={{ height: 100 }}>
                                    <Image
                                          styleName="large-banner"
                                          source={{
                                                uri:
                                                      "https://shoutem.github.io/static/getting-started/restaurant-1.jpg"
                                          }}
                                    ></Image>
                              </View>
                              <View
                                    style={{
                                          alignItems: "center",
                                          margin: 15,
                                          marginTop: -50,
                                          borderRadius: 10,
                                          overflow: "hidden",
                                          opacity: 0.9
                                    }}
                              >
                                    <Row styleName="small" style={{ height: 60 }}>
                                          <Icon name="home" />
                                          <Subtitle>Phuc Long Tea Kha Van Can</Subtitle>
                                    </Row>
                                    <Row styleName="small" style={{ height: 30 }}>
                                          <Caption>Address: 123 Kha Van Can, Thu Duc, HCM</Caption>
                                    </Row>
                                    <Row styleName="small" style={{ height: 30 }}>
                                          <Caption>Time: Oct 03, 2019 - 00:56</Caption>
                                    </Row>
                                    <Row styleName="small" style={{ height: 40 }}>
                                          <Icon name="add-to-favorites-off" />
                                          <Subtitle>Staff: Luong Thanh Thang</Subtitle>
                                    </Row>
                              </View>
                              <View style={{ height: 15, backgroundColor: "#F6F6F6" }}>
                                    <Divider />
                              </View>
                              <TabNavigator />
                        </View>
                  </KeyboardAvoidingView>
            );
      }
}

export default AddRecord;

const styles = StyleSheet.create({
      navigation: {
            flex: 1,
            // paddingTop: StatusBar.currentHeight
            // marginTop: Platform.OS == "ios" ? 20 : StatusBar.currentHeight,
      },
      cointainer: {
            flex: 1,
            backgroundColor: 'white',
            paddingTop: StatusBar.currentHeight
      },
});
