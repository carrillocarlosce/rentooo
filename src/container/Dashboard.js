import * as React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions
} from "react-native";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import firebase from "react-native-firebase";
import Grid from "react-native-grid-component";
import moment from "moment";

import ItemRental from "../component/ItemRental";

import styles from "../style/dashboardStyle";

const width = Dimensions.get("window").width;

const itemTab = [
  { title: "Upcoming" },
  { title: "Past" },
  { title: "Watchlist" },
  { title: "My offers" }
];

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 0,
      rentalsUpcoming: [],
      rentalsPast: [],
      rentalsWatchlist: [],
      rentalsMyOffers: []
    };
  }

  componentWillMount() {
    this.getRentals();
  }

  getRentals() {
    const userWatchlist =
      window.currentUser["watchlist"] !== undefined
        ? Object.values(window.currentUser["watchlist"])
        : [];

    firebase
      .database()
      .ref("rentals/")
      .on("value", rentalsSnapshot => {
        let rentals = [];
        let rentalsUpcoming = [];
        let rentalsPast = [];
        let rentalsWatchlist = [];
        let rentalsMyOffers = [];

        rentalsSnapshot.forEach(function(childSnapshot) {
          var item = childSnapshot.val();
          item.key = childSnapshot.key;

          rentals.push(item);
        });

        rentals.map((item, index) => {
          if (userWatchlist.includes(item.key)) {
            rentalsWatchlist.push(item);
          }

          if (item.owner == window.currentUser["userID"]) {
            rentalsMyOffers.push(item);
          }

          if (item["reservations"] !== undefined) {
            let reservations = Object.values(item["reservations"]);

            reservations.forEach(function(itemReservation) {
              if (itemReservation.rentalMaker == window.currentUser["userID"]) {
                let startDate = moment(
                  itemReservation.reservationDates.startDate
                );
                let now = moment(new Date());
                let upcoming = startDate.diff(now, "days") > 0 ? true : false;

                if (upcoming) {
                  rentalsUpcoming.push(item);
                } else {
                  rentalsPast.push(item);
                }
              }
            });
          }
        });

        this.setState({
          rentalsUpcoming: rentalsUpcoming.reverse(),
          rentalsPast: rentalsPast.reverse(),
          rentalsWatchlist: rentalsWatchlist.reverse(),
          rentalsMyOffers: rentalsMyOffers.reverse()
        });
      });
  }

  onTabClicked(flag) {
    const { pageIndex } = this.state;
    if (flag === 0) this.swiper.scrollTo({ x: 0, y: 0, animated: true });
    if (flag === 1) this.swiper.scrollTo({ x: width, y: 0, animated: true });
    if (flag === 2)
      this.swiper.scrollTo({ x: width * 2, y: 0, animated: true });
    if (flag === 3)
      this.swiper.scrollTo({ x: width * 3, y: 0, animated: true });

    this.setState({ pageIndex: flag });
  }

  ref = el => {
    this.swiper = el;
  };

  handlePageChange = e => {
    var offset = e.nativeEvent.contentOffset;
    if (offset) {
      const page = Math.round(offset.x / width);

      if (this.state.pageIndex != page) {
        this.setState({ pageIndex: page });
      }
    }
  };

  _renderItem = (data, i) => <ItemRental data={data} />;

  render() {
    const {
      pageIndex,
      rentalsUpcoming,
      rentalsPast,
      rentalsWatchlist,
      rentalsMyOffers
    } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.nameText}>Rental dashboard</Text>

        <View style={styles.segmentContainer}>
          {itemTab.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{ marginRight: responsiveWidth(5) }}
                onPress={() => this.onTabClicked(index)}
              >
                <View style={styles.segmentItemContainer}>
                  <Text
                    style={[
                      pageIndex === index
                        ? styles.textTabActive
                        : styles.textTabUnactive
                    ]}
                  >
                    {item.title}
                  </Text>
                  <View
                    style={
                      pageIndex === index
                        ? styles.viewUnderlineActive
                        : styles.viewUnderlineInactive
                    }
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <ScrollView
          ref={snapScroll => {
            this.swiper = snapScroll;
          }}
          horizontal
          pagingEnabled
          onMomentumScrollEnd={this.handlePageChange}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.containerItemTab}>
            <Grid
              style={{ marginHorizontal: -5 }}
              renderItem={this._renderItem}
              data={rentalsUpcoming}
              numColumns={2}
            />
          </View>
          <View style={styles.containerItemTab}>
            <Grid
              style={{ marginHorizontal: -5 }}
              renderItem={this._renderItem}
              data={rentalsPast}
              numColumns={2}
            />
          </View>
          <View style={styles.containerItemTab}>
            <Grid
              style={{ marginHorizontal: -5 }}
              renderItem={this._renderItem}
              data={rentalsWatchlist}
              numColumns={2}
            />
          </View>
          <View style={styles.containerItemTab}>
            <Grid
              style={{ marginHorizontal: -5 }}
              renderItem={this._renderItem}
              data={rentalsMyOffers}
              numColumns={2}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
