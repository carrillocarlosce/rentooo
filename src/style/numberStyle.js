import { StyleSheet, Dimensions } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: responsiveWidth(5.33)
  },
  numberText: {
    fontFamily: "TruenoSBd",
    fontSize: 26,
  },
  formLayout: {
    marginTop: responsiveHeight(4.92),
    flexDirection: "column",
  },
  formItem: {
    backgroundColor: "#F2F2F2", 
    height: responsiveHeight(5.66),
    paddingLeft: 10,
    borderRadius: 5,
  },
  btnNextLayout: {
    marginTop: responsiveHeight(3),
    backgroundColor: "#99BBFF",
    width: responsiveWidth(89.34),
    height: responsiveHeight(5.66),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  btnNextText: {
    fontFamily: "SFProText-Semibold",
    fontSize: 17,
    textAlign: "center"
  },
  codeText:{
    marginTop: responsiveHeight(2),
    fontFamily: "SFProText-Regular",
  },
});

  module.exports = styles;
