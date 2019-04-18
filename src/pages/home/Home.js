import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import { Image } from 'react-native';
import styles from './styles';

import RedMakeup from '../redmakeup/RedMakeup';
import Cart from '../cart/Cart';
import List from '../list/List';
import Zhongchou from '../zhongchou/Zhongchou';
import Mine from '../mine/Mine';
const shouye = require('../../assets/images/shouye.png')
const shouyeRed = require('../../assets/images/shouyeRed.png')
const cart = require('../../assets/images/cart.png')
const cartRed = require('../../assets/images/cartRed.png')
const list = require('../../assets/images/list.png')
const listRed = require('../../assets/images/listRed.png')
const zhongchou = require('../../assets/images/zhongchou.png')
const zhongchouRed = require('../../assets/images/zhongchouRed.png')
const mine = require('../../assets/images/mine.png')
const mineRed = require('../../assets/images/mineRed.png')

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
          title="首页"
        //   titleStyle={styles.titleStyle}
          renderIcon={() => <Image style={styles.imageSize} source={shouye} />}
          renderSelectedIcon={() => <Image style={styles.imageSize} source={shouyeRed} />}
        //   badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <RedMakeup></RedMakeup>
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'list'}
          title="列表"
          renderIcon={() => <Image style={styles.imageSize} source={list} />}
          renderSelectedIcon={() => <Image style={styles.imageSize} source={listRed} />}
        //   badgeText="1"
          onPress={() => this.setState({ selectedTab: 'list' })}>
          <List></List>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'zhongchou'}
          title="众筹"
          renderIcon={() => <Image style={styles.imageSize} source={zhongchou} />}
          renderSelectedIcon={() => <Image style={styles.imageSize} source={zhongchouRed} />}
        //   badgeText="1"
          onPress={() => this.setState({ selectedTab: 'zhongchou' })}>
          <Zhongchou></Zhongchou>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'cart'}
          title="购物车"
          renderIcon={() => <Image style={styles.imageSize} source={cart} />}
          renderSelectedIcon={() => <Image style={styles.imageSize} source={cartRed} />}
        //   renderBadge={() => <View><Text>1</Text></View>}
          onPress={() => this.setState({ selectedTab: 'cart' })}>
          <Cart></Cart>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'mine'}
          title="我的"
          renderIcon={() => <Image style={styles.imageSize} source={mine} />}
          renderSelectedIcon={() => <Image style={styles.imageSize} source={mineRed} />}
        //   badgeText="1"
          onPress={() => this.setState({ selectedTab: 'mine' })}>
          <Mine></Mine>
        </TabNavigator.Item>
      </TabNavigator>
    )
  }
}
