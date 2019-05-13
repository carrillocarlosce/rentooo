import { StyleSheet, Dimensions } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    marginLeft: responsiveWidth(4),
    marginRight: responsiveWidth(4),
  },
  walletsText: {
    marginBottom: responsiveHeight(2),
    fontFamily: "TruenoSBd",
    fontSize: responsiveFontSize(3),
  },
  walletsRowLayout: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    
  },
  walletItemLayout: {
    marginTop: responsiveHeight(1.5),
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    width: responsiveWidth(44.5),
    height: responsiveHeight(15),
    paddingLeft: responsiveWidth(2),
    borderRadius: 5,
  },
  currencyText: {
    color: "black",
    fontSize: 17
  },
  priceText: {
    color: "white",
    fontSize: 17,
  }
});

  module.exports = styles;
