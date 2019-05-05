/**
 * Welcome Screen
 * 
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Action } from 'react-native-router-flux';
import styles from '../style/welcomeStyle';
import { responsiveWidth } from 'react-native-responsive-dimensions';

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeGridViewImage}>
          <Image source={require('../../assets/images/welcomeGridView.png')}/>
        </View>
        <View style={styles.innerContainer}>
          <View>
            <Image source={require('../../assets/images/oo.png')}/>
          </View>
          <View style={styles.textLayout}>
            <Text style={styles.rentText}>Rent Everything,{"\n"}Everywhere</Text>
            <Text style={styles.welcomeText}>Welcome to your sharing economy platform,{"\n"}where everything can be{"\n"}rented by everyone.</Text>
          </View>
          <View style={styles.btnLayout}>
            <TouchableOpacity style={styles.btnSignUpLayout}>
              <Text style={styles.btnText}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLoginLayout}>
              <Text style={styles.btnText}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnNotNowLayout}>
              <Text style={styles.btnText}>Not now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}


