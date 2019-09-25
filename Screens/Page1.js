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
import { GET } from "../api/caller";
import { STORE_LIST_ENDPOINT } from "../api/endpoint";

//import Icon from 'react-native-vector-icons/Ionicons'

class Page1 extends Component {
    state = { stores: [] }
    async componentDidMount() {
        await GET(STORE_LIST_ENDPOINT, {}, {
            'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYWRtaW4iLCJpYXQiOjE1NjkzMjg5MzMsImV4cCI6MTU2OTQxNTMzM30.KCJEFI9UkbsfQxPJAIlZie2mNvJbQYSLS6tVa63OiEk"
        }).then(res => res.json()).then(res => {
            console.log(res);
            this.setState({ stores: res.data.items })
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={{ uri: 'http://icons.iconarchive.com/icons/icons8/windows-8/512/Numbers-1-Black-icon.png' }}
                    style={{ width: 300, height: 300 }} />
                <Text style={styles.titleText}>Page 1111</Text>
                {/* {this.state.stores.map(store => {
                    return (
                        <>
                            <Text key={store.id}>Name:{store.name}</Text>
                        </>
                    )
                })}
                <Text>Total store: {this.state.stores.length}</Text> */}
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