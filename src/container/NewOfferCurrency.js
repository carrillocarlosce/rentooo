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
  responsiveHeight
} from "react-native-responsive-dimensions";
import Switch from "react-native-switch-pro";

import styles from "../style/newOfferStyle";
import cryptoList from "../data/cryptoList";

export default class NewOfferCurrency extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cryptos: cryptoList
    };
  }

  switchOnCrypto(value, cryptoItem) {
    const { cryptos } = this.state;

    cryptos.map(item => {
      item == cryptoItem ? (item.isSelected = true) : (item.isSelected = false);
    });
    this.setState({ cryptos });

    console.log(cryptos);
  }

  nextStep() {
    const { newRentalItem } = this.props;
    const { cryptos } = this.state;

    Actions.NewOfferMeeting({ newRentalItem: newRentalItem });
  }

  render() {
    const { cryptos } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>Currency</Text>
          <Text style={styles.pageInstructions}>
            Set the currencies accepted for the rental of your offer.
          </Text>
        </View>

        {cryptos.map((cryptoItem, key) => {
          return (
            <TouchableOpacity
              key={key}
              onPress={() => this.selectCategory(cryptoItem)}
            >
              <View style={styles.itemCrypto}>
                <View style={styles.titleCryptoContainer}>
                  <View
                    style={[
                      styles.categoryLogoContainer,
                      { backgroundColor: cryptoItem.color }
                    ]}
                  >
                    <Image
                      resizeMode="contain"
                      style={styles.categoryLogo}
                      source={cryptoItem.logo}
                    />
                  </View>
                  <Text style={styles.categoryText}>
                    {cryptoItem.name.charAt(0).toUpperCase() +
                      cryptoItem.name.slice(1)}
                  </Text>
                </View>
                <Switch
                  width={50}
                  height={30}
                  style={{ paddingHorizontal: 2 }}
                  circleStyle={{ height: 25, width: 25 }}
                  backgroundInactive="#A3A3BD"
                  backgroundActive="#0055FF"
                  onSyncPress={value => {
                    this.switchOnCrypto(value, cryptoItem);
                  }}
                />
              </View>
              <View style={styles.categoriesSeparatorLine} />
            </TouchableOpacity>
          );
        })}

        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => this.nextStep()}
        >
          <Text style={styles.textBtnNext}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
