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
    flex: 1,
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
  // Beginning add picture
  containerPropertyPhotos: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  addPicture: {
    height: responsiveWidth(20),
    width: responsiveWidth(20),
    backgroundColor: "#F5F5FD",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  addPictureIcon: {
    height: "40%",
    width: "40%"
  },
  addedPhoto: {
    height: responsiveWidth(20),
    width: responsiveWidth(20),
    marginRight: responsiveWidth(4),
    borderRadius: 5,
    overflow: "hidden"
  },
  // Beginning notes UI
  headerInputNotes: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: responsiveHeight(3),
    marginBottom: responsiveHeight(2)
  },
  headerInputNotesTitle: {
    color: "rgba(0,0,0,0.6)"
  },
  separatorLine: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(0,0,0,0.1)",
    marginVertical: responsiveHeight(2.5)
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
    paddingHorizontal: responsiveHeight(4),
    paddingVertical: responsiveHeight(2),
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
