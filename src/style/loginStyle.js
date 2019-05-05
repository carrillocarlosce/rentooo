
import { StyleSheet, Dimensions } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    marginLeft: responsiveWidth(4),
    marginRight: responsiveWidth(4),
  },
  welcomeText: {
    fontFamily: "TruenoSBd",
    fontSize: responsiveFontSize(3),
  },
  formLayout: {
    marginTop: responsiveHeight(5),
    flexDirection: "column",
  },
  formItem: {
    marginTop: responsiveHeight(1),
    backgroundColor: "#F2F2F2", 
    height: responsiveHeight(5),
    paddingLeft: 10
  },
  forgotTextBtn: {
    marginTop: responsiveHeight(1),
    alignItems: "flex-end",
  },
  forgotText:{
    fontFamily: "SFProText-Regular",
    color: "#1865FF",
    height: responsiveHeight(5),
  },
  btnLoginLayout: {
    marginTop: responsiveHeight(1),
    backgroundColor: "#99BBFF",
    width: responsiveWidth(92),
    height: responsiveHeight(5),
    justifyContent: "center",
    alignItems: "center",
  },
  textLoginWithLayout: {
    marginTop: responsiveHeight(2),
    width: responsiveWidth(92),
    height: responsiveHeight(4),
    textAlign: "center",
    justifyContent: "center", 
    alignItems: "center",
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(2),
  },
  btnFBLayout: {
    marginTop: responsiveHeight(1),
    backgroundColor: "#4469B0",
    width: responsiveWidth(92),
    height: responsiveHeight(5),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  btnTwitterLayout: {
    marginTop: responsiveHeight(1),
    backgroundColor: "#58ADEB",
    width: responsiveWidth(92),
    height: responsiveHeight(5),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  btnGoogleLayout: {
    marginTop: responsiveHeight(1),
    backgroundColor: "#E8453C",
    width: responsiveWidth(92),
    height: responsiveHeight(5),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  btnText: {
    marginLeft: 10,
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(2),
    textAlign: "center"
  },
  btnLoginText: {
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(2),
    textAlign: "center"
  }
});

  module.exports = styles;