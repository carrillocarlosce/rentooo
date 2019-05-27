import { StyleSheet, Dimensions } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
  tabContainer: {
    marginHorizontal: responsiveWidth(5.33),
    zIndex: 999
  },
  nameText: {
    marginLeft: responsiveWidth(5.33),
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(3.2)
  },
  scene: {
    flex: 1
  }
});

module.exports = styles;
