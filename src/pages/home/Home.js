import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { Image } from 'react-native'
import RedMakeup from './RedMakeup';
import Cart from '../cart/Cart';
const shouye = require('../../assets/images/shouye.png')
const shouyeRed = require('../../assets/images/shouyeRed.png')
const cart = require('../../assets/images/cart.png')
const cartRed = require('../../assets/images/cartRed.png')


export default class Home extends Component{
  constructor(){
    super()
    this.state={
      selectedTab:'home'
    }
  }
  render(){
    return(
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          renderIcon={() => <Image source={shouye} />}
          renderSelectedIcon={() => <Image source={shouyeRed} />}
          badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <RedMakeup></RedMakeup>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Profile"
          renderIcon={() => <Image source={cart} />}
          renderSelectedIcon={() => <Image source={cartRed} />}
          // renderBadge={() => <CustomBadgeView />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          <Cart></Cart>
        </TabNavigator.Item>
      </TabNavigator>
    )
  }
}
