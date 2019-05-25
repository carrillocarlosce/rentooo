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
              style={{ marginHorizontal: -5 }}
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
