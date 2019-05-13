import { StyleSheet, Dimensions } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		position: 'relative',
	},
	inboxText: {
		marginLeft: responsiveWidth(4),
		marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
    fontFamily: "TruenoSBd",
    fontSize: responsiveFontSize(3),
  },
	midContainer: {
		paddingLeft: responsiveWidth(4),
		paddingRight: responsiveWidth(4),
		height: responsiveHeight(47)
	},	
	itemLayout: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		marginTop: responsiveHeight(2),
		marginBottom: responsiveHeight(2)
	},
	checkbox: {
		width: responsiveWidth(10),
	},
	itemContainer: {
		marginLeft: responsiveWidth(2),
		width: responsiveWidth(80),
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignSelf: 'flex-start'
		
	},
	upperItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
  upperText: {
    color: "black",
    fontSize: 15
  },
  inlineText: {
    color: "#676767",
    fontSize: 13,
	},
  inlineBlackText: {
    color: "black",
    fontSize: 13,
	},
	bottomline: {
		height: 1,
		width: responsiveWidth(80),
		justifyContent: "flex-end",
		alignSelf: "flex-end",
		backgroundColor: "#ECECEC"
	},
});

  module.exports = styles;
