import { StyleSheet, Dimensions } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
  tabBarIcon: {
    height: responsiveWidth(5),
    width: responsiveWidth(7)
  },
  plusBtn: {
    marginRight: 20,
    width: 20,
    height: 20,
    resizeMode: "contain"
  },
  leftBtn: {
    marginLeft: 20,
    width: responsiveWidth(6),
    height: responsiveWidth(6),
    resizeMode: "contain"
  },
  rightSignupBtn: {
    marginRight: 20,
    fontFamily: "SFProText-Regular",
    fontSize: 15,
    color: "#666666"
  }
});

module.exports = styles;
