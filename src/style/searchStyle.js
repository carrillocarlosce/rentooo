import { StyleSheet, Dimensions } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    marginLeft: responsiveWidth(4),
    marginRight: responsiveWidth(4),
  },
  nameText: {
    fontFamily: "TruenoSBd",
    fontSize: responsiveFontSize(3),
  },
  formItem: {
    marginTop: responsiveHeight(1),
    backgroundColor: "#F2F2F2", 
    height: responsiveHeight(5),
    paddingLeft: 10
  },
  btnFiltersLayout: {
    marginTop: responsiveFontSize(1),
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
    fontSize: 12,
    color: "#FFFFFF"
  },
  btnGroupLayout: {
    marginTop: responsiveHeight(2),
    marginRight: responsiveWidth(2),
    width: responsiveWidth(26),
    height: responsiveHeight(14),
    backgroundColor: "#0055FF",
    borderRadius: 5,
  },
  btnGroupLayout2: {
    marginTop: responsiveHeight(2),
    marginRight: responsiveWidth(2),
    width: responsiveWidth(26),
    height: responsiveHeight(14),
    backgroundColor: "#0B49C8",
    borderRadius: 5,
  },
  btnGroupLayout3: {
    marginTop: responsiveHeight(2),
    marginRight: responsiveWidth(2),
    width: responsiveWidth(26),
    height: responsiveHeight(14),
    backgroundColor: "#063696",
    borderRadius: 5,
  },
  btnGroupLayout4: {
    marginTop: responsiveHeight(2),
    marginRight: responsiveWidth(2),
    width: responsiveWidth(26),
    height: responsiveHeight(14),
    backgroundColor: "#032464",
    borderRadius: 5,
  },
  btnContainer: {
    flexDirection: "row", 
    justifyContent: "flex-start", 
    alignItems: "center"
  },
  itemGroupImage: {
    position: "absolute",
    top: responsiveHeight(1),
    left: responsiveHeight(1)
  },
  itemGroupText: {
    position: "absolute",
    bottom: responsiveHeight(1),
    left: responsiveHeight(1),
    fontFamily: "SFProText-Semibold",
    fontSize: 14,
    color: "#FFFFFF"
  },
  interestContainer: {
    marginTop: responsiveHeight(2),
    flexDirection: "column",
    justifyContent: "flex-start",
    
  },
  interestInsideContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    
  },
  interestHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text1IterestHeader: {
    fontFamily: "SFProText-Semibold",
    fontSize: 16,
    color: "#222222"
  },
  text2IterestHeader: {
    fontFamily: "SFProText-Semibold",
    fontSize: 12,
    color: "#0061FF"
  },
  interestImageContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: responsiveWidth(40),
    height: responsiveHeight(30),
  },
  itemIterestBtnContainer: {
    flexDirection: "column",

  },
  rectWhiteColor: {
    position: "absolute",
    right: responsiveHeight(1),
    top: responsiveHeight(1),
    width: responsiveHeight(2),
    height: responsiveHeight(2),
    backgroundColor: "#FFFFFF"
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
    // alignItems: "center",
  },
  currencyContainer: {
    width: responsiveWidth(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  currency: {
    width: responsiveWidth(3),
    height: responsiveHeight(3),
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
    marginLeft: -3
  }
});

  module.exports = styles;
