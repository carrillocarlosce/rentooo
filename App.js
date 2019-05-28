/**
 * RENTOO React Native App
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from "react-native";
import {
  Router,
  Scene,
  ActionConst,
  Actions,
  Tabs
} from "react-native-router-flux";

import Welcome from "./src/container/Welcome";
import Login from "./src/container/Login";
import Forgot from "./src/container/Forgot";

import Signup from "./src/container/Signup";
import Name from "./src/container/Name";
import Number from "./src/container/Number";
import Code from "./src/container/Code";

import Search from "./src/container/Search";
import Searchresult from "./src/container/Searchresult";

import NewOfferTitle from "./src/container/NewOfferTitle";
import NewOfferPhotos from "./src/container/NewOfferPhotos";
import NewOfferCategories from "./src/container/NewOfferCategories";
import NewOfferAvailability from "./src/container/NewOfferAvailability";
import NewOfferPrice from "./src/container/NewOfferPrice";
import NewOfferCurrency from "./src/container/NewOfferCurrency";
import NewOfferMeeting from "./src/container/NewOfferMeeting";

import Dashboard from "./src/container/Dashboard";
import Upcoming from "./src/container/Upcoming";
import Past from "./src/container/Past";
import Watchlist from "./src/container/Watchlist";
import Myoffers from "./src/container/Myoffers";
import Wallets from "./src/container/Wallets";
import AddWallet from "./src/container/AddWallet";
import Yourbalance from "./src/container/Yourbalance";
import Inbox from "./src/container/Inbox";
import Inboxdetails from "./src/container/Inboxdetails";
import Profiledetails from "./src/container/Profiledetails";
import Profile from "./src/container/Profile";
import MapSearch from "./src/container/MapSearch";

import ItemDetails from "./src/container/ItemDetails";

import RentItemDates from "./src/container/RentItemDates";
import RentItemPaymentMethod from "./src/container/RentItemPaymentMethod";
import RentItemDetails from "./src/container/RentItemDetails";
import RentItemCheckout from "./src/container/RentItemCheckout";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

import styles from "./src/style/appStyle";

class TabbarIcon1 extends Component {
  render() {
    if (this.props.focused)
      return (
        <Image
          resizeMode="contain"
          style={styles.tabBarIcon}
          source={require("./assets/images/tab1.png")}
        />
      );
    else
      return (
        <Image
          resizeMode="contain"
          style={styles.tabBarIcon}
          source={require("./assets/images/tab1-1.png")}
        />
      );
  }
}

class TabbarIcon2 extends Component {
  render() {
    if (this.props.focused)
      return (
        <Image
          resizeMode="contain"
          style={styles.tabBarIcon}
          source={require("./assets/images/tab2.png")}
        />
      );
    else
      return (
        <Image
          resizeMode="contain"
          style={styles.tabBarIcon}
          source={require("./assets/images/tab2-1.png")}
        />
      );
  }
}
class TabbarIcon3 extends Component {
  render() {
    if (this.props.focused)
      return (
        <Image
          resizeMode="contain"
          style={styles.tabBarIcon}
          source={require("./assets/images/tab3.png")}
        />
      );
    else
      return (
        <Image
          resizeMode="contain"
          style={styles.tabBarIcon}
          source={require("./assets/images/tab3-1.png")}
        />
      );
  }
}

class TabbarIcon4 extends Component {
  render() {
    if (this.props.focused)
      return (
        <Image
          resizeMode="contain"
          style={styles.tabBarIcon}
          source={require("./assets/images/tab4.png")}
        />
      );
    else
      return (
        <Image
          resizeMode="contain"
          style={styles.tabBarIcon}
          source={require("./assets/images/tab4-1.png")}
        />
      );
  }
}

class TabbarIcon5 extends Component {
  render() {
    if (this.props.focused)
      return (
        <Image
          resizeMode="contain"
          style={[styles.tabBarIcon, { height: responsiveHeight(7) }]}
          source={require("./assets/images/tab5.png")}
        />
      );
    else
      return (
        <Image
          resizeMode="contain"
          style={[styles.tabBarIcon, { height: responsiveHeight(7) }]}
          source={require("./assets/images/tab5-1.png")}
        />
      );
  }
}

export default class App extends Component {
  render() {
    return (
      <Router navigationBarStyle={{ borderBottomColor: "transparent" }}>
        <Scene key="root">
          <Scene
            key="Welcome"
            component={Welcome}
            title="Welcome"
            hideNavBar={true}
            initial
          />
          <Scene
            key="Login"
            renderLeftButton={
              <TouchableOpacity onPress={() => Actions.pop()}>
                <Image
                  style={styles.leftBtn}
                  source={require("./assets/images/back3x.png")}
                />
              </TouchableOpacity>
            }
            component={Login}
            backTitle=" "
          />
          <Scene
            key="Forgot"
            component={Forgot}
            backTitle=" "
            renderLeftButton={
              <TouchableOpacity onPress={() => Actions.pop()}>
                <Image
                  style={styles.leftBtn}
                  source={require("./assets/images/back3x.png")}
                />
              </TouchableOpacity>
            }
          />
          <Scene
            key="Signup"
            component={Signup}
            backTitle=" "
            renderLeftButton={
              <TouchableOpacity onPress={() => Actions.pop()}>
                <Image
                  style={styles.leftBtn}
                  source={require("./assets/images/back3x.png")}
                />
              </TouchableOpacity>
            }
            renderRightButton={() => (
              <Text style={styles.rightSignupBtn}>1 of 4</Text>
            )}
          />

          <Scene
            key="Name"
            component={Name}
            renderLeftButton={
              <TouchableOpacity onPress={() => Actions.pop()}>
                <Image
                  style={styles.leftBtn}
                  source={require("./assets/images/back3x.png")}
                />
              </TouchableOpacity>
            }
            renderRightButton={() => (
              <Text style={styles.rightSignupBtn}>2 of 4</Text>
            )}
          />
          <Scene
            key="Number"
            component={Number}
            renderLeftButton={
              <TouchableOpacity onPress={() => Actions.pop()}>
                <Image
                  style={styles.leftBtn}
                  source={require("./assets/images/back3x.png")}
                />
              </TouchableOpacity>
            }
            renderRightButton={() => (
              <Text style={styles.rightSignupBtn}>3 of 4</Text>
            )}
          />
          <Scene
            key="Code"
            component={Code}
            renderLeftButton={
              <TouchableOpacity onPress={() => Actions.pop()}>
                <Image
                  style={styles.leftBtn}
                  source={require("./assets/images/back3x.png")}
                />
              </TouchableOpacity>
            }
            renderRightButton={() => (
              <Text style={styles.rightSignupBtn}>4 of 4</Text>
            )}
          />

          <Scene
            key="Search"
            component={Search}
            renderLeftButton={
              <TouchableOpacity onPress={() => Actions.pop()}>
                <Image
                  style={styles.leftBtn}
                  source={require("./assets/images/back3x.png")}
                />
              </TouchableOpacity>
            }
          />

          <Scene
            key="Searchresult"
            component={Searchresult}
            renderLeftButton={
              <TouchableOpacity onPress={() => Actions.pop()}>
                <Image
                  style={styles.leftBtn}
                  source={require("./assets/images/back3x.png")}
                />
              </TouchableOpacity>
            }
            renderRightButton={() => (
              <TouchableOpacity onPress={() => Actions.MapSearch()}>
                <Image
                  style={styles.plusBtn}
                  source={require("./assets/images/map3x.png")}
                />
              </TouchableOpacity>
            )}
          />
          <Scene key="Dashboard" component={Dashboard} />
          <Scene key="Upcoming" component={Upcoming} />
          <Scene key="Past" component={Past} />
          <Scene key="Watchlist" component={Watchlist} />
          <Scene key="Myoffers" component={Myoffers} />
          <Scene key="Wallets" component={Wallets} />
          <Scene key="MapSearch" component={MapSearch} hideNavBar={true} />

          <Scene key="ItemDetails" component={ItemDetails} hideNavBar={true} />

          <Scene
            renderLeftButton={
              <TouchableOpacity onPress={() => Actions.pop()}>
                <Image
                  style={styles.leftBtn}
                  source={require("./assets/images/back3x.png")}
                />
              </TouchableOpacity>
            }
            key="RentItemDates"
            component={RentItemDates}
          />

          <Scene
            renderLeftButton={
              <TouchableOpacity onPress={() => Actions.pop()}>
                <Image
                  style={styles.leftBtn}
                  source={require("./assets/images/back3x.png")}
                />
              </TouchableOpacity>
            }
            key="RentItemPaymentMethod"
            component={RentItemPaymentMethod}
          />

          <Scene
            renderLeftButton={
              <TouchableOpacity onPress={() => Actions.pop()}>
                <Image
                  style={styles.leftBtn}
                  source={require("./assets/images/back3x.png")}
                />
              </TouchableOpacity>
            }
            key="RentItemDetails"
            component={RentItemDetails}
          />

          <Scene
            renderLeftButton={
              <TouchableOpacity onPress={() => Actions.pop()}>
                <Image
                  style={styles.leftBtn}
                  source={require("./assets/images/back3x.png")}
                />
              </TouchableOpacity>
            }
            key="RentItemCheckout"
            component={RentItemCheckout}
          />

          <Scene
            key="Yourbalance"
            component={Yourbalance}
            title="Your balance"
            titleStyle={{ color: "white" }}
            navigationBarStyle={{
              backgroundColor: "#0055FF",
              borderBottomWidth: 0
            }}
            renderLeftButton={
              <TouchableOpacity onPress={() => Actions.pop()}>
                <Image
                  style={styles.leftBtn}
                  source={require("./assets/images/left.png")}
                />
              </TouchableOpacity>
            }
          />
          <Scene
            key="AddWallet"
            component={AddWallet}
            title="Add wallet"
            navigationBarStyle={{
              borderBottomWidth: 1,
              borderBottomColor: "#F5F5FD"
            }}
            renderLeftButton={
              <TouchableOpacity onPress={() => Actions.pop()}>
                <Image
                  style={styles.leftBtn}
                  source={require("./assets/images/back3x.png")}
                />
              </TouchableOpacity>
            }
          />
          <Scene key="Inbox" component={Inbox} />
          <Scene
            key="Inboxdetails"
            component={Inboxdetails}
            title="Paulina Gayoso"
            renderLeftButton={
              <TouchableOpacity onPress={() => Actions.pop()}>
                <Image
                  style={styles.leftBtn}
                  source={require("./assets/images/back3x.png")}
                />
              </TouchableOpacity>
            }
          />
          <Scene key="Profile" component={Profile} />

          <Scene
            renderLeftButton={
              <TouchableOpacity onPress={() => Actions.pop()}>
                <Image
                  style={styles.leftBtn}
                  source={require("./assets/images/back3x.png")}
                />
              </TouchableOpacity>
            }
            key="NewOfferTitle"
            component={NewOfferTitle}
          />
          <Scene
            renderLeftButton={
              <TouchableOpacity onPress={() => Actions.pop()}>
                <Image
                  style={styles.leftBtn}
                  source={require("./assets/images/back3x.png")}
                />
              </TouchableOpacity>
            }
            key="NewOfferPhotos"
            component={NewOfferPhotos}
          />
          <Scene
            renderLeftButton={
              <TouchableOpacity onPress={() => Actions.pop()}>
                <Image
                  style={styles.leftBtn}
                  source={require("./assets/images/back3x.png")}
                />
              </TouchableOpacity>
            }
            key="NewOfferCategories"
            component={NewOfferCategories}
          />
          <Scene
            renderLeftButton={
              <TouchableOpacity onPress={() => Actions.pop()}>
                <Image
                  style={styles.leftBtn}
                  source={require("./assets/images/back3x.png")}
                />
              </TouchableOpacity>
            }
            key="NewOfferAvailability"
            component={NewOfferAvailability}
          />
          <Scene
            renderLeftButton={
              <TouchableOpacity onPress={() => Actions.pop()}>
                <Image
                  style={styles.leftBtn}
                  source={require("./assets/images/back3x.png")}
                />
              </TouchableOpacity>
            }
            key="NewOfferPrice"
            component={NewOfferPrice}
          />
          <Scene
            renderLeftButton={
              <TouchableOpacity onPress={() => Actions.pop()}>
                <Image
                  style={styles.leftBtn}
                  source={require("./assets/images/back3x.png")}
                />
              </TouchableOpacity>
            }
            key="NewOfferCurrency"
            component={NewOfferCurrency}
          />
          <Scene
            renderLeftButton={
              <TouchableOpacity onPress={() => Actions.pop()}>
                <Image
                  style={styles.leftBtn}
                  source={require("./assets/images/back3x.png")}
                />
              </TouchableOpacity>
            }
            key="NewOfferMeeting"
            component={NewOfferMeeting}
          />

          <Scene key="dashboardContainerScreen" hideNavBar={true}>
            <Tabs
              key="dashboardContainerTabs"
              swipeEnabled
              showLabel={false}
              tabBarPosition="bottom"
              hideNavBar={true}
              tabBarStyle={{ backgroundColor: "#F5F5FD" }}
            >
              <Scene
                key={"Search1"}
                component={Search}
                hideNavBar={true}
                title=""
                icon={TabbarIcon1}
              />
              <Scene
                key="Dashboard2"
                component={Dashboard}
                hideNavBar={false}
                renderRightButton={() => (
                  <Image
                    style={styles.plusBtn}
                    source={require("./assets/images/bell.png")}
                  />
                )}
                icon={TabbarIcon2}
              />
              <Scene
                key="Wallets2"
                component={Wallets}
                hideNavBar={false}
                renderRightButton={() => (
                  <TouchableOpacity onPress={() => Actions.AddWallet()}>
                    <Image
                      resizeMode="contain"
                      style={styles.plusBtn}
                      source={require("./assets/images/add-wallet.png")}
                    />
                  </TouchableOpacity>
                )}
                icon={TabbarIcon3}
              />
              <Scene
                key="Inbox2"
                component={Inbox}
                hideNavBar={false}
                renderRightButton={() => (
                  <Image
                    resizeMode="contain"
                    style={styles.plusBtn}
                    source={require("./assets/images/box.png")}
                  />
                )}
                icon={TabbarIcon4}
              />
              <Scene
                key="Profile"
                component={Profile}
                hideNavBar={false}
                renderLeftButton={
                  <TouchableOpacity>
                    <Text
                      style={{
                        marginLeft: 20,
                        color: "#0055FF",
                        fontSize: 17,
                        fontFamily: "SFProText-Semibold"
                      }}
                    >
                      Edit
                    </Text>
                  </TouchableOpacity>
                }
                renderRightButton={() => (
                  <Image
                    style={styles.plusBtn}
                    source={require("./assets/images/setting.png")}
                  />
                )}
                icon={TabbarIcon5}
              />
            </Tabs>
          </Scene>
        </Scene>
      </Router>
    );
  }
}
