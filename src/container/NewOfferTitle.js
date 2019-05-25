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

export default class NewOfferTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      summary: ""
    };
  }

  nextStep() {
    const { title, summary } = this.state;
    const newRentalItem = { title: title, summary: summary };
    Actions.NewOfferPhotos({ newRentalItem: newRentalItem });
  }

  render() {
    const { title, summary } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>New offer</Text>
          <Text style={styles.pageInstructions}>
            Write a title and a summary.
          </Text>
        </View>

        <View style={styles.headerInput}>
          <Text style={styles.headerInputTitle}>Title</Text>
          <Text>{40 - title.length}</Text>
        </View>

        <TextInput
          placeholder="Title"
          value={title}
          onChangeText={title => this.setState({ title })}
          maxLength={40}
        />

        <View style={styles.separatorLine} />

        <View style={styles.headerInput}>
          <Text style={styles.headerInputTitle}>Summary</Text>
          <Text>{400 - summary.length}</Text>
        </View>

        <TextInput
          placeholder="Summary"
          value={summary}
          onChangeText={summary => this.setState({ summary })}
          maxLength={400}
          multiline={true}
          numberOfLines={4}
        />

        <View style={styles.separatorLine} />

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