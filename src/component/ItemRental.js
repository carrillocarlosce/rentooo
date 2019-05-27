/**
 * Search Screen
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import StarView from "react-native-star-view";
import { Actions } from "react-native-router-flux";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

export default class ItemRental extends Component {
  render() {
    const { data } = this.props;

    return (
      <View style={styles.interestImageContainer}>
        <TouchableOpacity
          style={styles.itemIterestBtnContainer}
          onPress={() => Actions.ItemDetails({ data: data })}
        >
          <Image style={styles.itemImage} source={{ uri: data.pictures[0] }} />
          <Image
            style={styles.heartIcon}
            source={require("../../assets/images/heart.png")}
          />
          <Text style={styles.itemText}>{data.title}</Text>
          <View style={styles.currencyWrapper}>
            <Text style={styles.currencyText}>
              {data.dailyDollarPrice}$/day
            </Text>
            <View style={styles.currencyContainer}>
              {data["currencies"].map((item, index) => {
                return (
                  <View style={styles.itemCurrency}>
                    <Image
                      key={index}
                      style={styles.currency}
                      resizeMode="contain"
                      source={require("../../assets/coins/bitcoin.png")}
                    />
                  </View>
                );
              })}
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.starLayout}>
          <StarView score={4} style={styles.starView} />
          <Text style={styles.starText}>13</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  interestImageContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: 5
  },
  itemIterestBtnContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  itemImage: {
    width: responsiveWidth(43),
    height: responsiveWidth(30),
    borderRadius: 5,
    overflow: "hidden"
  },
  heartIcon: {
    position: "absolute",
    right: responsiveHeight(1),
    top: responsiveHeight(1),
    height: responsiveWidth(5),
    width: responsiveWidth(5)
  },
  itemText: {
    marginTop: responsiveHeight(1),
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(1.8)
  },
  currencyText: {
    marginTop: 5,
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(1.5),
    color: "#767676"
  },
  currencyWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch"
  },
  currencyContainer: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  itemCurrency: {
    backgroundColor: "blue",
    height: responsiveWidth(3),
    width: responsiveWidth(3),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 120,
    marginLeft: responsiveWidth(0.5)
  },
  currency: {
    width: "50%",
    height: "50%"
  },
  starLayout: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    alignItems: "center"
  },
  starText: {
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(1.5),
    marginLeft: 5,
    color: "#FFC08A"
  },
  starView: {
    width: 50,
    height: 10
  }
});
