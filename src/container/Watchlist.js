/**
 * Watchlist Tab Component Screen
 * 
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Action } from 'react-native-router-flux';
import styles from '../style/watchlistStyle'
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import StarView from '../component/Startview'

export default class Watchlist extends Component {
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
                    <View style={styles.rectRedColor}></View>
                    <Text style={styles.itemText}>Black ATV</Text>
                    <View style={styles.currencyWrapper}>
                    <Text style={styles.currencyText}>20$/day</Text>
                    <View style={styles.currencyContainer}>
                        <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/rentoo.png')}/>
                        <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/bitcoin.png')}/>
                    </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.starLayout}>
                    <StarView score={5} style={styles.starView} />
                    <Text style={styles.starText}>34</Text>
                </View>
            </View>
            <View style={styles.interestImageContainer}>
                <TouchableOpacity style={styles.itemIterestBtnContainer}>
                    <Image source={require('../../assets/images/canon-camera.png')}/>
                    <View style={styles.rectRedColor}></View>
                    <Text style={styles.itemText}>DJI Phantom 3 Pro</Text>
                    <View style={styles.currencyWrapper}>
                    <Text style={styles.currencyText}>15$/day</Text>
                    <View style={styles.currencyContainer}>
                        <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/rentoo.png')}/>
                        <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/bitcoin.png')}/>
                    </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.starLayout}>
                    <StarView score={4} style={styles.starView} />
                    <Text style={styles.starText}>92</Text>
                </View>
            </View>
            </View>
            <View style={styles.interestRowContainer}>
            <View style={styles.interestImageContainer}>
                <TouchableOpacity style={styles.itemIterestBtnContainer}>
                    <Image source={require('../../assets/images/canon-camera.png')}/>
                    <View style={styles.rectRedColor}></View>
                    <Text style={styles.itemText}>Califonia Van</Text>
                    <View style={styles.currencyWrapper}>
                    <Text style={styles.currencyText}>20$/day</Text>
                    <View style={styles.currencyContainer}>
                        <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/rentoo.png')}/>
                        <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/bitcoin.png')}/>
                    </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.starLayout}>
                    <StarView score={5} style={styles.starView} />
                    <Text style={styles.starText}>32</Text>
                </View>
            </View>
            <View style={styles.interestImageContainer}>
                <TouchableOpacity style={styles.itemIterestBtnContainer}>
                    <Image source={require('../../assets/images/canon-camera.png')}/>
                    <View style={styles.rectRedColor}></View>
                    <Text style={styles.itemText}>Set of Tools</Text>
                    <View style={styles.currencyWrapper}>
                    <Text style={styles.currencyText}>20$/day</Text>
                    <View style={styles.currencyContainer}>
                        <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/rentoo.png')}/>
                        <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/bitcoin.png')}/>
                    </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.starLayout}>
                    <StarView score={5} style={styles.starView} />
                    <Text style={styles.starText}>41</Text>
                </View>
            </View>
            </View>
        </View>
      </ScrollView>
    );
  }
}


