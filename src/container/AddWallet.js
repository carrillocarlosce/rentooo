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
import StarView from "../component/Startview";

const cryptoList = [
  {
    name: "Euro",
    logo: require("../../assets/coins/euro.png"),
    color: "#30A4E8",
    isSelected: false
  },
  {
    name: "Dollar",
    logo: require("../../assets/coins/dollar.png"),
    color: "#17A370",
    isSelected: false
  },
  {
    name: "Rentoo",
    logo: require("../../assets/coins/rentoo.png"),
    color: "#226BFB",
    isSelected: false
  },
  {
    name: "Bitcoin",
    logo: require("../../assets/coins/bitcoin.png"),
    color: "#F5922F",
    isSelected: false
  },
  {
    name: "Litecoin",
    logo: require("../../assets/coins/litecoin.png"),
    color: "#638EA9",
    isSelected: false
  },
  {
    name: "Binance",
    logo: require("../../assets/coins/binance.png"),
    color: "#D79E28",
    isSelected: false
  }
];

export default class AddWallet extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {cryptoList.map(cryptoItem => {
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
