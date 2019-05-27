/**
 * Upcoming Tab Component Screen
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { Action } from "react-native-router-flux";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

import styles from "../style/upcomingStyle";

export default class Upcoming extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#ffffff"
        }}
      >
        <View style={styles.container}>
          <View style={styles.interestRowContainer}>
            <View style={styles.interestImageContainer}>
              <TouchableOpacity style={styles.itemIterestBtnContainer}>
                <Image
                  style={styles.itemImage}
                  source={require("../../assets/images/canon-camera.png")}
                />
                <Text style={styles.itemText}>
                  Black Canon Film{"\n"}Camera
                </Text>
                <View style={styles.currencyWrapper}>
                  <Text style={styles.currencyText}>21 Apr. to 23 Apr.</Text>
                </View>
              </TouchableOpacity>
              <Text style={styles.starText}>1 rent</Text>
            </View>
            <View style={styles.interestImageContainer}>
              <TouchableOpacity style={styles.itemIterestBtnContainer}>
                <Image
                  source={require("../../assets/images/canon-camera.png")}
                />
                <Text style={styles.itemText}>DJI Phantom 3 Pro</Text>
                <View style={styles.currencyWrapper}>
                  <Text style={styles.currencyText}>27 Apr</Text>
                </View>
              </TouchableOpacity>
              <Text style={styles.starText}>2 rent</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
