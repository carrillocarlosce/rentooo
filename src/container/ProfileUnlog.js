/**
 * ProfileUnlog Screen
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
import { Actions } from "react-native-router-flux";
import Grid from "react-native-grid-component";
import firebase from "react-native-firebase";

import styles from "../style/profileUnlogStyle";
import ItemRental from "../component/ItemRental";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userRentals: []
    };
  }

  render() {
    

    return (
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <Image source={require("../../assets/images/Oval.png")} />

          <Text style={styles.profileContent}>
            Lorm ipsum dolor sit amet, consectetur adipis{"\n"}
            dapibus sit amet neque eget volutpat
          </Text>
        </View>

        <TouchableOpacity
          style={styles.btnSignup}
          onPress={() => Actions.NewOfferTitle()}
        >
          <Text style={styles.textBtnPostOffer}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => Actions.NewOfferTitle()}
        >
          <Text style={styles.textBtnPostOffer}>Log in</Text>
        </TouchableOpacity>

        <View style={styles.borderline} />

      </View>
    );
  }
}
