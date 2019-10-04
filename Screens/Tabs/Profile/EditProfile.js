import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableHighlight, StatusBar, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Icon, ImageBackground } from '@shoutem/ui'
import { FontAwesome, NavigationBar, Title } from '@shoutem/ui';
import GradientButton from 'react-native-gradient-buttons';
import { black } from "ansi-colors";
import { TextInput } from "react-native-gesture-handler";


// import {Avatar} from "react-native-elements";
// import { GET } from "../../api/caller";
// import { STORE_LIST_ENDPOINT } from "../../api/endpoint";

//import Icon from 'react-native-vector-icons/Ionicons'



class EditProfile extends Component {
    state = { profile: {}, newAddress: '', newPhone: '' }
    componentDidMount() {
        this.setState({ profile: this.props.navigation.getParam('profileInf') })
        
    }

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
        const { profile } = this.state;
        return (
            <View style={styles.container}>
                {/* <View style={styles.wrapIcon}>
                    <Icon name={'address'} style={styles.icon} />
                </View> */}
                {/* <View style={styles.header}>
                    <ImageBackground source={require('../../../assets/fabian-albert-3e3MRBYVE7A-unsplash.jpg')}
                        style={{ width: '100%', height: '100%', flex: 1, flexDirection: 'column', }}>
                        <View style={styles.editIcon}>
                            <Ionicons name={'ios-arrow-back'} size={30}
                                style={styles.iconBack}
                                onPress={() => navigate('Profile')} />
                            <Icon name={'edit'} color='#FFF' onPress={() => navigate('Profile')} style={{ color: '#FFF' }} />
                        </View>
                        <View style={styles.profile}>
                            <Text style={styles.name}>
                                {profile.name}
                            
                    </Text>
                            <Image style={styles.avatar}
                                source={require('../../../assets/home-bg-OHP-LR-5.jpg')} />
                        </View>
                    </ImageBackground>
                </View> */}

                <View style={styles.navigation}>
                    <NavigationBar
                        styleName="inline"
                        leftComponent={
                            <Title style={{ paddingLeft: 20, }} onPress={() => navigate('Profile')} >
                                {/* {this.state.selectedFilter
                          ? this.state.selectedFilter.value
                          : this.state.filters[0].value} */}
                                <Ionicons name={'ios-arrow-back'} size={30}

                                    style={styles.iconBack}
                                />
                            </Title>

                        }
                        centerComponent={
                            <Title style={{ fontWeight: 'bold' }}>
                                EDIT PROFILE
                        </Title>}

                    />
                </View>
                <ScrollView styles={{ flex: 1 }}>
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
                                <TextInput maxLength={50}
                                    onSubmitEditing={() => { this.secondTextInput.focus(); }}
                                    onChangeText = {(text) => this.setState({newAddress: text})}
                                    multiline={true}
                                    style={{ borderBottomWidth: 1, width: 200 }}>
                                    {profile.address}
                                </TextInput>
                            </View>
                        </View>
                        <View style={styles.myProfile}>
                            <Icon name={'call'} style={styles.icon} />
                            <View style={styles.profileText}>
                                <Text style={styles.textProfile} >Phone</Text>
                                <TextInput maxLength={11}
                                    ref={(input) => { this.secondTextInput = input; }}
                                    onSubmitEditing={() => { this.secondTextInput.focus(); }}
                                    onChangeText={(text) => this.setState({newPhone: text})}
                                    keyboardType='numeric'
                                    style={{ borderBottomWidth: 1 }}>
                                    {profile.phone_number}
                                </TextInput>
                            </View>
                        </View>
                        <View style={styles.myProfile}>
                            <Icon name={'email'} style={styles.icon} />
                            <View style={styles.profileText}>
                                <Text style={styles.textProfile}>Email</Text>
                                <Text>{profile.email}</Text>
                            </View>
                        </View>
                        <View style={styles.myProfile}>
                            <Icon name={'home'} style={styles.icon} />
                            <View style={styles.profileText}>
                                <Text style={styles.textProfile}>Store</Text>
                                <Text>{profile.store}</Text>
                            </View>
                        </View>
                        <View style={styles.myProfile}>
                            <GradientButton
                                text="Save"
                                width="55%"
                                style={{ marginVertical: 2, opacity: 0.9, marginLeft: 20, marginTop: 10 }}
                                pinkDarkGreen
                                impact
                                height={50}
                                radius={10}
                                textStyle={{ fontSize: 14 }}
                                onPressAction={() => navigate("Profile")}

                            />
                        </View>
                    </View>
                </ScrollView>


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
        color: 'black',
    },
    body: {
        flex: 1,
        backgroundColor: '#FFF'
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

    myProfile: {
        // flex: 1,
        flexDirection: 'row',
        marginLeft: 80,
        marginTop: 20
    },
    address: {
        flex: 1,
        // marginTop: 30,
        flexDirection: 'row',
        marginLeft: 80,
        marginTop: 15
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
    },
    navigation: {
        paddingTop: StatusBar.currentHeight,
        paddingBottom: 20,
    },

});