import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { createAppContainer } from 'react-navigation';

import {createBottomTabNavigator} from 'react-navigation-tabs';
//import Icon from 'react-native-vector-icons/Ionicons';
import Page1 from './Screens/Page1';
import Page2 from './Screens/Page2';
import Page3 from './Screens/Page3';
import Page4 from './Screens/Page4';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
// class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
      
//       </View>
//     );
//   }
// }

const TabNavigator = createBottomTabNavigator({
  Page1:{
    screen: Page1,
    navigationOptions: {
      tabBarLabel: 'Page 1',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/one.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  },
  Page2:{
    screen:Page2,
    navigationOptions: {
      tabBarLabel: 'Page 2',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/two.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  },
  Page3:{
    screen:Page3,
    navigationOptions: {
      tabBarLabel: 'Page 3',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/three.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  },
  Page4:{
    screen:Page4,
    navigationOptions: {
      tabBarLabel: 'Page 4',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/four.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  }
  
}, {
  tabBarOptions: {  
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    style: {
      height: 55,
      backgroundColor: 'white',
      borderTopWidth: 1,
      shadowOffset: { width: 5, height: 3 },
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5,
    },
    
  }
})

export default createAppContainer(TabNavigator);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.welcome}>Welcome to HKT Counter Application!</Text>
//       <Button title="Get Users List"/>
//       <FlatList
//         data={[
//           {key: 'STT'},
//           {key: 'ThangLT'}
//         ]}
//         renderItem={({item}) => <Text>{item.key}</Text>}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: StatusBar.currentHeight
//   },
//   welcome: {
//     color: 'red',
//     fontSize: 20,
//     paddingTop: 20,
//     paddingBottom: 20
//   }
// });
