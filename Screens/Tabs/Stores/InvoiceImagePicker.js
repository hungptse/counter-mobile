import React, { Component } from "react";
import {
   View,
   Text,
   TouchableOpacity,
   StyleSheet,
   StatusBar,
   BackHandler,
   Image
} from "react-native";
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";
import NavigationService from "../../../services/navigate";
import { Subtitle } from "@shoutem/ui";

class InvoiceImagePicker extends Component {
   state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      photo: "",
      snapFinish: false
   };
   constructor(props) {
      super(props);
   }

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
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({ hasCameraPermission: status === "granted" });
   }

   snap = async () => {
      if (this.camera) {
         let photo = await this.camera.takePictureAsync({ base64: true });
         this.setState({ photo: photo.base64, snapFinish: true });
      }
   };

   render() {
      const { hasCameraPermission } = this.state;
      if (hasCameraPermission === null) {
         return <View />;
      } else if (hasCameraPermission === false) {
         return <Text>No access to camera</Text>;
      } else {
         return (
            <View style={styles.container}>
               <View
                  style={{
                     flex: 0.5,
                     alignItems: "center",
                     justifyContent: "center"
                  }}
               >
                  <Subtitle>Take a picture for new invoice</Subtitle>
               </View>
               <View style={styles.cameraContainer}>
                  {this.state.photo == "" ? (
                     <Camera
                        style={{ flex: 1, alignItems: "center" }}
                        type={this.state.type}
                        ref={ref => {
                           this.camera = ref;
                        }}
                     >
                        <View
                           style={{
                              backgroundColor: "transparent",
                              width: 70,
                              height: 70,
                              borderRadius: 35,
                              position: "absolute",
                              bottom: 17,
                              alignItems: "center",
                              justifyContent: "center",
                              borderWidth: 2,
                              borderColor: "white"
                           }}
                        >
                           <TouchableOpacity style={{}} onPress={this.snap}>
                              <View
                                 style={{
                                    width: 55,
                                    height: 55,
                                    backgroundColor: "white",
                                    borderRadius: 27.5
                                 }}
                              />
                           </TouchableOpacity>
                        </View>
                     </Camera>
                  ) : (
                     <Image
                        style={{ flex: 1 }}
                        source={{
                           uri: `data:image/png;base64,${this.state.photo}`
                        }}
                     />
                  )}
               </View>
               <View style={{ flex: 0.5 }}></View>
               <View
                  style={{
                     flex: 2.5,
                     flexDirection: "row"
                  }}
               >
                  <View style={{ flex: 1, alignItems: "center" }}>
                     <TouchableOpacity
                        onPress={() => {
                           if (!this.state.snapFinish)
                              NavigationService.navigate("AddInvoice");
                           else this.setState({ snapFinish: false, photo: "" });
                        }}
                     >
                        <Image
                           style={{ width: 110, height: 110 }}
                           source={require("../../../assets/Cancel.png")}
                        />
                     </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1, alignItems: "center" }}>
                     {this.state.snapFinish ? (
                        <TouchableOpacity
                           onPress={() =>
                              NavigationService.navigate("AddInvoice", {
                                 photo: this.state.photo
                              })
                           }
                        >
                           <Image
                              style={{ width: 110, height: 110 }}
                              source={require("../../../assets/Ok.png")}
                           />
                        </TouchableOpacity>
                     ) : (
                        <View></View>
                     )}
                  </View>
               </View>
            </View>
         );
      }
   }
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
      backgroundColor: "#f3f3f3",
      borderBottomWidth: 1.5,
      borderColor: "#d9d9d9"
   },
   cameraContainer: {
      flex: 6,
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 40,
      overflow: "hidden"
   }
});
export default InvoiceImagePicker;
