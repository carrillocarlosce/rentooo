import { StyleSheet, Dimensions } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		position: 'relative',
	},
	topContainer: {
		flexDirection: "column",
		justifyContent: "space-around",
		alignSelf: "flex-start",
		backgroundColor: "#0055FF",
		width: responsiveWidth(100),
		height: responsiveHeight(18),
		paddingLeft: responsiveWidth(4),
		paddingBottom: responsiveHeight(2),
	},
	rentooText: {
		marginLeft: 5,
	},
	rentooCurrentyText:{
		fontSize: 25,
		color: "white"
	},
	midContainer: {
		paddingLeft: responsiveWidth(4),
		paddingRight: responsiveWidth(4),
		height: responsiveHeight(47)
	},	
	totopLayout: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center"
	},
	rentooCurrency: {
		fontSize: 20,
		color: "white"
	},
	dollarCurrency: {
		fontSize: 15,
		color: "white"
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
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		
	},
	leftItem: {
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'flex-start'
	},
	rightItem: {
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
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
    height: responsiveHeight(14),
    paddingLeft: responsiveWidth(2),
    borderRadius: 5,
	},
	title: {
		marginTop: responsiveHeight(3),
		marginBottom: responsiveHeight(3),
		marginLeft: responsiveWidth(4),
		fontSize: 19
	},
  upperText: {
    color: "black",
    fontSize: 15
  },
  inlineText: {
    color: "#676767",
    fontSize: 13,
	},
	bottomline: {
		height: 1,
		width: responsiveWidth(80),
		justifyContent: "flex-end",
		alignSelf: "flex-end",
		backgroundColor: "#ECECEC"
	},
	whiteBox: {
		width: responsiveWidth(5),
		height: responsiveWidth(5),
		backgroundColor: "white"
	},
	bottomContainer: {
		width: responsiveWidth(100),
		height: responsiveHeight(15),
		backgroundColor: "#F5F5FD",
		position: 'absolute',
		bottom: 0,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: responsiveWidth(4),
		paddingBottom: 20,
		paddingTop: responsiveHeight(2),
	},
	bottomButton: {
		width: responsiveWidth(40),
		height: responsiveHeight(5),
		borderRadius: 5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center"

	},
	buttonText: {
		marginLeft: 5,
		textAlign: "center",
		fontSize: 15,
		color: "white"
	}
});

  module.exports = styles;
