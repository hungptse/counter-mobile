import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, Image } from 'react-native';
import { FontAwesome, NavigationBar, Title, Icon } from '@shoutem/ui';



class StoreDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    // renderRow() {
    //     return (
    //         <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
    //             <View style={{ flex: 1, alignSelf: 'stretch' }} /> { /* Edit these as they are your cells. You may even take parameters to display different data / react elements etc. */}
    //             <View style={{ flex: 1, alignSelf: 'stretch' }} />
    //             <View style={{ flex: 1, alignSelf: 'stretch' }} />
    //             <View style={{ flex: 1, alignSelf: 'stretch' }} />
    //             <View style={{ flex: 1, alignSelf: 'stretch' }} />
    //         </View>
    //     );
    // }

    render() {
        const { navigate } = this.props.navigation;
        const data = [1, 2, 3, 4, 5];
        return (
            <View style={styles.container}>
                <View style={styles.navigation}>
                    <NavigationBar
                        styleName="inline"
                        leftComponent={
                            <Title style={{ paddingLeft: 20, }} onPress={() => navigate('Dashboard')} >
                                {/* {this.state.selectedFilter
                          ? this.state.selectedFilter.value
                          : this.state.filters[0].value} */}
                                <Icon name={'left-arrow'}

                                    style={styles.iconBack}
                                />
                            </Title>

                        }
                        centerComponent={
                            <Title style={{ fontWeight: 'bold' }}>
                                Store Details
                        </Title>}

                    />

                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <ScrollView style={{ flex: 1 }}>
                        <Image
                            source={{ uri: 'https://cdn.pixabay.com/photo/2015/05/15/14/55/cafe-768771_1280.jpg' }}
                            style={styles.image} />
                        <View>
                            <Text style={{ marginTop: 15, fontSize: 25, fontWeight: 'bold' }}>
                                Store Detail
                                </Text>
                            <View style={{ flex: 1 }}>
                                <View style={styles.myProfile}>
                                    <Icon name={'receipt'} style={styles.icon} />
                                    <View style={styles.profileText}>
                                        <Text style={styles.textProfile}>Name</Text>
                                        <Text>ThangLT</Text>
                                    </View>
                                </View>
                                <View style={styles.myProfile}>
                                    <Icon name={'call'} style={styles.icon} />
                                    <View style={styles.profileText}>
                                        <Text style={styles.textProfile} >Phone</Text>
                                        <Text>1112313113</Text>
                                    </View>
                                </View>

                                <View style={styles.myProfile}>
                                    <Icon name={'home'} style={styles.icon} />
                                    <View style={styles.profileText}>
                                        <Text style={styles.textProfile}>Company</Text>
                                        <Text>HCM</Text>
                                    </View>
                                </View>
                                <View style={styles.myProfile}>
                                    <Icon name={'address'} style={styles.icon} />
                                    <View style={styles.profileText}>
                                        <Text style={styles.textProfile}>Address</Text>
                                        <Text>HCM</Text>
                                    </View>
                                </View>
                                <View style={styles.myProfile}>
                                    <Icon name={'user-profile'} style={styles.icon} />
                                    <View style={styles.profileText}>
                                        <Text style={styles.textProfile}>Manager</Text>
                                        <Text>ThangLT</Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                        {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            {
                                data.map((datum) => { // This will render a row for each data element.
                                    return this.renderRow();
                                })
                            }
                        </View> */}
                    </ScrollView>
                </View>


            </View>
        );
    }
}

export default StoreDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    iconBack: {
        fontSize: 30,

    },
    image: {
        width: 335,
        height: 293,
        shadowColor: 'rgba(12, 93, 255, 0.14)',
        shadowOffset: { width: 1, height: 0 },
        shadowRadius: 20,
        borderRadius: 16,
    },

    navigation: {
        paddingTop: StatusBar.currentHeight,
        paddingBottom: 20,
    },
    myProfile: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 60,
        marginBottom: 20
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
});