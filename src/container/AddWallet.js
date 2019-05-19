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
  { name: "Euro", logo: "eee", color: "#30A4E8", isSelected: false },
  { name: "Dollar", logo: "eee", color: "#17A370", isSelected: false },
  { name: "Rentoo", logo: "eee", color: "#226BFB", isSelected: false },
  { name: "Bitcoin", logo: "eee", color: "#F5922F", isSelected: false },
  { name: "Litecoin", logo: "eee", color: "#638EA9", isSelected: false },
  { name: "Binance", logo: "eee", color: "#D79E28", isSelected: false }
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
                <View
                  style={[
                    styles.cryptoLogoContainer,
                    { backgroundColor: cryptoItem.color }
                  ]}
                />
                <Text style={styles.cryptoText}>{cryptoItem.name}</Text>
              </View>
              <View style={styles.separatorLine} />
            </View>
          );
        })}
      </ScrollView>
    );
  }
}
