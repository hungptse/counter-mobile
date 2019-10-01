import React, { Component } from "react";
import { Icon, ImageBackground, NavigationBar, Title } from '@shoutem/ui'
import { StyleSheet, Platform, StatusBar, View, Text, Image } from 'react-native'
class Profile extends Component {
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
        var profile = {
            name: 'Nguyen Thai Hoa',
            store: 'Kha Van Can',
            phone: '0123456789',
            email: 'hula@gmail.com',
            address: 'Quan 9, Ho Chi Minh'

        }
        return (
            <View style={styles.container}>
                {/* <View style={styles.wrapIcon}>
                    <Icon name={'address'} style={styles.icon} />
                </View> */}
                <StatusBar
                    translucent
                    barStyle={
                        Platform.OS == "ios" ? "dark-content" : "light-content"
                    }
                />
                {/* <NavigationBar headerStyle={{
                    backgroundColor: 'red',

                }}
                    styleName="clear"
                    leftComponent={
                        <Title style={{ paddingLeft: 20 }}>
                            {this.state.selectedFilter
                          ? this.state.selectedFilter.value
                          : this.state.filters[0].value}
                            Records list
                    </Title>
                    }
                    rightComponent={
                        <Text>h</Text>
                    }
                /> */}
                <View style={styles.header}>
                    <ImageBackground source={require('../../../assets/fabian-albert-3e3MRBYVE7A-unsplash.jpg')}
                        style={{
                            width: '100%', height: '100%', flex: 1, flexDirection: 'column',
                            justifyContent: 'center'
                        }} >

                        <View style={styles.profile}>
                            <Text style={styles.name} onPress={() => this.props.navigation.navigate('EditProfile',{
                               profileInf: profile  
                            })}>
                                {profile.name}
                                {/* <Icon name={'edit'}   style={{ color:'#00365d', marginLeft:10}} /> */}

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
                            <Text>{profile.address}</Text>
                        </View>
                    </View>
                    <View style={styles.myProfile}>
                        <Icon name={'call'} style={styles.icon} />
                        <View style={styles.profileText}>
                            <Text style={styles.textProfile} >Phone</Text>
                            <Text>{profile.phone}</Text>
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
                </View>

            </View >
        );
    }
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS == "ios" ? 20 : StatusBar.currentHeight
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
        // marginBottom: 20,
        marginRight: 8



    },
    editIcon: {
        flex: 1,
        // flexDirection: 'row',
        // justifyContent:'flex-start'

        marginBottom: 27,
        marginLeft: 10
        // aliContent: 'flex-start'

        // justifyContent: 'space-between',
        // marginTop: 35,

    },
    profile: {
        flex: 2,
        flexDirection: 'row',
        marginTop: 80
        // paddingBottom: 40,
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
    }, navigation: {
        paddingTop: StatusBar.currentHeight,

    },

});