/**
 * Watchlist Tab Component Screen
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
import {
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";
import Grid from "react-native-grid-component";

import styles from "../style/watchlistStyle";
import ItemRental from "../component/ItemRental";

export default class Watchlist extends Component {
  constructor(props) {
    super(props);
  }

  _renderItem = (data, i) => <ItemRental data={data} />;

  render() {
    const { data } = this.props;

    return (
      <ScrollView style={styles.container}>
        <Grid
          style={{ marginHorizontal: -5 }}
          renderItem={this._renderItem}
          data={data}
          numColumns={2}
        />
      </ScrollView>
    );
  }
}
