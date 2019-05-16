/**
 * Wallets Screen
 * 
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../style/walletsStyle'
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import StarView from '../component/Startview'

export default class Wallets extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: "#ffffff"}}>
        <View style={styles.container}>
          <Text style={styles.walletsText}>Wallets</Text>

          <View style={styles.walletsRowLayout}>
            <TouchableOpacity onPress={()=>Actions.Yourbalance()}>
              <View style={[styles.walletItemLayout, {backgroundColor: "#F5922F"}]}>
                <Image source={require('../../assets/images/bitcoin-1.png')}/>
                <Text style={styles.coinText}>BITCOIN</Text>
                <Text style={styles.priceText}>0.32</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={[styles.walletItemLayout, {backgroundColor: "#105CFA"}]}>
                <Image source={require('../../assets/images/waves-1.png')}/>
                <Text>WAVES</Text>
                <Text style={styles.priceText}>120.5</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.walletsRowLayout}>
            <TouchableOpacity>
            <View style={[styles.walletItemLayout, {backgroundColor: "#0A4A90"}]}>
                <Image source={require('../../assets/images/euro-1.png')}/>
                <Text>EURO</Text>
                <Text style={styles.priceText}>1230.0</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={[styles.walletItemLayout, {backgroundColor: "#1D9C5A"}]}>
                <Image source={require('../../assets/images/dollar-1.png')}/>
                <Text>DOLLAR</Text>
                <Text style={styles.priceText}>0.0</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.walletsRowLayout}>
            <TouchableOpacity>
            <View style={[styles.walletItemLayout, {backgroundColor: "#0055FF"}]}>
                <Image source={require('../../assets/images/rentoo-1.png')}/>
                <Text>RENTOO</Text>
                <Text style={styles.priceText}>1 000 000.0</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={[styles.walletItemLayout, {backgroundColor: "#5481A1"}]}>
                <Image source={require('../../assets/images/ethereum-1.png')}/>
                <Text>ETHEREUM</Text>
                <Text style={styles.priceText}>2.4</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.walletsRowLayout}>
            <TouchableOpacity>
            <View style={[styles.walletItemLayout, {backgroundColor: "#365E9B"}]}>
                <Image source={require('../../assets/images/litecoin-1.png')}/>
                <Text>LITECOIN</Text>
                <Text style={styles.priceText}>37.2</Text>
              </View>
            </TouchableOpacity>
            
          </View>
        </View>
      </ScrollView>
    );
  }
}


