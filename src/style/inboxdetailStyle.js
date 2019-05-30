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
    position: "relative"
  },
  textInputContainer: {
    width: "100%",
    height: responsiveHeight(16.2),
    marginBottom: 50,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingHorizontal: responsiveWidth(4),
    borderTopWidth: 1,
    borderTopColor: "#ECECEC"
  },
  line: {
    height: 2,
    backgroundColor: "#ECECEC"
  },
  textinput: {
    width: responsiveWidth(92),
    height: responsiveHeight(8)
  },
  buttonBottomLayout: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  leftbtn: {
    flexDirection: "row",
    width: responsiveWidth(15),
    justifyContent: "space-between",
    alignItems: "center"
  },
  optionChat: {
    height: responsiveHeight(5),
    width: responsiveWidth(5)
  },
  sendBtnText: {
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(2.2),
    color: "#0055FF"
  }
});

module.exports = styles;
