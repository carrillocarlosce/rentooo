/**
 * Item Details Screen
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
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import StarView from "react-native-star-view";
import firebase from "react-native-firebase";
import Grid from "react-native-grid-component";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import LinearGradient from "react-native-linear-gradient";

import ItemRental from "../component/ItemRental";
import Slideshow from "../component/Slideshow";

import styles from "../style/itemdetailsStyle";

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 1,
      interval: null,
      dataSource: [],
      ownerName: "",
      rentalsYouMayLike: []
    };
  }

  componentWillMount() {
    const { data } = this.props;
    const { dataSource } = this.state;

    data["pictures"].map((item, index) => {
      dataSource.push({ url: item });
    });

    this.setState({ dataSource });

    this.getOwnerData();
  }

  getOwnerData() {
    const { data } = this.props;

    firebase
      .database()
      .ref("users/")
      .orderByChild("userID")
      .equalTo(data.owner)
      .on("value", ownerProfile => {
        let ownerData = [];
        let i = 0;

        ownerProfile.forEach(function(childSnapshot) {
          var item = childSnapshot.val();
          item.key = i++;

          ownerData.push(item);
        });

        let ownerName = ownerData[0].firstname + " " + ownerData[0].lastname;

        this.setState({ ownerName });
      });
  }

  componentDidMount() {
    this.getRentalsYouMayLike();
  }

  getRentalsYouMayLike() {
    const { data } = this.props;

    firebase
      .database()
      .ref("rentals/")
      .orderByChild("category")
      .equalTo(data.category)
      .on("value", rentalsSnapshot => {
        let rentalsYouMayLike = [];
        let i = 0;

        rentalsSnapshot.forEach(function(childSnapshot) {
          var item = childSnapshot.val();
          item.key = i++;

          rentalsYouMayLike.push(item);
        });

        this.setState({
          rentalsYouMayLike: rentalsYouMayLike.reverse().slice(0, 4)
        });
      });
  }

  _renderItem = (data, i) => <ItemRental data={data} />;

  render() {
    const { data } = this.props;
    const { ownerName, rentalsYouMayLike } = this.state;

    const currentUser = window.currentUser["userID"];

    return (
      <View style={styles.container}>
        <View style={styles.navContainer}>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Image
              style={styles.leftNavBtn}
              source={require("../../assets/images/left.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.rightNavBtn}
              resizeMode={"contain"}
              source={require("../../assets/images/redheart3x.png")}
            />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scrollViewContainer}>
          <Slideshow
            style={styles.slideshow}
            dataSource={this.state.dataSource}
            position={this.state.position}
            onPositionChanged={position => this.setState({ position })}
          />

          <View
            style={{
              paddingHorizontal: responsiveWidth(5.33),
              marginBottom: responsiveHeight(10)
            }}
          >
            <Text style={styles.categoryText}>
              {data.category.charAt(0).toUpperCase() + data.category.slice(1)}
            </Text>
            <Text style={styles.title}>{data.title}</Text>

            <View style={styles.descriptionContainer}>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.descriptionContent}>{data.summary}</Text>
              </View>
            </View>

            <View style={styles.lineSeparator} />

            <View style={styles.reviewsContainer}>
              <View style={styles.starContainer}>
                <Text style={[styles.itemText, { color: "#FDC058" }]}>4.1</Text>
                <StarView score={4} style={styles.starItem} />
              </View>
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>92</Text>
                <Text style={styles.subItemText}>Reviews</Text>
              </View>
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>23</Text>
                <Text style={styles.subItemText}>Rentals</Text>
              </View>
            </View>

            <View style={styles.lineSeparator} />

            <View style={styles.ownerContainer}>
              <Image
                resizeMode="contain"
                style={styles.ownerImage}
                source={require("../../assets/images/profile.png")}
              />
              <View>
                <Text style={styles.ownerTextTitle}>Owner</Text>
                <Text style={styles.ownerText}>{ownerName}</Text>
              </View>
            </View>

            <View style={styles.lineSeparator} />

            <View style={styles.mapViewContainer}>
              <Text style={styles.mapViewText}>Location</Text>
              <LinearGradient
                style={styles.mapView}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#4c669f", "transparent", "#192f6a"]}
              >
                <MapView
                  provider={PROVIDER_GOOGLE}
                  region={{
                    latitude: 42.882004,
                    longitude: 74.582748,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                  }}
                  showsUserLocation={true}
                />
              </LinearGradient>
            </View>

            <View style={styles.lineSeparator} />

            <View>
              <Text style={styles.interestText}>It might interest you</Text>
              <View style={styles.interestInsideContainer}>
                <Grid
                  style={{ marginHorizontal: -5 }}
                  renderItem={this._renderItem}
                  data={rentalsYouMayLike}
                  numColumns={2}
                />
              </View>
            </View>
          </View>

          <View style={{ height: responsiveHeight(5) }} />
        </ScrollView>

        <View style={styles.bottomAbContainer}>
          <View>
            <Text style={styles.rentDayText}>
              {data.dailyDollarPrice}$ /day
            </Text>
            <View style={styles.currencyContainer}>
              {data.currencies.map((item, key) => {
                return (
                  <View style={styles.itemCurrency}>
                    <Image
                      key={key}
                      style={styles.currency}
                      resizeMode="contain"
                      source={require("../../assets/coins/bitcoin.png")}
                    />
                  </View>
                );
              })}
            </View>
          </View>

          {data.owner !== currentUser && (
            <TouchableOpacity
              onPress={() => Actions.RentItemDates({ itemRental: data })}
              style={styles.rentBtn}
            >
              <Text style={styles.rentText}>Rent now</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}
