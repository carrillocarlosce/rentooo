/**
 * Code Screen
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import firebase from "react-native-firebase";

import styles from "../style/codeStyle";

export default class Code extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ""
    };
  }

  async createAccount() {
    const { email, password, firstName, lastName, number } = this.props;

    const createdUser = {
      email: email,
      firstname: firstName,
      lastname: lastName,
      phoneNumber: number
    };

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function() {
        firebase
          .database()
          .ref("users")
          .push(createdUser)
          .then(userData => {
            window.currentUser = createdUser;
            window.currentUser["userID"] = userData.key;
            firebase
              .database()
              .ref("users/" + window.currentUser["userID"])
              .update(window.currentUser);
            Actions.reset("dashboardContainerScreen");
          })
          .catch(err => {
            console.log("error===", err);
          });
      });
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
              keyboardType="numeric"
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
