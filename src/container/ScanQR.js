/**
 * Yourbalance Screen
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
  ScrollView,
  Share,
  Alert
} from "react-native";
import { Action } from "react-native-router-flux";
import { RNCamera } from "react-native-camera";
import {
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";
import firebase from "react-native-firebase";

import styles from "../style/scanQRStyle";

export default class ScanQR extends Component {
  constructor(props) {
    super(props);
  }

  onBarCodeRead = e => {
    Alert.alert("Barcode value is" + e.data, "Barcode type is" + e.type);
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={{
            flex: 1,
            width: "100%"
          }}
          onBarCodeRead={this.onBarCodeRead}
        />

        <View
          style={{
            position: "absolute",
            alignSelf: "center",
            top: "30%",
            width: responsiveWidth(50),
            height: responsiveWidth(50),
            borderWidth: 1,
            borderColor: "white",
            backgroundColor: "transparent"
          }}
        />

        <Text style={styles.qrInstructions}>
          Position the QR code in this frame
        </Text>
      </View>
    );
  }
}