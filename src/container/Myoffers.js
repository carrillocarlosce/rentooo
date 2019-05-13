/**
 * Myoffers Tab Component Screen
 * 
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Action } from 'react-native-router-flux';
import styles from '../style/myoffersStyle'
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import StarView from '../component/Startview'

export default class Myoffers extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: "#ffffff"}}>
        <View style={styles.container}>
            <View style={styles.interestRowContainer}>
            <View style={styles.interestImageContainer}>
                <TouchableOpacity style={styles.itemIterestBtnContainer}>
                    <Image source={require('../../assets/images/canon-camera.png')}/>
                    <View style={styles.rectWhiteColor}></View>
                    <Text style={styles.itemText}>Black Canon Film{"\n"}Camera</Text>
                    <View style={styles.currencyWrapper}>
                    <Text style={styles.currencyText}>15$/day</Text>
                    <View style={styles.currencyContainer}>
                        <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/rentoo.png')}/>
                        <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/bitcoin.png')}/>
                        <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/waves.png')}/>
                    </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.starLayout}>
                    <StarView score={4} style={styles.starView} />
                    <Text style={styles.starText}>13</Text>
                </View>
            </View>
            <View style={styles.interestImageContainer}>
                <TouchableOpacity style={styles.itemIterestBtnContainer}>
                    <Image source={require('../../assets/images/canon-camera.png')}/>
                    <View style={styles.rectWhiteColor}></View>
                    <Text style={styles.itemText}>Black Canon Film{"\n"}Camera</Text>
                    <View style={styles.currencyWrapper}>
                    <Text style={styles.currencyText}>15$/day</Text>
                    <View style={styles.currencyContainer}>
                        <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/rentoo.png')}/>
                        <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/bitcoin.png')}/>
                        <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/waves.png')}/>
                    </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.starLayout}>
                    <StarView score={4} style={styles.starView} />
                    <Text style={styles.starText}>13</Text>
                </View>
            </View>
            </View>
            <View style={styles.interestRowContainer}>
            <View style={styles.interestImageContainer}>
                <TouchableOpacity style={styles.itemIterestBtnContainer}>
                    <Image source={require('../../assets/images/canon-camera.png')}/>
                    <View style={styles.rectWhiteColor}></View>
                    <Text style={styles.itemText}>Black Canon Film{"\n"}Camera</Text>
                    <View style={styles.currencyWrapper}>
                    <Text style={styles.currencyText}>15$/day</Text>
                    <View style={styles.currencyContainer}>
                        <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/rentoo.png')}/>
                        <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/bitcoin.png')}/>
                        <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/waves.png')}/>
                    </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.starLayout}>
                    <StarView score={4} style={styles.starView} />
                    <Text style={styles.starText}>13</Text>
                </View>
            </View>
            <View style={styles.interestImageContainer}>
                <TouchableOpacity style={styles.itemIterestBtnContainer}>
                    <Image source={require('../../assets/images/canon-camera.png')}/>
                    <View style={styles.rectWhiteColor}></View>
                    <Text style={styles.itemText}>Black Canon Film{"\n"}Camera</Text>
                    <View style={styles.currencyWrapper}>
                    <Text style={styles.currencyText}>15$/day</Text>
                    <View style={styles.currencyContainer}>
                        <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/rentoo.png')}/>
                        <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/bitcoin.png')}/>
                        <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/waves.png')}/>
                    </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.starLayout}>
                    <StarView score={4} style={styles.starView} />
                    <Text style={styles.starText}>13</Text>
                </View>
            </View>
            </View>
        </View>
      </ScrollView>
    );
  }
}


