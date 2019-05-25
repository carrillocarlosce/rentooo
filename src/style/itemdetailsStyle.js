import { StyleSheet, Dimensions } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    position: "relative"
	},
	navContainer: {
    zIndex: 300,
		position: "absolute",
		left: 0,
		top: 0,
		paddingHorizontal: responsiveWidth(5.33),
		marginTop: responsiveHeight(6.4),
		justifyContent: "space-between",
		flexDirection: "row",
		alignItems: "center",

		width: responsiveWidth(100),
		height: responsiveHeight(3)
	},
	leftNavBtn: {
		width: 24,
		height: 24,
		resizeMode: 'contain'
	},
	rightNavBtn: {
		width: 24,
		height: 24,
		overflow: "hidden",
		resizeMode: "contain"
	},
  slideshow: {
    height: "50%",
    width: "50%",
    marginHorizontal: -80
  },
	title: {
		fontFamily: "TruenoSBd",
		fontSize: 26,
		marginTop: responsiveHeight(3),
	},
	starText: {
		fontFamily: "SFProText-Semibold",
		fontSize: 17,
		color: "#FDC058",
	},
	starItem: {
		width: 84,
		height: 14,
		marginTop: 4,
	},
	itemText: {
		fontFamily: "SFProText-Semibold",
		fontSize: 17,

	},
	subItemText: {
		marginTop: 4,
		fontFamily: "SFProText-Semibold",
		fontSize: 15,
		color: "#C0C0C0"
	},
	starContainer: {
		justifyContent: "flex-start",
		alignItems: "center",
		width: responsiveWidth(21.86),
	},
	itemContainer: {
		justifyContent: "flex-start",
		alignItems: "center",
		width: responsiveWidth(16.5),
	},
	threeContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		marginTop: responsiveHeight(2)

	},
	scrollViewContainer: {
		paddingHorizontal: responsiveWidth(5.33),
		height: responsiveHeight(51.5)
	},
	lineSeperator: {
		marginTop: 24,
		height: 1,
		backgroundColor: "#CCCCCC"
	},
	descriptionContainer: {
		marginTop: 24,
	},
	descriptionHeader: {
		fontFamily: "TruenoSBd",
		fontSize: 20,
	},
  descriptionContent: {
		fontFamily: "SFProText-Regular",
		fontSize: 15,
	},
	techText: {
		marginTop: responsiveHeight(2),
		fontFamily: "SFProText-Semibold",
		fontSize: 15,
		color: "#0055FF"
	},
	bottomAbContainer: {
		position: "absolute",
		left: 0,
		top: responsiveHeight(86.2),
		backgroundColor: "#F5F5FD",
		flexDirection: "row",
		paddingHorizontal: responsiveWidth(5.33),
		justifyContent: "space-between",
		alignItems: "center",
		height: responsiveHeight(13.7),
		width: responsiveWidth(100)
	},
	rentBtn: {
		width: responsiveWidth(37),
		height: responsiveHeight(5.66),
		backgroundColor: "#0055FF",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5
	},
	rentText: {
		fontFamily: "SFProText-Semibold",
		fontSize: 17,
		color: "white"
	},
	rentDayText: {
		fontFamily: "SFProText-Semibold",
		fontSize: 17,
	},
	mapViewContainer: {
		marginTop: responsiveHeight(3)
	},
	mapViewText: {
		fontFamily: "TruenoSBd",
		fontSize: 20,
	},
	mapView: {
		marginTop: 16,
		height: responsiveHeight(28),
	},
	kudoConainer: {
		flexDirection: "row",
		marginTop: responsiveHeight(4),
		justifyContent: "space-between",
		alignItems: "center",
	},
	leftKudoContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: responsiveWidth(43.7)
	},
	kudoLeftText: {
		fontFamily: "SFProText-Semibold",
		fontSize: 15,
	},
	rightKudoContainer: {
		width: responsiveWidth(28.8),
		height: responsiveHeight(4),
		backgroundColor: "#A3A3BD",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
	},
	rightKudoText: {
		fontFamily: "SFProText-Semibold",
		fontSize: 13,
		color: "white"
	},
	// -----------------------------
  closeBtn: {
    position: "absolute",
    left: 20,
    top: 52,
    zIndex: 999
  },
  closeImage: {
    resizeMode: 'contain',
    width: 48,
    height: 48,
  },
  bottomContainer: {
    position: "absolute",
    width: "100%",
    height: "39.16%",
    backgroundColor: "white",
    left: 0,
    top: "60.84%"
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5.33%",
    marginTop: 16
  },
  leftText: {
    fontFamily: "TruenoSBd",
    fontSize: 20
  },
  rightBtn: {
    width: 64,
    height: 32,
    backgroundColor: "#A3A3BD",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  rightText: {
    fontFamily: "SFProText-Semibold",
    fontSize: 13,
    color: "white"
  },

  interestImageContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: responsiveWidth(43.2),
    // height: responsiveHeight(30),
  },
  itemIterestBtnContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  heartIcon: {
    position: "absolute",
    right: responsiveHeight(1),
    top: responsiveHeight(1),
  },
  itemText: {
    marginTop: responsiveHeight(1),
    fontFamily: "SFProText-Semibold",
    fontSize: 15,
  },
  currencyText: {
    marginTop: 5,
    fontFamily: "SFProText-Semibold",
    fontSize: 13,
    color: "#767676"
  },
  currencyWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  currencyContainer: {
    width: responsiveWidth(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  currency: {
    width: responsiveWidth(3),
    height: responsiveHeight(3),
	},
	currencyContainer2: {
    width: responsiveWidth(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  currency2: {
    width: responsiveWidth(4.5),
    height: responsiveHeight(4.5),
  },
  starLayout: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    alignItems: "center"
  },
  starText: {
    fontFamily: "SFProText-Semibold",
    fontSize: 13,
    marginLeft: 5,
    color: "#FFC08A"
  },
  starView: {
    width: 50,
    height: 10,
  },
  interestRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemImage: {
    width: 162,
    height: 122,
	},
	interestText: {
		marginTop: 32,
		fontFamily: "TruenoSBd",
		fontSize: 20,
	},
	interestInsideContainer: {
		marginTop: 24,
	}
});

  module.exports = styles;
