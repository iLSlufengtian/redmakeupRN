/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Home from './src/pages/home/Home'
export default class App extends React.Component{

  render(){
    return(
      <Home></Home>
    )
  }
}



// import {Platform, StyleSheet, Text, View} from 'react-native';
// import TabNavigator from 'react-native-tab-navigator';



// import { Image } from 'react-native'
// import Home from './src/pages/home/Home';
// import Cart from './src/pages/cart/Cart';
// const shouye = require('./src/assets/images/shouye.png')
// const shouyeRed = require('./src/assets/images/shouyeRed.png')
// const cart = require('./src/assets/images/cart.png')
// const cartRed = require('./src/assets/images/cartRed.png')

// export default class App extends Component{
//   constructor(){
//     super()
//     this.state={
//       selectedTab:'home'
//     }
//   }
//   render(){
//     return(
//       <TabNavigator>
//         <TabNavigator.Item
//           selected={this.state.selectedTab === 'home'}
//           title="Home"
//           renderIcon={() => <Image source={shouye} />}
//           renderSelectedIcon={() => <Image source={shouyeRed} />}
//           badgeText="1"
//           onPress={() => this.setState({ selectedTab: 'home' })}>
//           <Home></Home>
//         </TabNavigator.Item>
//         <TabNavigator.Item
//           selected={this.state.selectedTab === 'profile'}
//           title="Profile"
//           renderIcon={() => <Image source={cart} />}
//           renderSelectedIcon={() => <Image source={cartRed} />}
//           // renderBadge={() => <CustomBadgeView />}
//           onPress={() => this.setState({ selectedTab: 'profile' })}>
//           <Cart></Cart>
//         </TabNavigator.Item>
//       </TabNavigator>
//     )
//   }
// }
