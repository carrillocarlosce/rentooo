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
  ScrollView,
  YellowBox
} from "react-native";
import { Actions } from "react-native-router-flux";
import StarView from "react-native-star-view";
import Grid from "react-native-grid-component";
import firebase from "react-native-firebase";

import styles from "../style/profileStyle";
import ItemRental from "../component/ItemRental";

YellowBox.ignoreWarnings(["Warning: ReactNative.createElement"]);

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

    console.disableYellowBox = true;

    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.upperContainer}>
          <Image
            style={styles.profilePicture}
            resizeMode="contain"
            source={require("../../assets/images/Oval.png")}
          />

          <TouchableOpacity onPress={() => Actions.reset("Login")}>
            <Text style={styles.name}>{userName}</Text>
          </TouchableOpacity>

          <View style={styles.location}>
            <Image
              resizeMode="contain"
              style={styles.locationPicto}
              source={require("../../assets/images/location.png")}
            />
            <Text style={styles.locationText}>Paris, France</Text>
          </View>

          <Text style={styles.profileContent}>
            Lorm ipsum dolor sit amet, consectetur adipis{"\n"}
            elit. Fusce vestibulum dapibus tempus. Aliquam{"\n"}
            dapibus sit amet neque eget volutpat
          </Text>
        </View>

        <TouchableOpacity
          style={styles.btnPostOffer}
          onPress={() => Actions.NewOfferTitle()}
        >
          <Image
            resizeMode="contain"
            style={styles.plusIcon}
            source={require("../../assets/images/plusWhite.png")}
          />
          <Text style={styles.textBtnPostOffer}>Post an offer</Text>
        </TouchableOpacity>

        <View style={styles.borderline} />

        <Text style={styles.rental}>My offers</Text>

        <View style={styles.interestInsideContainer}>
          <Grid
            style={{ marginHorizontal: -10 }}
            renderItem={this._renderItem}
            data={userRentals}
            numColumns={2}
          />
        </View>
      </ScrollView>
    );
  }
}
