import { StyleSheet, Dimensions } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    position: "relative"
  },
  navContainer: {
    zIndex: 300,
    position: "absolute",
    left: 0,
    top: 0,
    paddingHorizontal: responsiveWidth(5.33),
    marginTop: responsiveHeight(6.4),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",

    width: responsiveWidth(100),
    height: responsiveHeight(3)
  },
  leftNavBtn: {
    width: responsiveWidth(5),
    height: responsiveWidth(5),
    resizeMode: "contain"
  },
  rightNavBtn: {
    width: responsiveWidth(5),
    height: responsiveWidth(5),
    overflow: "hidden",
    resizeMode: "contain"
  },
  slideshow: {
    height: "50%",
    width: "50%",
    marginHorizontal: -80
  },
  categoryText: {
    marginTop: responsiveHeight(3),
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(2.3),
    color: "#0055FF"
  },
  title: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(4.2)
  },
  starText: {
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(2.3),
    color: "#FDC058"
  },
  starItem: {
    width: 84,
    height: 14,
    marginTop: 4
  },
  itemText: {
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(2)
  },
  subItemText: {
    marginTop: 4,
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(2),
    color: "#C0C0C0"
  },
  starContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: responsiveWidth(21.86)
  },
  itemContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: responsiveWidth(16.5)
  },
  threeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: responsiveHeight(2)
  },
  scrollViewContainer: {
    height: responsiveHeight(51.5)
  },
  lineSeparator: {
    marginTop: 24,
    height: 1,
    backgroundColor: "rgba(0,0,0,0.05)",
    marginHorizontal: responsiveWidth(-5.33)
  },
  descriptionContainer: {
    marginTop: 24
  },
  descriptionContent: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(1.8)
  },
  bottomAbContainer: {
    position: "absolute",
    left: 0,
    bottom: 0,
    backgroundColor: "#F5F5FD",
    flexDirection: "row",
    paddingHorizontal: responsiveWidth(5.33),
    paddingTop: responsiveHeight(2),
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: responsiveHeight(13),
    width: "100%",
    borderTopColor: "rgba(0,0,0,0.05)",
    borderTopWidth: 1
  },
  rentBtn: {
    width: responsiveWidth(37),
    height: responsiveHeight(5.66),
    backgroundColor: "#0055FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  rentText: {
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(2.3),
    color: "white"
  },
  rentDayText: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(2.5)
  },
  mapViewContainer: {
    marginTop: responsiveHeight(3)
  },
  mapViewText: {
    fontFamily: "SFProText-Regular",
    fontSize: 20
  },
  mapView: {
    marginTop: 16,
    height: responsiveHeight(28),
    marginHorizontal: responsiveWidth(-5.33)
  },
  ownerContainer: {
    flexDirection: "row",
    marginTop: responsiveHeight(4),
    justifyContent: "flex-start",
    alignItems: "center"
  },
  ownerImage: {
    height: responsiveWidth(12),
    width: responsiveWidth(12),
    marginRight: responsiveWidth(4)
  },
  ownerTextTitle: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(1.8),
    color: "rgba(0,0,0,0.6)"
  },
  ownerText: {
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(2.2)
  },
  // -----------------------------
  closeBtn: {
    position: "absolute",
    left: 20,
    top: 52,
    zIndex: 999
  },
  closeImage: {
    resizeMode: "contain",
    width: 48,
    height: 48
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
    fontFamily: "SFProText-Regular",
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
    fontFamily: "SFProText-Regular",
    fontSize: 13,
    color: "white"
  },

  interestImageContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: responsiveWidth(43.2)
    // height: responsiveHeight(30),
  },
  itemIterestBtnContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  heartIcon: {
    position: "absolute",
    right: responsiveHeight(1),
    top: responsiveHeight(1)
  },
  itemText: {
    marginTop: responsiveHeight(1),
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(2.4)
  },
  currencyText: {
    marginTop: 5,
    fontFamily: "SFProText-Regular",
    fontSize: 13,
    color: "#767676"
  },
  currencyWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch"
  },
  currencyContainer: {
    width: responsiveWidth(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  itemCurrency: {
    backgroundColor: "#0055FF",
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 120,
    marginRight: responsiveWidth(1),
    marginTop: 5
  },
  currency: {
    width: "50%",
    height: "50%"
  },
  starLayout: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    alignItems: "center"
  },
  starText: {
    fontFamily: "SFProText-Regular",
    fontSize: 13,
    marginLeft: 5,
    color: "#FFC08A"
  },
  starView: {
    width: 50,
    height: 10
  },
  interestRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  itemImage: {
    width: 162,
    height: 122
  },
  interestText: {
    marginTop: 32,
    fontFamily: "SFProText-Regular",
    fontSize: 20
  },
  interestInsideContainer: {
    marginTop: 24
  }
});

module.exports = styles;
