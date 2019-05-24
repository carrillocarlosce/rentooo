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

import styles from "../style/walletsStyle";
import {
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";
import StarView from "../component/Startview";

const cryptoList = [
  {
    name: "euro",
    logo: require("../../assets/coins/euro.png"),
    color: "#30A4E8"
  },
  {
    name: "dollar",
    logo: require("../../assets/coins/dollar.png"),
    color: "#17A370"
  },
  {
    name: "rentoo",
    logo: require("../../assets/coins/rentoo.png"),
    color: "#226BFB"
  },
  {
    name: "bitcoin",
    logo: require("../../assets/coins/bitcoin.png"),
    color: "#F5922F"
  },
  {
    name: "litecoin",
    logo: require("../../assets/coins/litecoin.png"),
    color: "#638EA9"
  },
  {
    name: "binance",
    logo: require("../../assets/coins/binance.png"),
    color: "#D79E28"
  }
];

export default class Wallets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wallet: []
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
        let wallet = [];

        this.setState({ wallet: walletSnapshot.val() });
      });
  }

  _renderItem = (data, i) => (
    <TouchableOpacity
      style={[styles.walletItemLayout, { backgroundColor: data.color }]}
      onPress={() => Actions.Yourbalance()}
    >
      <View style={styles.itemCrypto}>
        <Image
          resizeMode="contain"
          style={{ height: "60%", width: "60%" }}
          source={data.logo}
        />
      </View>
      <Text style={styles.coinText}>{data.name.toUpperCase()}</Text>
      <Text style={styles.priceText}>{this.state.wallet[data.name]}</Text>
    </TouchableOpacity>
  );

  render() {
    const { wallet } = this.state;

    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <View style={styles.container}>
          <Text style={styles.walletsText}>Wallets</Text>

          <View style={styles.walletsRowLayout}>
            <Grid
              style={{ flex: 1 }}
              renderItem={this._renderItem}
              renderPlaceholder={i => (
                <View
                  style={{ flex: 1, margin: 5, height: responsiveHeight(13.5) }}
                />
              )}
              data={cryptoList}
              numColumns={2}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
