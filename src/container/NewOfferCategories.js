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

import categories from "../data/categories";
import styles from "../style/newOfferStyle";

export default class NewOfferCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: categories
    };
  }

  selectCategory(category) {
    categories.map(item => {
      item == category ? (item.isSelected = true) : (item.isSelected = false);
    });
    this.setState({ categories });
  }

  render() {
    const { title, summary } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>Category</Text>
          <Text style={styles.pageInstructions}>
            Choose the category corresponding to your rental.
          </Text>
        </View>

        {categories.map(categoryItem => {
          return (
            <TouchableOpacity onPress={() => this.selectCategory(categoryItem)}>
              <View style={styles.itemCrypto}>
                <View style={styles.titleCryptoContainer}>
                  <View
                    style={[
                      styles.categoryLogoContainer,
                      { backgroundColor: categoryItem.color }
                    ]}
                  >
                    <Image
                      resizeMode="contain"
                      style={styles.categoryLogo}
                      source={categoryItem.logo}
                    />
                  </View>
                  <Text style={styles.categoryText}>{categoryItem.title}</Text>
                </View>
                {categoryItem.isSelected ? (
                  <Image
                    resizeMode="contain"
                    style={styles.isCheckedCrypto}
                    source={require("../../assets/UI/radioChecked.png")}
                  />
                ) : (
                  <Image
                    resizeMode="contain"
                    style={styles.isCheckedCrypto}
                    source={require("../../assets/UI/unchecked.png")}
                  />
                )}
              </View>
              <View style={styles.categoriesSeparatorLine} />
            </TouchableOpacity>
          );
        })}

        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => Actions.NewOfferAvailability({ title, summary })}
        >
          <Text style={styles.textBtnNext}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
