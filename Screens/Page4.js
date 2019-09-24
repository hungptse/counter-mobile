import React, { Component } from "react";
import {View, Text, StyleSheet, Image} from 'react-native';

class Page4 extends Component{

    render(){
        return(
            <View style={styles.container}>
            <Image source={{uri: 'http://icons.iconarchive.com/icons/icons8/windows-8/512/Numbers-4-Black-icon.png'}}
                        style={{width: 300, height: 300}} />
                <Text style={styles.titleText}>Page 4</Text>
            </View>
        );
    }
}

export default Page4;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
      }
});