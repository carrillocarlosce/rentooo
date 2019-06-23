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
import styles from "../style/addWalletStyle";
import {
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";
import firebase from "react-native-firebase";

import cryptoList from "../data/cryptoList";

export default class AddWallet extends Component {
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
        let wallet = Object.keys(walletSnapshot.val());
        let filteredCryptoList = [];

        cryptoList.map(cryptoItem => {
          if (!wallet.includes(cryptoItem.name)) {
            filteredCryptoList.push(cryptoItem);
          }
        });

        this.setState({
          wallet: wallet,
          filteredCryptoList: filteredCryptoList
        });
      });
  }

  render() {
    const { wallet, filteredCryptoList } = this.state;

    return (
      <ScrollView style={styles.container}>
        {filteredCryptoList.map(cryptoItem => {
          return (
            <View>
              <View style={styles.itemCrypto}>
                <View style={styles.titleCryptoContainer}>
                  <View
                    style={[
                      styles.cryptoLogoContainer,
                      { backgroundColor: cryptoItem.color }
                    ]}
                  >
                    <Image
                      resizeMode="contain"
                      style={styles.cryptoLogo}
                      source={cryptoItem.logo}
                    />
                  </View>
                  <Text style={styles.cryptoText}>{cryptoItem.name}</Text>
                </View>
                <Image
                  resizeMode="contain"
                  style={styles.isCheckedCrypto}
                  source={require("../../assets/UI/checked.png")}
                />
              </View>
              <View style={styles.separatorLine} />
            </View>
          );
        })}
      </ScrollView>
    );
  }
}
