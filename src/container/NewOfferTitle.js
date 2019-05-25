/**
 * Yourbalance Screen
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Action } from "react-native-router-flux";
import {
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";

import styles from "../style/newOfferStyle";

export default class NewOfferTitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>New offer</Text>
          <Text style={styles.pageInstructions}>
            Write a title and a summary.
          </Text>
        </View>

        <View style={styles.headerInput}>
          <Text>Title</Text>
          <Text>40</Text>
        </View>

        <TextInput placeholder="Title" />

        <View style={styles.separatorLine} />

        <View style={styles.headerInput}>
          <Text>Summary</Text>
          <Text>400</Text>
        </View>

        <TextInput placeholder="Summary" />
      </View>
    );
  }
}
