/**
 * Yourbalance Screen
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import Calendar from "react-native-calendario";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import moment from "moment";

import styles from "../style/newOfferStyle";

export default class RentItemCheckout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemRental: this.props.itemRental
    };
  }

  onCheckout() {
    const { rentalReservation } = this.props;

    Actions.NewOfferPrice({ newRentalItem: newRentalItem });
  }

  render() {
    const { itemRental } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>Checkout</Text>
        </View>

        <View style={styles.itemRentalContainer}>
          <Image
            style={styles.itemRentalPicture}
            source={{ uri: itemRental.pictures[0] }}
          />
        </View>

        <View style={styles.separatorLine} />

        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => this.onCheckout()}
        >
          <Text style={styles.textBtnNext}>Checkout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
