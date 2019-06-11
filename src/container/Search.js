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
  SafeAreaView,
  YellowBox
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

        rentalsSnapshot.forEach(function(childSnapshot) {
          var item = childSnapshot.val();
          item.key = childSnapshot.key;

          rentals.push(item);
        });

        this.setState({ rentals: rentals.reverse().slice(0, 4) });
      });
  }

  _renderItem = (data, i) => <ItemRental data={data} />;

  render() {
    const { firstQuery, rentals } = this.state;
    console.disableYellowBox = true;

    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <SafeAreaView
          style={{
            flex: 1,
            zIndex: 100,
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(255,255,255,0.95)",
            paddingHorizontal: responsiveWidth(5.33)
          }}
        >
          <Searchbar
            style={styles.searchBar}
            inputStyle={styles.searchBarInput}
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
        </SafeAreaView>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}
        >
          <View
            style={[styles.interestHeader, { marginTop: responsiveHeight(25) }]}
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
                  onPress={() =>
                    Actions.CategoryPage({ category: itemCategory.title })
                  }
                  style={[
                    styles.btnGroupLayout,
                    { backgroundColor: itemCategory.color }
                  ]}
                >
                  <Image
                    resizeMode="contain"
                    style={styles.categoryItem}
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
                Trending
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
              <Text style={styles.text1IterestHeader}>It might interest you</Text>
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
        </ScrollView>
      </View>
    );
  }
}
