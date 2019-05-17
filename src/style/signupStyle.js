import { StyleSheet, Dimensions } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: responsiveWidth(5.33)
  },
  getstartedText: {
    fontFamily: "TruenoSBd",
    fontSize: 26,
  },
  formLayout: {
    marginTop: responsiveHeight(5),
    flexDirection: "column",
  },
  formItem: {
    marginTop: responsiveHeight(1),
    backgroundColor: "#F2F2F2", 
    height: responsiveHeight(5.66),
    paddingLeft: 10,
    borderRadius: 5,
  },
  
  btnsignupLayout: {
    marginTop: responsiveHeight(3),
    backgroundColor: "#99BBFF",
    width: responsiveWidth(89.34),
    height: responsiveHeight(5),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  textSignWithLayout: {
    marginTop: responsiveHeight(2),
    width: responsiveWidth(89.34),
    height: responsiveHeight(4),
    textAlign: "center",
    justifyContent: "center", 
    alignItems: "center",
    fontFamily: "SFProText-Regular",
    fontSize: 17,
    borderRadius: 5,
  },
  btnFBLayout: {
    marginTop: responsiveHeight(1),
    backgroundColor: "#4469B0",
    width: responsiveWidth(89.34),
    height: responsiveHeight(5),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
  },
  btnTwitterLayout: {
    marginTop: responsiveHeight(1),
    backgroundColor: "#58ADEB",
    width: responsiveWidth(89.34),
    height: responsiveHeight(5),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
  },
  btnGoogleLayout: {
    marginTop: responsiveHeight(1),
    backgroundColor: "#E8453C",
    width: responsiveWidth(89.34),
    height: responsiveHeight(5),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5
  },
  btnText: {
    marginLeft: 10,
    fontFamily: "SFProText-Semibold",
    fontSize: 17,
    textAlign: "center",
    color: "white"
  },
  btnSignupText: {
    fontFamily: "SFProText-Semibold",
    fontSize: 17,
    textAlign: "center",
    color: "white"
  },
  tosLayout: {
    marginTop: responsiveHeight(2),
    marginLeft: responsiveWidth(2),
    marginRight: responsiveWidth(2),
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  
  tosTextLeft:{
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(1.6),
  },
  tosText:{
    fontFamily: "SFProText-Regular",
    textDecorationLine: 'underline',
    fontSize: responsiveFontSize(1.6),
  },
});

module.exports = styles;
