/**
 * Past Tab Component Screen
 * 
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Action } from 'react-native-router-flux';
import styles from '../style/upcomingStyle'

export default class Past extends Component {
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
                        <Text style={styles.itemText}>Villa with Pool and{"\n"}jaccuzzi</Text>
                        <View style={styles.currencyWrapper}>
                            <Text style={styles.currencyText}>2 Apr. to 8 Apr.</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.starText}>1 rent</Text>
                </View>
                <View style={styles.interestImageContainer}>
                    <TouchableOpacity style={styles.itemIterestBtnContainer}>
                        <Image source={require('../../assets/images/canon-camera.png')}/>
                        <Text style={styles.itemText}>DJI Phantom 3 Pro</Text>
                        <View style={styles.currencyWrapper}>
                            <Text style={styles.currencyText}>18 Mar. to 21 Mar</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.starText}>2 rent</Text>
                </View>
            </View>

            <View style={styles.interestRowContainer}>
                <View style={styles.interestImageContainer}>
                    <TouchableOpacity style={styles.itemIterestBtnContainer}>
                        <Image source={require('../../assets/images/canon-camera.png')}/>
                        <Text style={styles.itemText}>Chinese boarding game</Text>
                        <View style={styles.currencyWrapper}>
                            <Text style={styles.currencyText}>12 Feb.</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.starText}>1 rent</Text>
                </View>
                
            </View>
        </View>
      </ScrollView>
    );
  }
}


