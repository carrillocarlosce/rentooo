/**
 * Yourbalance Screen
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import Calendar from "react-native-calendario";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize
} from "react-native-responsive-dimensions";

import styles from "../style/newOfferStyle";

const calendarTheme = {
  activeDayColor: {},
  monthTitleTextStyle: {
    textAlign: "left",
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(2.5)
  },
  emptyMonthContainerStyle: {},
  emptyMonthTextStyle: {
    fontWeight: "200"
  },
  weekColumnsContainerStyle: {},
  weekColumnStyle: {
    paddingVertical: 10
  },
  weekColumnTextStyle: {
    color: "rgba(0,0,0,0.3)",
    fontSize: 13
  },
  nonTouchableDayContainerStyle: {},
  nonTouchableDayTextStyle: {},
  startDateContainerStyle: {},
  endDateContainerStyle: {},
  dayContainerStyle: {},
  dayTextStyle: {
    fontFamily: "SFProText-Regular",
    color: "#A3A3BD",
    fontSize: 15
  },
  dayOutOfRangeContainerStyle: {},
  dayOutOfRangeTextStyle: {},
  todayContainerStyle: {},
  todayTextStyle: {
    color: "#6d95da"
  },
  activeDayContainerStyle: {
    backgroundColor: "#0055FF"
  },
  activeDayTextStyle: {
    color: "white"
  },
  nonTouchableLastMonthDayTextStyle: {}
};

export default class NewOfferAvailability extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      summary: ""
    };
  }

  nextStep() {
    const { newRentalItem } = this.props;

    Actions.NewOfferPrice({ newRentalItem: newRentalItem });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>Availability</Text>
          <Text style={styles.pageInstructions}>
            Select dates to block or unblock.
          </Text>
        </View>

        <Calendar
          onChange={range => console.log(range)}
          minDate="2018-04-20"
          startDate="2018-04-30"
          endDate="2018-05-05"
          style={{ flex: 1 }}
          numberOfMonths={5}
          monthHeight={responsiveHeight(43)}
          theme={calendarTheme}
        />

        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => this.nextStep()}
        >
          <Text style={styles.textBtnNext}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
