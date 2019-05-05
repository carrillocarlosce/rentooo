import { StyleSheet, Dimensions } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    marginLeft: responsiveWidth(4),
    marginRight: responsiveWidth(4),
  },
  nameText: {
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
  btnNextLayout: {
    marginTop: responsiveHeight(3),
    backgroundColor: "#99BBFF",
    width: responsiveWidth(92),
    height: responsiveHeight(5),
    justifyContent: "center",
    alignItems: "center",
  },
  btnNextText: {
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(2),
    textAlign: "center"
  },
});

  module.exports = styles;
