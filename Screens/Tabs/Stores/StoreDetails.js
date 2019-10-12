import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, Image, } from 'react-native';
import { FontAwesome, NavigationBar, Title, Icon } from '@shoutem/ui';
import PriceTable from "./PriceTable.js";
import GradientButton from 'react-native-gradient-buttons';
import NavigationService from '../../../services/navigate';

class StoreDetails extends Component {
    constructor(props) {
        super(props);
    }
    state = { store: {} };
    componentDidMount() {
        this.setState({ store: this.props.navigation.getParam('storeInf') })
    }

    render() {
        const { navigate } = this.props.navigation;
        const { store } = this.state;
        const data = [1, 2, 3, 4, 5];
        return (
            <View style={styles.container}>
                <View style={styles.navigation}>
                    <NavigationBar
                        styleName="inline"
                        leftComponent={
                            <Title style={{ paddingLeft: 20, }} onPress={() => navigate('Dashboard')} >

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
                    <ScrollView style={{ flex: 1 }}
                        showsVerticalScrollIndicator={false}>
                        <Image
                            source={{ uri: 'https://cdn.pixabay.com/photo/2015/05/15/14/55/cafe-768771_1280.jpg' }}
                            style={styles.image} />
                        <View >
                            <Text style={{ marginTop: 15, fontSize: 25, fontWeight: 'bold' }}>
                                Store Detail
                                </Text>
                            <View style={{ flex: 1, marginTop: 10 }}>
                                <View style={styles.myProfile}>
                                    <Icon name={'receipt'} style={styles.icon} />
                                    <View style={styles.profileText}>
                                        <Text style={styles.textProfile}>Name</Text>
                                        <Text>{store.name}</Text>
                                    </View>
                                </View>
                                <View style={styles.myProfile}>
                                    <Icon name={'call'} style={styles.icon} />
                                    <View style={styles.profileText}>
                                        <Text style={styles.textProfile} >Phone</Text>
                                        <Text>1231313</Text>
                                    </View>
                                </View>

                                <View style={styles.myProfile}>
                                    <Icon name={'home'} style={styles.icon} />
                                    <View style={styles.profileText}>
                                        <Text style={styles.textProfile}>Company</Text>
                                        <Text>{store.company_name}</Text>
                                    </View>
                                </View>
                                <View style={styles.myProfile}>
                                    <Icon name={'address'} style={styles.icon} />
                                    <View style={styles.profileText}>
                                        <Text style={styles.textProfile}>Address</Text>
                                        <Text>{store.address}</Text>
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


                        <View style={{ flex: 1 }}>
                            <Text style={{ marginTop: 15, fontSize: 25, fontWeight: 'bold' }}>
                                Water prices
                            </Text>
                            <Text style={{ margin: 20, maxWidth: 300, fontSize: 18 }}>
                                Water prices are applied to the store is: <Text style={{ color: 'rgba(175,175,175,1.2)', fontStyle: 'italic' }}>
                                    19000 VND/m3
                            </Text>
                            </Text>



                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ marginTop: 15, fontSize: 25, fontWeight: 'bold' }}>
                                Electricity price
                            </Text>
                            <Text style={{ margin: 20, maxWidth: 300, fontSize: 18, fontStyle: 'italic', }}>
                                The shop applies electricity prices according to the state regulations
                            </Text>
                            <View style={{ marginBottom: 20, alignItems: 'center' }}>
                                <GradientButton
                                    text="Get Table Price"
                                    width="55%"
                                    style={{ marginVertical: 2, opacity: 0.9, marginLeft: 20, marginTop: 10 }}
                                    pinkDarkGreen
                                    impact
                                    height={50}
                                    radius={10}
                                    textStyle={{ fontSize: 14 }}
                                    onPressAction={() => NavigationService.navigate("PriceTable")}

                                />
                            </View>
                        </View>
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