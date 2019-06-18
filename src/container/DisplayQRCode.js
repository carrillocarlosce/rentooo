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

import {
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";
import firebase from "react-native-firebase";
import QRCode from "react-native-qrcode-svg";

import styles from "../style/displayQRCodeStyle";

export default class DisplayQRCode extends Component {
  constructor(props) {
    super(props);

    this.state = { key: this.props.key };
  }

  render() {
    const { address } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.QRcontainer}>
          <QRCode value={address} size={responsiveWidth(50)} />
        </View>

        <Text style={styles.qrInstructions}>Show this code to the owner</Text>
      </View>
    );
  }
}
