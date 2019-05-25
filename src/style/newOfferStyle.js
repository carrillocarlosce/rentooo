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
  pageHeader: {
    marginBottom: responsiveHeight(4)
  },
  pageTitle: {
    fontSize: responsiveFontSize(3.5),
    marginBottom: responsiveHeight(2)
  },
  pageInstructions: {
    fontSize: responsiveFontSize(2.3)
  },
  headerInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: responsiveHeight(2)
  },
  separatorLine: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(0,0,0,0.1)",
    marginVertical: responsiveHeight(4)
  }
});

module.exports = styles;
