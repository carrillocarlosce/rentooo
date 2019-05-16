import { StyleSheet, Dimensions } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: responsiveWidth(5.33),
    marginTop: responsiveHeight(3.94),
  },
  scene: {
    flex: 1,
  },
});

  module.exports = styles;
