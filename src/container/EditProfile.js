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

import styles from "../style/editProfileStyle";
import ItemRental from "../component/ItemRental";
import { responsiveWidth } from "react-native-responsive-dimensions";

export default class EditProfile extends Component {
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
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <Image
            style={styles.profilePicture}
            resizeMode="contain"
            source={require("../../assets/images/Oval.png")}
          />
          <Text style={styles.editBtn}>Edit</Text>
        </View>

        <View>
          <View style={{flexDirection: "column", justifyContent: "space-between", alignSelf: "center", width: responsiveWidth(80)}}>
            <Text>First Name</Text>
            <Text>Anje</Text>
            <View style={styles.borderline} />
          </View>
          <View style={{flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
            <Text>Last Name</Text>
            <Text>Keizer</Text>
            <View style={styles.borderline} />
          </View>
          <View style={{flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
              <Text>Location</Text>
              <Image
                style={styles.leftBtn}
                source={require("../../assets/images/back3x.png")}
              />
            </View>
            <Text>Location</Text>
            <View style={styles.borderline} />
          </View>
          <View style={{flexDirection: "column", justifyContent: "space-between", alignItems: "center"}}>
            <Text>Bio</Text>
            <Text>Bio</Text>
            <View style={styles.borderline} />
          </View>
        </View>
      </View>
    );
  }
}
