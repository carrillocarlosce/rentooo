/**
 * Search Screen
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
import styles from "../style/searchStyle";
import { SearchBar } from "react-native-elements";
import {
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";
import Grid from "react-native-grid-component";
import firebase from "react-native-firebase";

import StarView from "react-native-star-view";
import Rect from "../component/Rect";
import { Searchbar } from "../component/react-native-paper";

import categories from "../data/categories";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      firstQuery: "",
      rentals: []
    };
  }

  componentWillMount() {
    this.getRentals();
  }

  getRentals() {
    firebase
      .database()
      .ref("rentals/")
      .on("value", rentalsSnapshot => {
        let rentals = [];
        let i = 0;

        rentalsSnapshot.forEach(function(childSnapshot) {
          var item = childSnapshot.val();
          item.key = i++;

          rentals.push(item);
        });

        this.setState({ rentals });
      });
  }

  _renderItem = (data, i) => (
    <View style={styles.interestImageContainer}>
      <TouchableOpacity
        style={styles.itemIterestBtnContainer}
        onPress={() => Actions.ItemDetails()}
      >
        <Image
          style={styles.itemImage}
          source={require("../../assets/images/canon-camera.png")}
        />
        <Image
          style={styles.heartIcon}
          source={require("../../assets/images/heart.png")}
        />
        <Text style={styles.itemText}>{data.title}</Text>
        <View style={styles.currencyWrapper}>
          <Text style={styles.currencyText}>{data.dailyDollarPrice}$/day</Text>
          <View style={styles.currencyContainer}>
            <Image
              style={styles.currency}
              resizeMode="contain"
              source={require("../../assets/images/rentoo.png")}
            />
            <Image
              style={styles.currency}
              resizeMode="contain"
              source={require("../../assets/images/bitcoin.png")}
            />
            <Image
              style={styles.currency}
              resizeMode="contain"
              source={require("../../assets/images/waves.png")}
            />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.starLayout}>
        <StarView score={4} style={styles.starView} />
        <Text style={styles.starText}>13</Text>
      </View>
    </View>
  );

  render() {
    const { firstQuery, rentals } = this.state;

    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <View style={styles.container}>
          <Searchbar
            style={styles.searchBar}
            placeholder="Search"
            onChangeText={query => {
              this.setState({ firstQuery: query });
            }}
            value={firstQuery}
            onSubmitEditing={() => Actions.Searchresult()}
          />

          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnFiltersLayout}>
              <Text style={styles.btnFilterText}>Nearby</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnFiltersLayout}>
              <Text style={styles.btnFilterText}>Dates</Text>
            </TouchableOpacity>
          </View>

          <View
            style={[styles.interestHeader, { marginTop: responsiveHeight(4) }]}
          >
            <Text style={styles.text1IterestHeader}>Categories</Text>
          </View>

          <ScrollView
            style={styles.categoriesContainer}
            showsHorizontalScrollIndicator={false}
            horizontal
          >
            {categories.map((itemCategory, key) => {
              return (
                <TouchableOpacity
                  key={key}
                  style={[
                    styles.btnGroupLayout,
                    { backgroundColor: itemCategory.color }
                  ]}
                >
                  <Image
                    style={styles.itemGroupImage}
                    source={itemCategory.logo}
                  />
                  <Text style={styles.itemGroupText}>{itemCategory.title}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <View style={styles.interestContainer}>
            <View style={styles.interestHeader}>
              <Text style={styles.text1IterestHeader}>
                It might interest you
              </Text>
              <TouchableOpacity>
                <Text style={styles.text2IterestHeader}>Show all</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.interestInsideContainer}>
              <Grid
                style={{ marginHorizontal: -5 }}
                renderItem={this._renderItem}
                data={rentals}
                numColumns={2}
              />
            </View>
          </View>

          <View style={styles.interestContainer}>
            <View style={styles.interestHeader}>
              <Text style={styles.text1IterestHeader}>Popular on Rentoo</Text>
              <TouchableOpacity>
                <Text style={styles.text2IterestHeader}>Show all</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.interestInsideContainer}>
              <Grid
                style={{ marginHorizontal: -5 }}
                renderItem={this._renderItem}
                data={rentals}
                numColumns={2}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
