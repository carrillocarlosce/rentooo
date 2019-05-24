import { StyleSheet, Dimensions } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: responsiveWidth(5.33)
  },
  walletsText: {
    fontFamily: "TruenoSBd",
    fontSize: responsiveFontSize(3),
    marginBottom: responsiveHeight(3.94)
  },
  walletItemLayout: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    margin: 5,
    alignItems: "flex-start",
    height: responsiveHeight(13.5),
    padding: responsiveWidth(3),
    borderRadius: 5
  },
  itemCrypto: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 500,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  coinText: {
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(1.8),
    color: "black"
  },
  priceText: {
    fontFamily: "SFProText-Semibold",
    color: "white",
    fontSize: responsiveFontSize(2.3)
  }
});

module.exports = styles;
