/**
 * Profile Screen
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
import { Actions } from "react-native-router-flux";
import StarView from "react-native-star-view";
import Grid from "react-native-grid-component";
import firebase from "react-native-firebase";

import styles from "../style/profileStyle";
import ItemRental from "../component/ItemRental";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userRentals: []
    };
  }

  componentDidMount() {
    this.getUserRentals();
  }

  getUserRentals() {
    let userRentals = window.currentUser["userRentals"];

    firebase
      .database()
      .ref("rentals/")
      .orderByChild("owner")
      .equalTo(window.currentUser["userID"])
      .on("value", rentalsSnapshot => {
        let userRentals = [];

        rentalsSnapshot.forEach(function(childSnapshot) {
          var item = childSnapshot.val();
          item.key = childSnapshot.key;

          userRentals.push(item);
        });

        this.setState({ userRentals: userRentals.reverse() });
      });
  }

  getUserRentals;

  _renderItem = (data, i) => <ItemRental data={data} />;

  render() {
    const userName =
      window.currentUser["firstname"] + " " + window.currentUser["lastname"];

    const { userRentals } = this.state;

    return (
      <View style={styles.container} showsVerticalScrollIndicator={false}>
        
      </View>
    );
  }
}
