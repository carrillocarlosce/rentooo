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
import Placeholder, { Line, Media, ImageContent } from "rn-placeholder";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

import cryptoList from "../data/cryptoList";

export default class ItemRental extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFullyLoaded: false
    };
  }

  componentDidMount() {
    this.setState({ isFullyLoaded: true });
  }

  getCorrespondingLogo(crypto) {
    cryptoList.map((item, key) => {
      if (crypto == item.name) {
        console.log(item);
        return item.logo;
      }
    });
  }

  render() {
    const { data } = this.props;
    const { isFullyLoaded } = this.state;

    const ComponentLoaded = () => (
      <View style={styles.interestImageContainer}>
        <TouchableOpacity
          style={styles.itemIterestBtnContainer}
          onPress={() => Actions.ItemDetails({ data: data })}
        >
          <Image style={styles.itemImage} source={{ uri: data.pictures[0] }} />
          <Image
            resizeMode="contain"
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

    return (
      <Placeholder
        isReady={isFullyLoaded}
        animation="fade"
        whenReadyRender={() => <ComponentLoaded />}
        style={{ margin: 5 }}
      >
        <Line height={90} width="90%" />
        <Line width="50%" />
        <Line width="70%" style={{ marginBottom: 40 }} />
      </Placeholder>
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
    backgroundColor: "#0055FF",
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
