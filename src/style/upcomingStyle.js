import { StyleSheet, Dimensions } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: responsiveWidth(5.33),
    marginTop: responsiveHeight(3.94),
  },
  itemGroupImage: {
    position: "absolute",
    top: responsiveHeight(1),
    left: responsiveHeight(1)
  },
  itemGroupText: {
    position: "absolute",
    bottom: responsiveHeight(1),
    left: responsiveHeight(1),
    fontFamily: "SFProText-Semibold",
    fontSize: 14,
    color: "#FFFFFF"
  },
  interestImageContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
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
    color: "#0062FF"
  },
  currencyWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  currencyContainer: {
    width: responsiveWidth(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  starLayout: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    alignItems: "center"
  },
  starText: {
    marginTop: responsiveHeight(1),
    fontFamily: "SFProText-Semibold",
    fontSize: 13,
    color: "#828282",
    alignSelf: "flex-start"
    
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
  
});

  module.exports = styles;
