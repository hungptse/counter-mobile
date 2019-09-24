import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    Image
} from "react-native";

//import Icon from 'react-native-vector-icons/Ionicons'

class Page1 extends Component{

    render(){
        return(
            <View style={styles.container}>
                <Image source={{uri: 'http://icons.iconarchive.com/icons/icons8/windows-8/512/Numbers-1-Black-icon.png'}}
                    style={{width: 300, height: 300}} />
                <Text style={styles.titleText}>Page 1</Text>
            </View>
        );
    }
}

export default Page1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
      }
});