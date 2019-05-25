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

import styles from "../style/newOfferStyle";

export default class NewOfferPhotos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      summary: ""
    };
  }

  nextStep() {
    const { newRentalItem } = this.props;
    console.log(newRentalItem);
    Actions.NewOfferCategories({ newRentalItem: newRentalItem });
  }

  render() {
    const { title, summary } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>Add photos</Text>
          <Text style={styles.pageInstructions}>
            Highlight your offer with one, two or three photos.
          </Text>
        </View>

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
