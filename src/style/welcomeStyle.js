
import { StyleSheet, Dimensions } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeGridViewImage: {
    width: responsiveWidth(100),
    height: responsiveHeight(43),
  },
  ooImage: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
  },
  innerContainer: {
    marginLeft: responsiveWidth(4),
    marginRight: responsiveWidth(4),
  },
  btnLayout: {
    marginTop: responsiveHeight(5),
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  rentText: {
    fontFamily: "TruenoSBd",
    fontSize: responsiveFontSize(4)
  },
  welcomeText: {
    marginTop: responsiveHeight(3),
    fontFamily: "SFProText-Regular",
    fontSize: responsiveFontSize(2)
  },
  textLayout: {
    marginTop: responsiveHeight(3),
  },
  btnSignUpLayout: {
    backgroundColor: "#0055FF",
    width: responsiveWidth(92),
    height: responsiveHeight(5),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  btnLoginLayout: {
    marginTop: responsiveHeight(1),
    backgroundColor: "#A3A3BD",
    width: responsiveWidth(92),
    height: responsiveHeight(5),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  btnNotNowLayout: {
    marginTop: responsiveHeight(1),
    backgroundColor: "transparent",
    width: responsiveWidth(92),
    height: responsiveHeight(5),
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontFamily: "SFProText-Semibold",
    fontSize: responsiveFontSize(2),
    textAlign: "center"
  }
});

module.exports = styles;