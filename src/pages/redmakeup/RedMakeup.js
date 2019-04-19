import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import styles from './styles';
import Swiper from 'react-native-swiper';


export default class RedMakeup extends React.Component {
    render() {
        return(
            <View style={styles.maxview}>
                <View style={styles.top}>
                <Swiper
                    style={styles.swiper}
                    // height={200}
                    horizontal={true}
                    // paginationStyle={{bottom: 10}}
                    autoplay={true}
                    autoplayTimeout={3}
                    showsButtons={true}>
                    <Image source={require('../../assets/images/offlineDeviceBg.png')} style={styles.img}/>
                    <Image source={require('../../assets/images/onlineDeviceBg.png')} style={styles.img}/>
                    <Image source={require('../../assets/images/redAlertBg.png')} style={styles.img}/>
                    <Image source={require('../../assets/images/yellowAlertBg.png')} style={styles.img}/>
                </Swiper>
                </View>
                <View style={styles.main}>

                </View>
            </View>
        )
    }
}