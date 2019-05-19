import { StyleSheet, Dimensions } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#ffffff", 
    position: "relative"
  },
  closeBtn: {
    position: "absolute", 
    left: 20, 
    top: 52, 
    zIndex: 999
  },
  closeImage: {
    resizeMode: 'contain',
    width: 48,
    height: 48,
  },
  bottomContainer: {
    position: "absolute", 
    width: "100%", 
    height: "39.16%", 
    backgroundColor: "white", 
    left: 0, 
    top: "60.84%"
  },
  titleContainer: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    paddingHorizontal: "5.33%", 
    marginTop: 16
  },
  leftText: {
    fontFamily: "TruenoSBd", 
    fontSize: 20
  },
  rightBtn: {
    width: 64, 
    height: 32, 
    backgroundColor: "#A3A3BD", 
    borderRadius: 5, 
    justifyContent: "center", 
    alignItems: "center"
  },
  rightText: {
    fontFamily: "SFProText-Semibold", 
    fontSize: 13,
    color: "white"
  },
  
  interestImageContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: responsiveWidth(43.2),
    // height: responsiveHeight(30),
    marginHorizontal: 10
  },
  itemIterestBtnContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  heartIcon: {
    position: "absolute",
    right: responsiveHeight(1),
    top: responsiveHeight(1),
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
    alignSelf: "stretch",
  },
  currencyContainer: {
    width: responsiveWidth(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
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
    alignItems: "center",
  },
  itemImage: {
    width: 162,
    height: 122,
  },
});

  module.exports = styles;
