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
  Share
} from "react-native";
import { Action } from "react-native-router-flux";
import { CodeScanner } from "react-native-pure-code-view";

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

  handleScanSuccess = e => {
    console.log(e);
  };

  render() {
    return (
      <View style={styles.container}>
        <QRCodeView
          title="test"
          onScanSuccess={this.handleScanSuccess}
          onPermissionsNotGranted={this.handlePermissionsNotGranted}
          onPermissionsGranted={this.handlePermissionsGranted}
          onPermissionsDenied={this.handlePermissionsDenied}
          style={styles.codeScanner}
        />

        <Text style={styles.qrInstructions}>Show this code to the owner</Text>
      </View>
    );
  }
}
