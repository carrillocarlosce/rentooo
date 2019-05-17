import { StyleSheet, Dimensions } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  plusBtn: {
		marginRight: 20,
		width: 20,
		height: 20,
		resizeMode: 'contain'
	},
	leftBtn: {
		marginLeft: 20,
		width: 24,
		height: 24,
		resizeMode: 'contain'
	}
});

  module.exports = styles;
