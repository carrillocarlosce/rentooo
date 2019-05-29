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
  responsiveHeight,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import moment from "moment";

import styles from "../style/rentItemStyle";

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

    console.log(itemRental);

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
          <View style={styles.itemRentalContainerText}>
            <Text style={styles.itemRentalTextTitle}>{itemRental.title}</Text>
            <Text style={styles.itemRentalTextDates}>24 april to 27 april</Text>
            <View style={styles.containerRentalPrice}>
              <Text style={styles.itemRentalTextPrice}>
                {itemRental.dailyDollarPrice} x 4 days
              </Text>
              <Text style={styles.itemRentalTextPrice}>
                {itemRental.dailyDollarPrice * 4}$
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.separatorLine} />

        <Text style={styles.totalTitle}>Total</Text>
        <View style={styles.containerRentalPrice}>
          <Text style={styles.totalUSDAmount}>Amount in USD</Text>
          <Text style={styles.totalUSDAmount}>
            {itemRental.dailyDollarPrice * 4}$
          </Text>
        </View>
        <View style={styles.containerRentalPrice}>
          <Text style={styles.totalCurrencyAmount}>RENTALCOIN</Text>
          <Text style={styles.totalCurrencyAmount}>
            {itemRental.dailyDollarPrice * 4}$
          </Text>
        </View>

        <View style={styles.separatorLine} />

        <Text style={styles.termsOfService}>
          By completing this renting, you agree to our terms of service.
        </Text>

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
