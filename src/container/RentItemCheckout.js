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
import firebase from "react-native-firebase";

import * as userActions from "../actions/userActions";
import styles from "../style/rentItemStyle";

export default class RentItemCheckout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemRental: this.props.itemRental,
      chosenCurrency: this.props.rentalReservation["paymentMethod"],
      numberDaysReservation: 0,
      dollarPriceTotal: 0,
      totalCurrencyAmount: 0
    };
  }

  componentWillMount() {
    const { itemRental } = this.props;
    const { chosenCurrency } = this.state;

    let numberDaysReservation = 4;
    let totalUSDAmount = numberDaysReservation * itemRental.dailyDollarPrice;

    userActions.convertCoinValue(chosenCurrency, "usd").then(usdValue => {
      this.setState({
        totalCurrencyAmount: totalUSDAmount / usdValue,
        dollarPriceTotal: totalUSDAmount,
        numberDaysReservation: numberDaysReservation
      });
    });
  }

  onCheckout() {
    const { rentalReservation, itemRental } = this.props;
    const {
      chosenCurrency,
      dollarPriceTotal,
      totalCurrencyAmount,
      numberDaysReservation
    } = this.state;

    const userData = window.currentUser;
    const userWalletChosenCurrency = userData["wallet"][chosenCurrency];

    const receiverID = itemRental["owner"];

    if (
      userWalletChosenCurrency !== undefined &&
      userWalletChosenCurrency >= totalCurrencyAmount
    ) {
      let newTransaction = {
        amount: totalCurrencyAmount,
        coin: chosenCurrency,
        date: moment(new Date()),
        owner: userData["userID"],
        receiver: receiverID,
        type: "debit"
      };

      firebase
        .database()
        .ref("transactions")
        .push(newTransaction)
        .then(resultTransaction => {
          firebase
            .database()
            .ref(
              "users/" +
                window.currentUser["userID"] +
                "/wallet/" +
                chosenCurrency
            )
            .transaction(function(amount) {
              if (amount >= totalCurrencyAmount) {
                amount = amount - totalCurrencyAmount;
              }
              return amount;
            })
            .then(result => {
              firebase
                .database()
                .ref("users/" + receiverID + "/wallet/" + chosenCurrency)
                .transaction(function(amount) {
                  if (amount) {
                    amount = amount + totalCurrencyAmount;
                  }
                  return amount;
                })
                .then(result => {
                  this.startChat();
                });
            });
        })
        .catch(err => {
          console.log("error===", err);
        });
    } else {
      alert("You don't have enough cash.");
    }
  }

  async startChat() {
    const { itemRental } = this.props;

    let rentalOwner = itemRental.owner;
    let currentUser = window.currentUser;

    let IDlist = [rentalOwner, currentUser["userID"]];
    IDlist.sort();
    const chatID = IDlist[0] + "*_*" + IDlist[1];

    let isExistContact = false;

    await firebase
      .database()
      .ref("chat/" + chatID)
      .once("value", snapshot => {
        if (snapshot.val() !== null) isExistContact = true;
      });

    if (isExistContact) {
      Actions.Inbox();
    } else {
      var message = {
        _id: userActions.generatorMessageID(),
        text: "Hello",
        createdAt: Date.now(),
        system: false,
        user: {
          _id: currentUser["userID"],
          name: currentUser["firstname"]
        }
      };

      await firebase
        .database()
        .ref("chat")
        .child(chatID)
        .push(message)
        .then()
        .catch(err => {
          console.log("error===", err);
        });

      Actions.reset("dashboardContainerScreen");
    }
  }

  render() {
    const { itemRental } = this.props;
    const {
      chosenCurrency,
      dollarPriceTotal,
      totalCurrencyAmount,
      numberDaysReservation
    } = this.state;

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
                {itemRental.dailyDollarPrice * numberDaysReservation}$
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.separatorLine} />

        <Text style={styles.totalTitle}>Total</Text>
        <View style={styles.containerRentalPrice}>
          <Text style={styles.totalUSDAmount}>Amount in USD</Text>
          <Text style={styles.totalUSDAmount}>
            {userActions.NumberWithSpaces(dollarPriceTotal)}$
          </Text>
        </View>
        <View style={styles.containerRentalPrice}>
          <Text style={styles.totalCurrencyAmount}>
            {chosenCurrency.toUpperCase()}
          </Text>
          <Text style={styles.totalCurrencyAmount}>
            {totalCurrencyAmount.toFixed(5)}
          </Text>
        </View>

        <View style={styles.separatorLine} />

        <Text style={styles.termsOfService}>
          By completing this renting, you agree to our terms of service.
        </Text>

        {totalCurrencyAmount !== 0 && (
          <TouchableOpacity
            style={styles.btnNext}
            onPress={() => this.onCheckout()}
          >
            <Text style={styles.textBtnNext}>Checkout</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
