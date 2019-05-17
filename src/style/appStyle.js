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
	},
	rightSignupBtn: {
		marginRight: 20,
		fontFamily: 'SFProText-Regular',
		fontSize: 15,
		color: "#666666"
	}
});

  module.exports = styles;
