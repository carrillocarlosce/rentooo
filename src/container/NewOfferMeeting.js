/**
 * Yourbalance Screen
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import {
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";

import styles from "../style/newOfferStyle";

export default class NewOfferMeeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: "",
      address: "",
      zip: "",
      city: ""
    };
  }

  render() {
    const { country, address, zip, city } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>Meeting place</Text>
          <Text style={styles.pageInstructions}>
            Your exact address is private and only shared when renting is
            confirmed.
          </Text>
          <TouchableOpacity
            style={styles.btnCurrentLocation}
            onPress={() => Actions.NewOfferCurrency()}
          >
            <Image
              resizeMode="contain"
              style={styles.locationIcon}
              source={require("../../assets/UI/location.png")}
            />
            <Text style={styles.textBtnCurrentLocation}>Current location</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.headerInput}>
          <Text style={styles.headerInputTitle}>Country</Text>
        </View>

        <TextInput
          placeholder="Country"
          value={country}
          onChangeText={country => this.setState({ country })}
          maxLength={40}
        />

        <View style={styles.separatorLine} />

        <View style={styles.headerInput}>
          <Text style={styles.headerInputTitle}>Address</Text>
        </View>

        <TextInput
          placeholder="Address"
          value={address}
          onChangeText={address => this.setState({ address })}
          maxLength={40}
        />

        <View style={styles.separatorLine} />

        <View style={styles.headerInput}>
          <Text style={styles.headerInputTitle}>ZIP code</Text>
        </View>

        <TextInput
          placeholder="ZIP code"
          value={zip}
          onChangeText={zip => this.setState({ zip })}
          maxLength={40}
        />

        <View style={styles.separatorLine} />

        <View style={styles.headerInput}>
          <Text style={styles.headerInputTitle}>City</Text>
        </View>

        <TextInput
          placeholder="City"
          value={city}
          onChangeText={city => this.setState({ city })}
          maxLength={40}
        />

        <View style={styles.separatorLine} />

        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => Actions.reset("dashboardContainerScreen")}
        >
          <Text style={styles.textBtnNext}>Done</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
