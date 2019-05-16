import { StyleSheet, Dimensions } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		position: 'relative',
	},
	inboxText: {
		marginLeft: responsiveWidth(5.33),
		marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
    fontFamily: "TruenoSBd",
    fontSize: responsiveFontSize(3),
  },
	midContainer: {
		paddingHorizontal: responsiveWidth(5.33),
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
		marginLeft: responsiveWidth(3.2),
		width: responsiveWidth(76.14),
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
		fontFamily: "SFProText-Semibold",
    color: "black",
    fontSize: 15
  },
  inlineText: {
		fontFamily: "SFProText-Regular",
    color: "#676767",
    fontSize: 13,
	},
  inlineBlackText: {
		fontFamily: "SFProText-Regular",
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
