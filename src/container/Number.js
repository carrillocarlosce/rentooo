/**
 * Number Screen
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import styles from "../style/numberStyle";

export default class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: ""
    };
  }

  nextSignupStep() {
    const { email, password, firstName, lastName } = this.props;
    const { number } = this.state;

    Actions.Code({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      number: number
    });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <View style={styles.container}>
          <Text style={styles.numberText}>What's your number ?</Text>
          <Text style={styles.codeText}>
            We will text you a code to verify your account.
          </Text>

          <View style={styles.formLayout}>
            <TextInput
              style={styles.formItem}
              placeholder="Phone number"
              placeholderTextColor="#979797"
              value={this.state.number}
              onChangeText={number => this.setState({ number })}
            />
          </View>
          <View>
            <TouchableOpacity
              style={styles.btnNextLayout}
              onPress={() => this.nextSignupStep()}
            >
              <Text style={styles.btnNextText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
