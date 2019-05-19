/**
 * MapSearch Screen
 * 
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Actions } from 'react-native-router-flux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import StarView from 'react-native-star-view';


import styles from '../style/mapsearchStyle'

export default class MapSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
    }
  }
  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity style={styles.closeBtn} onPress={() => Actions.pop()}>
            <Image style={styles.closeImage} source={require("../../assets/images/closebtn3x.png")} />
          </TouchableOpacity>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{flex: 1}}
          region={{
            latitude: 42.882004,
            longitude: 74.582748,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          showsUserLocation={true}
        />
        <View style={styles.bottomContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.leftText}>120 rentals</Text>
            <TouchableOpacity style={styles.rightBtn}>
              <Text style={styles.rightText}>Filters</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal style={{marginTop: 24}}>
            <View style={styles.interestImageContainer}>
            
              <TouchableOpacity style={styles.itemIterestBtnContainer}>
                  <Image style={styles.itemImage} source={require('../../assets/images/canon-camera.png')}/>
                  <Image style={styles.heartIcon} source={require('../../assets/images/heart.png')}/>
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
                  <Image style={styles.itemImage} source={require('../../assets/images/canon-camera.png')}/>
                  <Image style={styles.heartIcon} source={require('../../assets/images/heart.png')}/>
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
                  <Image style={styles.itemImage} source={require('../../assets/images/canon-camera.png')}/>
                  <Image style={styles.heartIcon} source={require('../../assets/images/heart.png')}/>
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
          </ScrollView>
        </View>
      </View>
    );
  }
}


