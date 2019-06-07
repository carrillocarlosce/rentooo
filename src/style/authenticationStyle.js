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
  inboxText: {
    marginLeft: responsiveWidth(5.33),
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(3.2)
  },
  segmentContainer: {
    height: 40,
    width: "100%",
    marginTop: 10,
    marginBottom: responsiveHeight(4),
    flexDirection: "row",
    backgroundColor: "white",
    paddingHorizontal: responsiveWidth(5.33)
  },
  segmentItemContainer: {
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    alignItems: "center"
  },
  containerItemTab: {
    width: responsiveWidth(100),
    height: "100%"
  },
  textTabActive: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(1.8)
  },
  textTabUnactive: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(1.8),
    color: "#C3C3C3"
  },
  viewUnderlineActive: {
    height: 2,
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#0055FF"
  },
  viewUnderlineInactive: {
    backgroundColor: "transparent",
    height: 2,
    width: "100%",
    position: "absolute",
    bottom: 0
  },
  containerAuthentication: {
    width: "100%",
    paddingHorizontal: responsiveWidth(5.33)
  },
  itemAuthentication: { marginBottom: responsiveHeight(3) },
  titleAuthentication: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(2.5),
    marginBottom: responsiveHeight(2)
  },
  textAuthentication: {
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(1.6),
    lineHeight: responsiveHeight(2.4)
  },
  doneContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  containerPictoDone: {
    height: responsiveWidth(6),
    width: responsiveWidth(6),
    backgroundColor: "#17A370",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginRight: responsiveWidth(2)
  },
  donePicto: { height: "50%", width: "50%" },
  doneText: {
    fontSize: responsiveFontSize(2),
    fontFamily: "SFProText-Regular",
    fontWeight: "900",
    color: "#17A370"
  },
  doneBtn: {
    borderRadius: 5,
    height: responsiveWidth(13),
    width: responsiveWidth(35),
    backgroundColor: "#0055FF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: responsiveHeight(2)
  },
  textDoneBtn: {
    fontSize: responsiveFontSize(2.2),
    fontFamily: "SFProText-Regular",
    fontWeight: "900",
    color: "#fff"
  }
});

module.exports = styles;
