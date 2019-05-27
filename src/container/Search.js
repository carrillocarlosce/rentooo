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
  ScrollView,
  SafeAreaView
} from "react-native";
import { Actions } from "react-native-router-flux";
import { SearchBar } from "react-native-elements";
import {
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";
import Grid from "react-native-grid-component";
import firebase from "react-native-firebase";
import StarView from "react-native-star-view";

import styles from "../style/searchStyle";
import Rect from "../component/Rect";
import { Searchbar } from "../component/react-native-paper";
import ItemRental from "../component/ItemRental";

import categories from "../data/categories";
import cryptoList from "../data/cryptoList";

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

  getCorrespondingLogo(crypto) {
    cryptoList.map((item, key) => {
      if (crypto == item.name) {
        console.log(item.logo);
        return item.logo;
      }
    });
  }

  _renderItem = (data, i) => <ItemRental data={data} />;

  render() {
    const { firstQuery, rentals } = this.state;

    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <SafeAreaView style={styles.container}>
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
                    resizeMode="contain"
                    style={styles.itemGroupImage}
                    source={itemCategory.logo}
                  />
                  <Text style={styles.itemGroupText}>
                    {itemCategory.title.charAt(0).toUpperCase() +
                      itemCategory.title.slice(1)}
                  </Text>
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
        </SafeAreaView>
      </ScrollView>
    );
  }
}
