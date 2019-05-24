/**
 * Code Screen
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import auth from "@react-native-firebase/auth";

import styles from "../style/codeStyle";

export default class Code extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ""
    };
  }

  async createAccount() {
    const { email, password } = this.props;

    try {
      await auth().createUserWithEmailAndPassword(email, password);
      Actions.dashboardContainerScreen();
    } catch (e) {
      console.error(e.message);
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <View style={styles.container}>
          <Text style={styles.codeText}>Verify Code</Text>
          <Text style={styles.recieveText}>
            You're receiving a text on the number you just entered with a
            verification code.
          </Text>

          <View style={styles.formLayout}>
            <TextInput
              style={styles.formItem}
              placeholder="Code"
              placeholderTextColor="#979797"
              value={this.state.code}
              onChangeText={code => this.setState({ code })}
            />
            <TouchableOpacity style={styles.resendTextBtn}>
              <Text style={styles.resendText}>Resend code</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.btnVerifyLayout}
              onPress={() => this.createAccount()}
            >
              <Text style={styles.btnVerifyText}>Verify</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
