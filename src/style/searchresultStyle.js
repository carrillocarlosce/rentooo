import { StyleSheet, Dimensions } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: responsiveWidth(5.33),
  },
  nameText: {
    fontFamily: "TruenoSBd",
    fontSize: responsiveFontSize(3.2),
  },
  searchBar: {
    backgroundColor: "#F2F2F2",
    marginTop: responsiveHeight(1.48),
    height: responsiveHeight(4.4)
  },
  formItem: {
    backgroundColor: "#F2F2F2", 
    height: responsiveHeight(5),
    paddingLeft: 10
  },
  btnFiltersLayout: {
    marginRight: responsiveWidth(2),
    width: responsiveWidth(18),
    height: responsiveHeight(4),
    backgroundColor: "#A3A3BD",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  btnFilterText: {
    fontFamily: "SFProText-Semibold",
    fontSize: 13,
    color: "#FFFFFF"
  },
  btnGroupLayout: {
    marginTop: responsiveHeight(3),
    marginRight: responsiveWidth(2.7),
    width: responsiveWidth(25.6),
    height: responsiveHeight(13.8),
    backgroundColor: "#0055FF",
    borderRadius: 5,
  },
  btnGroupLayout2: {
    marginTop: responsiveHeight(3),
    marginRight: responsiveWidth(2.7),
    width: responsiveWidth(25.6),
    height: responsiveHeight(13.8),
    backgroundColor: "#0B49C8",
    borderRadius: 5,
  },
  btnGroupLayout3: {
    marginTop: responsiveHeight(3),
    marginRight: responsiveWidth(2.7),
    width: responsiveWidth(25.6),
    height: responsiveHeight(13.8),
    backgroundColor: "#063696",
    borderRadius: 5,
  },
  btnGroupLayout4: {
    marginTop: responsiveHeight(3),
    width: responsiveWidth(25.6),
    height: responsiveHeight(13.8),
    backgroundColor: "#032464",
    borderRadius: 5,
  },
  btnContainer: {
    marginTop: responsiveHeight(1.48),
    flexDirection: "row", 
    justifyContent: "flex-start", 
    alignItems: "center"
  },
  itemGroupImage: {
    position: "absolute",
    top: responsiveWidth(3.2),
    left: responsiveWidth(3.2)
  },
  itemGroupText: {
    position: "absolute",
    bottom: responsiveWidth(3.2),
    left: responsiveWidth(3.2),
    fontFamily: "SFProText-Semibold",
    fontSize: 15,
    color: "#FFFFFF"
  },
  interestContainer: {
    marginTop: responsiveHeight(3.94),
    flexDirection: "column",
    justifyContent: "flex-start",
    
  },
  interestInsideContainer: {
    marginTop: responsiveHeight(2.95),
    flexDirection: "column",
    justifyContent: "center",
    
  },
  interestHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text1IterestHeader: {
    fontFamily: "TruenoSBd",
    fontSize: 20,
    color: "#000000"
  },
  text2IterestHeader: {
    fontFamily: "SFProText-Semibold",
    fontSize: 15,
    color: "#0055FF"
  },
  interestImageContainer: {
		marginBottom: responsiveHeight(2),
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: responsiveWidth(89.3),
    // height: responsiveHeight(30),
  },
  itemIterestBtnContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  heartIcon: {
		position: "absolute",
		width: 24,
		height: 24,
    right: responsiveWidth(2.6),
    top: responsiveWidth(2.6),
  },
  itemText: {
    marginTop: responsiveHeight(1),
    fontFamily: "SFProText-Semibold",
    fontSize: 17,
  },
  currencyText: {
    marginTop: 5,
    fontFamily: "SFProText-Semibold",
    fontSize: 15,
    color: "#767676"
  },
  currencyWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  currencyContainer: {
    width: responsiveWidth(15),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  currency: {
    width: responsiveWidth(4.26),
    height: responsiveHeight(4.36),
  },
  starLayout: {
		marginTop: -7,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
  },
  starText: {
    fontFamily: "SFProText-Semibold",
    fontSize: 13,
    marginLeft: 5, 
    color: "#FFC08A"
  },
  starView: {
    width: 75, 
    height: 15, 
  },
  interestRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemImage: {
    width: responsiveWidth(89.3),
    height: responsiveHeight(31),
  },
});

  module.exports = styles;
