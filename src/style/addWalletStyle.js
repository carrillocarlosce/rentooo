import { StyleSheet, Dimensions } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    position: "relative",
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(3)
  },
  itemCrypto: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  titleCryptoContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  cryptoLogoContainer: {
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    borderRadius: 200,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  cryptoLogo: {
    height: "50%",
    width: "50%"
  },
  cryptoText: {
    fontSize: responsiveFontSize(2.4)
  },
  isCheckedCrypto: { height: responsiveWidth(7), width: responsiveWidth(7) },
  separatorLine: {
    alignSelf: "flex-end",
    width: "80%",
    height: 1,
    backgroundColor: "#F5F5FD",
    marginVertical: responsiveHeight(2)
  }
});

module.exports = styles;
