/**
 * Wallets Screen
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
import {
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";

import styles from "../style/walletsStyle";
import StarView from "../component/Startview";
import cryptoList from "../data/cryptoList";

import * as ethereumActions from "../cryptosActions/ethereum";

export default class Wallets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wallet: [],
      filteredCryptoList: []
    };
  }

  componentDidMount() {
    this.getWalletData();
  }

  getWalletData() {
    firebase
      .database()
      .ref("users/" + window.currentUser["userID"] + "/wallet")
      .on("value", walletSnapshot => {
        let userCurrencies =
          walletSnapshot._value !== null
            ? Object.keys(walletSnapshot.val())
            : [];

        let filteredCryptoList = [];

        cryptoList.map(cryptoItem => {
          if (userCurrencies.includes(cryptoItem.name)) {
            filteredCryptoList.push(cryptoItem);
          }
        });

        console.log(filteredCryptoList);

        this.setState({
          wallet: walletSnapshot.val(),
          filteredCryptoList: filteredCryptoList
        });
      });
  }

  round(value, decimals) {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
  }

  _renderItem = (data, i) => {
    let publicKey = this.state.wallet[data.name].public;

    let balance = 0;

    ethereumActions.getBalance(publicKey).then(ethBalance => {
      balance = ethBalance;
    });

    return (
      <TouchableOpacity
        style={[styles.walletItemLayout, { backgroundColor: data.color }]}
        onPress={() =>
          Actions.Yourbalance({
            data: data,
            balance: balance
          })
        }
      >
        <View style={styles.itemCrypto}>
          <Image
            resizeMode="contain"
            style={{ height: "60%", width: "60%" }}
            source={data.logo}
          />
        </View>
        <Text style={styles.coinText}>{data.name.toUpperCase()}</Text>
        <Text style={styles.priceText}>{this.round(balance, 2)}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const { wallet, filteredCryptoList } = this.state;

    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <View style={styles.container}>
          <Text style={styles.walletsText}>Wallets</Text>

          {filteredCryptoList.length > 0 ? (
            <Grid
              style={{ marginHorizontal: -5 }}
              renderItem={this._renderItem}
              renderPlaceholder={i => (
                <View
                  style={{
                    flex: 1,
                    margin: 15,
                    height: responsiveHeight(13.5)
                  }}
                />
              )}
              data={filteredCryptoList}
              numColumns={2}
            />
          ) : (
            <View style={styles.noWalletContainer}>
              <Text style={styles.noWalletTitle}>No wallets yet</Text>
              <Text style={styles.noWalletText}>
                Let's create your first wallet to start renting.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    );
  }
}
