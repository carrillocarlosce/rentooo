import { StyleSheet, Dimensions } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: responsiveWidth(5.33),
  },
  walletsText: {
    fontFamily: "TruenoSBd",
    fontSize: responsiveFontSize(3),
    marginBottom: responsiveHeight(3.94),
  },
  walletsRowLayout: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    marginBottom: responsiveHeight(1.23)
  },
  coinText: {
    fontFamily: "SFProText-Semibold",
    fontSize: 13,
    color: 'black'
  },
  walletItemLayout: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    width: responsiveWidth(43.2),
    height: responsiveHeight(13.5),
    paddingLeft: responsiveWidth(2),
    borderRadius: 5,
  },
  currencyText: {
    color: "black",
    fontSize: 17
  },
  priceText: {
    fontFamily: 'SFProText-Semibold',
    color: "white",
    fontSize: 17,
  }
});

  module.exports = styles;
