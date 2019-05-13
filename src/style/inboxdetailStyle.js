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
	messengerRightContainer: {
		paddingHorizontal: responsiveWidth(2),
		marginTop: responsiveHeight(2),
		backgroundColor: "#0055FF",
		width: responsiveWidth(60),
		height: responsiveHeight(16),
		borderBottomLeftRadius: 10,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		alignSelf: 'flex-end'
	},
	messgengerRightName: {
		marginTop: responsiveHeight(2),
		alignSelf: 'flex-end',
		fontSize: 11,
		color: "white"
	},
	messengerLeftLayout: {
		flexDirection: 'row',
		justifyContent: "flex-start",
		alignSelf: 'flex-start'
	},
	imageLeft: {
		marginTop: responsiveHeight(2),
	},
	messengerLeftContainer: {
		paddingHorizontal: responsiveWidth(2),
		marginTop: responsiveHeight(2),
		marginLeft: responsiveWidth(2),
		backgroundColor: "#F5F5FD",
		width: responsiveWidth(60),
		height: responsiveHeight(16),
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
		borderTopRightRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		alignSelf: 'flex-start'
	},
	messgengerRightName: {
		marginTop: responsiveHeight(2),
		alignSelf: 'flex-end',
		fontSize: 11,
		color: "#818185"
	},
	messgengerLeftName: {
		marginTop: responsiveHeight(2),
		marginLeft: responsiveWidth(4),
		alignSelf: 'flex-start',
		fontSize: 11,
		color: "#818185"
	},
	messgengerRightPart: {
		fontSize: 15,
		color: "white",
	},
	messgengerRightPart: {
		fontSize: 15,
		color: "white",
	},
	bottomContainer: {
		width: responsiveWidth(100),
		height: responsiveHeight(15),
		backgroundColor: "#FFFFFF",
		position: 'absolute',
		bottom: 0,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		paddingHorizontal: responsiveWidth(4),
		borderTopWidth: 2,
		borderTopColor: "#ECECEC",
	},
	line: {
		height: 2,
		backgroundColor: "#ECECEC"
	},
	textinput: {
		width: responsiveWidth(92),
		height: responsiveHeight(8),
	},
	buttonBottomLayout: {
		flexDirection: 'row',
		justifyContent: "space-between",
	},
	leftbtn: {
		flexDirection: 'row',
		width: responsiveWidth(15),
		justifyContent: "space-between",
		alignItems: "center"
	},
	sendBtnText: {
		fontFamily: 'SFProText-Semibold',
		fontSize: 15,
		color: "#0055FF"
	}

});

  module.exports = styles;
