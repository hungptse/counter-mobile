import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableHighlight, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Icon, ImageBackground } from '@shoutem/ui'
import { FontAwesome } from '@shoutem/ui'

// import {Avatar} from "react-native-elements";
// import { GET } from "../../api/caller";
// import { STORE_LIST_ENDPOINT } from "../../api/endpoint";

//import Icon from 'react-native-vector-icons/Ionicons'



class EditProfile extends Component {
    // state = { stores: [] }
    // async componentDidMount() {
    //     await GET(STORE_LIST_ENDPOINT, {}, {
    //         'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYWRtaW4iLCJpYXQiOjE1NjkzMjg5MzMsImV4cCI6MTU2OTQxNTMzM30.KCJEFI9UkbsfQxPJAIlZie2mNvJbQYSLS6tVa63OiEk"
    //     }).then(res => res.json()).then(res => {
    //         console.log(res);
    //         this.setState({ stores: res.data.items })
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                {/* <View style={styles.wrapIcon}>
                    <Icon name={'address'} style={styles.icon} />
                </View> */}
                <View style={styles.header}>
                    <ImageBackground source={require('../../../assets/fabian-albert-3e3MRBYVE7A-unsplash.jpg')}
                        style={{ width: '100%', height: '100%', flex: 1, flexDirection: 'column', }}>
                        <View style={styles.editIcon}>
                            <Ionicons name={'ios-arrow-back'} size={30}
                                style={styles.iconBack}
                                onPress={() => navigate('Profile')} />

                            {/* <Icon name={'edit'} color='#FFF' onPress={() => navigate('Profile')} style={{ color: '#FFF' }} /> */}
                        </View>
                        <View style={styles.profile}>
                            <Text style={styles.name}>
                                Nguyen Le Quynh Thai Hoa Hue

                    </Text>
                            <Image style={styles.avatar}
                                source={require('../../../assets/home-bg-OHP-LR-5.jpg')} />
                        </View>
                    </ImageBackground>




                </View>
                <View style={styles.body}>
                    {/* <View style={styles.wrapIcon}>
                        <Icon name={'address'} style={styles.icon} />
                    </View> */}
                    <View style={styles.address}>
                        {/* <View style={styles.wrapIcon}>
                        <Ionicons name={'ios-mail-outline'} size={35} color="black" />
                        
                            
                        </View> */}
                        <Icon name={'address'} style={styles.icon} />
                        <View style={styles.profileText}>
                            <Text style={styles.textProfile}>Address</Text>
                            <Text>Quan 9, Ho Chi Minh</Text>
                        </View>
                    </View>
                    <View style={styles.myProfile}>
                        <Icon name={'call'} style={styles.icon} />
                        <View style={styles.profileText}>
                            <Text style={styles.textProfile} >Phone</Text>
                            <Text>0123456789</Text>
                        </View>
                    </View>
                    <View style={styles.myProfile}>
                        <Icon name={'email'} style={styles.icon} />
                        <View style={styles.profileText}>
                            <Text style={styles.textProfile}>Email</Text>
                            <Text>khanhbv@yahoo.com</Text>
                        </View>
                    </View>
                    <View style={styles.myProfile}>
                        <Icon name={'home'} style={styles.icon} />
                        <View style={styles.profileText}>
                            <Text style={styles.textProfile}>Store</Text>
                            <Text>Kha Van Can</Text>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

export default EditProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    iconBack: {
        marginRight: 280,
        marginTop: 20,
        justifyContent: 'space-between',
        color: '#FFF'
    },
    body: {
        flex: 2,
        backgroundColor: '#FFF'
    },
    header: {
        flex: 1,

        // backgroundColor: "rgba(83,80,158,0.3)",

    },
    name: {
        fontSize: 25,
        // flexDirection: 'column',
        width: 0,
        flexGrow: 1,
        height: 100,
        marginLeft: 20,
        marginTop: 30,
        fontWeight: 'bold',
        color: '#FFF',
        alignItems: 'flex-start',
        flexWrap: 'wrap'


    },
    avatar: {

        width: 110,
        height: 110,
        borderRadius: 55,
        borderColor: '#FFF',
        borderWidth: 4,
        marginBottom: 20,
        marginRight: 8



    },
    editIcon: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        marginTop: 20,
        marginRight: 30

    },
    profile: {
        flex: 2,
        flexDirection: 'row',
        paddingBottom: 40,
        // alignItems: 'flex-start'
    },
    myProfile: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 80
    },
    address: {
        flex: 1,
        marginTop: 30,
        flexDirection: 'row',
        marginLeft: 80
    },

    profileText: {
        flexDirection: 'column',

    },
    textProfile: {
        opacity: 0.5
    },
    icon: {
        marginRight: 25,
        width: 40,
        height: 40,
        borderWidth: 3,
        borderRadius: 20,
        paddingTop: 5,
        borderColor: 'rgba(83,80,158,0.1)'

    },
    wrapIcon: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24
    }

});