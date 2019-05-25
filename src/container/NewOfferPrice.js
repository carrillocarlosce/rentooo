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

export default class NewOfferPrice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: "",
      summary: ""
    };
  }

  render() {
    const { price } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>Price</Text>
          <Text style={styles.pageInstructions}>
            Set the default daily price renters will see for your offer.
          </Text>
        </View>

        <View style={styles.headerInput}>
          <Text style={styles.headerInputTitle}>$ DOLLAR AMOUNT</Text>
        </View>

        <TextInput
          placeholder="0"
          value={price}
          onChangeText={price => this.setState({ price })}
          maxLength={40}
          style={styles.priceText}
        />

        <View style={styles.separatorLine} />

        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => Actions.NewOfferCurrency()}
        >
          <Text style={styles.textBtnNext}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
