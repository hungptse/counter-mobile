import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, ScrollView, StatusBar } from 'react-native';
import { FontAwesome, NavigationBar, Title, Icon } from '@shoutem/ui';

export default class PriceTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.navigation}>
                    <NavigationBar

                        styleName="inline"
                        leftComponent={
                            <Title style={{ paddingLeft: 20, }} onPress={() => navigate('StoreDetails')} >

                                <Icon name={'left-arrow'}

                                    style={styles.iconBack}
                                />
                            </Title>

                        }
                        centerComponent={
                            <Title style={{ fontWeight: 'bold'}}>
                                Electricity Price
                        </Title>}
                    />
                </View>
                <ScrollView style={{ flex: 1, }} showsHorizontalScrollIndicator={false}>
                    <View style={styles.body}>
                        <View style={styles.header}>
                            <Text style={styles.headerText1}>

                            </Text>
                            <Text style={styles.headerText1}>
                                Head 2
                            </Text>
                            <Text style={styles.headerText1}>Head 3</Text>
                            <Text style={styles.headerText1}>Head 4</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.headerText1}>
                                Mon
                            </Text>
                            <Text style={styles.headerText}>
                                Head 2
                            </Text>
                            <Text style={styles.headerText}>Head 3</Text>
                            <Text style={styles.headerText}>Head 4</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.headerText1}>
                                Tue
                            </Text>
                            <Text style={styles.headerText}>
                                Head 2
                            </Text>
                            <Text style={styles.headerText}>Head 3</Text>
                            <Text style={styles.headerText}>Head 4</Text>
                        </View >
                        <View style={styles.row}>
                            <Text style={styles.headerText1}>
                                Wed
                            </Text>
                            <Text style={styles.headerText}>
                                Head 2
                            </Text>
                            <Text style={styles.headerText}>Head 3</Text>
                            <Text style={styles.headerText}>Head 4</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.headerText1}>
                                Thu
                            </Text>
                            <Text style={styles.headerText}>
                                Head 2
                            </Text>
                            <Text style={styles.headerText}>Head 3</Text>
                            <Text style={styles.headerText}>Head 4</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.headerText1}>
                                Fri
                            </Text>
                            <Text style={styles.headerText}>
                                Head 2
                            </Text>
                            <Text style={styles.headerText}>Head 3</Text>
                            <Text style={styles.headerText}>Head 4</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.headerText1}>
                                Sat
                            </Text>
                            <Text style={styles.headerText}>
                                Head 2
                            </Text>
                            <Text style={styles.headerText}>Head 3</Text>
                            <Text style={styles.headerText}>Head 4</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.headerText1}>
                                Sun
                            </Text>
                            <Text style={styles.headerText}>
                                Head 2
                            </Text>
                            <Text style={styles.headerText}>Head 3</Text>
                            <Text style={styles.headerText}>Head 4</Text>
                        </View>
                    </View>

                </ScrollView>

            </View>

        );
    }
}
const styles = StyleSheet.create({
    navigation: {
        marginTop: Platform.OS == "ios" ? 20 : StatusBar.currentHeight,
    },
    container: {
        flex: 1,

    },
    body: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderWidth: 0.5,
        borderColor: '#a8a5ab',
        backgroundColor: '#e8f3ec'

    },
    header: {
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    headerText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,

    },
    headerText1: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    iconBack: {
        fontSize: 35
    },
    row: {
        padding: 20,
        flexDirection: 'row',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#a8a5ab'

    }

});
