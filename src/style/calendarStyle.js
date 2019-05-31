import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

export default (calendarTheme = {
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
    fontSize: responsiveFontSize(1.5)
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
});
