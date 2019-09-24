import React, { Component } from "react";
import {View, Text, StyleSheet, Image} from 'react-native';

class Page2 extends Component{

    render(){
        return(
            <View style={styles.container}>
            
                <Image source={{uri: 'http://icons.iconarchive.com/icons/icons8/windows-8/512/Numbers-2-Black-icon.png'}}
                        style={{width: 300, height: 300}} />
                
                <Text style={styles.titleText}>Page 2</Text>
            </View>
        );
    }
}

export default Page2;

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