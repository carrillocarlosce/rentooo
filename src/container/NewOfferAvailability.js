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

export default class NewOfferAvailability extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      summary: ""
    };
  }

  nextStep() {
    const { newRentalItem } = this.props;
    Actions.NewOfferPrice({ newRentalItem: newRentalItem });
  }

  render() {
    const { title, summary } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>Availability</Text>
          <Text style={styles.pageInstructions}>
            Select dates to block or unblock.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => this.nextStep()}
        >
          <Text style={styles.textBtnNext}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
