import { StyleSheet, Dimensions } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: responsiveWidth(5.33),
    marginTop: responsiveHeight(3.94),
  },
  nameText: {
    fontFamily: "TruenoSBd",
    fontSize: responsiveFontSize(3),
  },
  interestImageContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    width: responsiveWidth(43.2),
    height: responsiveHeight(30),
  },
  itemIterestBtnContainer: {
    flexDirection: "column",

  },
  itemText: {
    marginTop: responsiveHeight(1),
    fontFamily: "SFProText-Semibold",
    fontSize: 15,
  },
  currencyText: {
    marginTop: 5,
    fontFamily: "SFProText-Semibold",
    fontSize: 13,
    color: "#767676"
  },
  currencyWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  currencyContainer: {
    width: responsiveWidth(7),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  currency: {
    width: responsiveWidth(3),
    height: responsiveHeight(3),
  },
  starLayout: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    alignItems: "center"
  },
  starText: {
    fontFamily: "SFProText-Semibold",
    fontSize: 13,
    marginLeft: 5, 
    color: "#FFC08A"
  },
  starView: {
    width: 50, 
    height: 10, 
  },
  interestRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  searchbarHeader: {
    height: 1,
    width: responsiveWidth(92),
  },
  itemImage: {
    width: 162,
    height: 122,
  },
  heartIcon: {
    position: "absolute",
    right: responsiveHeight(1),
    top: responsiveHeight(1),
  },
});

  module.exports = styles;
