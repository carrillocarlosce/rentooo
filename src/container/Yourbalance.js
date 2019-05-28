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
  ScrollView
} from "react-native";
import { Action } from "react-native-router-flux";
import styles from "../style/yourbalanceStyle";
import {
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";
import firebase from "react-native-firebase";
import moment from "moment";

import StarView from "../component/Startview";

export default class Yourbalance extends Component {
  constructor(props) {
    super(props);

    this.state = { userTransactions: [], dollarPrice: 0 };
  }

  componentWillMount() {
    const { data } = this.props;

    this.props.navigation.setParams({
      headerStyle: { backgroundColor: data.color }
    });

    this.getRecentTransactions();
    this.getDollarValue();
  }

  getRecentTransactions() {
    const userID = window.currentUser["userID"];
    const { data } = this.props;

    firebase
      .database()
      .ref("transactions/")
      .on("value", transactionsSnapshot => {
        let userTransactions = [];
        let i = 0;

        transactionsSnapshot.forEach(function(childSnapshot) {
          var item = childSnapshot.val();
          item.key = i++;

          if (item.owner == userID || item.receiver == userID) {
            if (item.coin == data.name) userTransactions.push(item);
          }
        });

        this.setState({ userTransactions: userTransactions.reverse() });
      });
  }

  async getDollarValue() {
    const { data, balance } = this.props;

    try {
      let response = await fetch(
        "https://api.cryptonator.com/api/ticker/" + data.symbol + "-usd"
      );
      let responseJson = await response.json();

      if (responseJson.success) {
        let valueInDollar = responseJson.ticker.price * balance;
        this.setState({ dollarPrice: valueInDollar });
      }
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { data, balance } = this.props;
    const { dollarPrice, userTransactions } = this.state;

    console.log(userTransactions);

    return (
      <View style={styles.container}>
        <ScrollView style={styles.midContainer}>
          <View style={[styles.topContainer, { backgroundColor: data.color }]}>
            <View style={styles.totopLayout}>
              <View style={styles.containerLogo}>
                <Image
                  resizeMode="contain"
                  style={styles.itemLogo}
                  source={data.logo}
                />
              </View>
              <Text style={styles.rentooText}>{data.name.toUpperCase()}</Text>
            </View>
            <Text style={styles.rentooCurrentyText}>{balance}</Text>
            <Text style={styles.dollarCurrency}>{dollarPrice.toFixed(2)}$</Text>
          </View>

          <Text style={styles.title}>Recent transactions</Text>

          {userTransactions.map((item, index) => {
            const userID = window.currentUser["userID"];
            const isReceived =
              item.type == "credit" && item.receiver == userID ? true : false;

            return (
              <View>
                <View style={styles.itemLayout} key={index}>
                  <View
                    style={[
                      styles.iconTransactionContainer,
                      { backgroundColor: isReceived ? "blue" : "grey" }
                    ]}
                  >
                    <Image
                      resizeMode="contain"
                      style={[
                        styles.iconTransaction,
                        {
                          transform: [
                            { rotate: isReceived ? "180deg" : "0deg" }
                          ]
                        }
                      ]}
                      source={require("../../assets/images/toparrow.png")}
                    />
                  </View>
                  <View style={styles.itemContainer}>
                    <View style={styles.leftItem}>
                      <Text style={styles.upperText}>
                        {isReceived ? "Received" : "Sent"}
                      </Text>
                      <Text style={styles.inlineText}>
                        {moment(item.date).format("MMMM Do YYYY, h:mm a")}
                      </Text>
                    </View>
                    <View style={styles.rightItem}>
                      <Text style={styles.inlineText}>
                        {item.coin.toUpperCase()}
                      </Text>
                      <Text style={styles.upperText}>{item.amount}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.bottomline} />
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={[styles.bottomButton, { backgroundColor: "#A3A3BD" }]}
          >
            <Image
              resizeMode="contain"
              style={styles.arrowBalance}
              source={require("../../assets/images/toparrow.png")}
            />
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.bottomButton, { backgroundColor: "#0055FF" }]}
          >
            <Image
              resizeMode="contain"
              style={[styles.arrowBalance, styles.rotateIcons]}
              source={require("../../assets/images/toparrow.png")}
            />
            <Text style={styles.buttonText}>Receive</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
