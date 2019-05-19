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
    paddingHorizontal: responsiveWidth(5)
  },
  itemCrypto: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%"
  },
  cryptoLogoContainer: {
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    borderRadius: 200,
    marginRight: 20
  },
  cryptoText: {
    fontSize: responsiveFontSize(2.4)
  },
  separatorLine: {
    alignSelf: "flex-end",
    width: "80%",
    height: 1,
    backgroundColor: "#F5F5FD",
    marginVertical: responsiveHeight(2)
  }
});

module.exports = styles;
