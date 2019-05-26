/**
 * Item Details Screen
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { Actions } from "react-native-router-flux";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import StarView from "react-native-star-view";
import Slideshow from "../component/Slideshow";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

import styles from "../style/itemdetailsStyle";

const itemList = [
  {
    name: "Black Canon Film Camera",
    logo: require("../../assets/images/canon-camera.png"),
    color: "white",
    dayRent: "15$/day",
    startCount: 4
  },
  {
    name: "DJI Phantom 3 Pro",
    logo: require("../../assets/images/canon-camera.png"),
    color: "white",
    dayRent: "20$/day",
    startCount: 5
  },
  {
    name: "Black Canon Film Camera",
    logo: require("../../assets/images/canon-camera.png"),
    color: "white",
    dayRent: "15$/day",
    startCount: 4
  },
  {
    name: "Black Canon Film Camera",
    logo: require("../../assets/images/canon-camera.png"),
    color: "white",
    dayRent: "15$/day",
    startCount: 4
  }
];

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          url: "http://placeimg.com/640/480/any"
        },
        {
          url: "http://placeimg.com/640/480/any"
        },
        {
          url: "http://placeimg.com/640/480/any"
        }
      ]
    };
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position:
            this.state.position === this.state.dataSource.length
              ? 0
              : this.state.position + 1
        });
      }, 2000)
    });
  }

  componentDidMount() {
    console.log(this.props.data);
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    const { data } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.navContainer}>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Image
              style={styles.leftNavBtn}
              source={require("../../assets/images/left.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.rightNavBtn}
              resizeMode={"contain"}
              source={require("../../assets/images/redheart3x.png")}
            />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scrollViewContainer}>
          <Slideshow
            style={styles.slideshow}
            dataSource={this.state.dataSource}
            position={this.state.position}
            onPositionChanged={position => this.setState({ position })}
          />

          <View
            style={{
              paddingHorizontal: responsiveWidth(5.33),
              marginBottom: responsiveHeight(10)
            }}
          >
            <Text style={styles.title}>{data.title}</Text>
            <View style={styles.threeContainer}>
              <View style={styles.starContainer}>
                <Text style={[styles.itemText, { color: "#FDC058" }]}>4.1</Text>
                <StarView score={4} style={styles.starItem} />
              </View>
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>92</Text>
                <Text style={styles.subItemText}>Reviews</Text>
              </View>
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>23</Text>
                <Text style={styles.subItemText}>Rentals</Text>
              </View>
            </View>
            <View style={styles.lineSeperator} />
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionHeader}>About</Text>
              <View style={{ marginTop: 16 }}>
                <Text style={styles.descriptionContent}>{data.summary}</Text>
                <Text style={styles.categoryText}>{data.category}</Text>
              </View>
            </View>

            <View style={styles.mapViewContainer}>
              <Text style={styles.mapViewText}>Location</Text>
              <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.mapView}
                region={{
                  latitude: 42.882004,
                  longitude: 74.582748,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
                }}
                showsUserLocation={true}
              />
            </View>

            <View style={styles.kudoConainer}>
              <View style={styles.leftKudoContainer}>
                <Image source={require("../../assets/images/profile.png")} />
                <Text style={styles.kudoLeftText}>Sofietje Boksum</Text>
              </View>
              <TouchableOpacity style={styles.rightKudoContainer}>
                <Text style={styles.rightKudoText}>See 6 others</Text>
              </TouchableOpacity>
            </View>

            <View>
              <Text style={styles.interestText}>It might interest you</Text>
              <View style={styles.interestInsideContainer}>
                <View style={styles.interestRowContainer}>
                  <View style={styles.interestImageContainer}>
                    <TouchableOpacity style={styles.itemIterestBtnContainer}>
                      <Image
                        style={styles.itemImage}
                        source={require("../../assets/images/canon-camera.png")}
                      />
                      <Image
                        style={styles.heartIcon}
                        source={require("../../assets/images/heart.png")}
                      />
                      <Text style={styles.itemText}>
                        Black Canon Film{"\n"}Camera
                      </Text>
                      <View style={styles.currencyWrapper}>
                        <Text style={styles.currencyText}>15$/day</Text>
                        <View style={styles.currencyContainer}>
                          <Image
                            style={styles.currency}
                            resizeMode="contain"
                            source={require("../../assets/images/rentoo.png")}
                          />
                          <Image
                            style={styles.currency}
                            resizeMode="contain"
                            source={require("../../assets/images/bitcoin.png")}
                          />
                          <Image
                            style={styles.currency}
                            resizeMode="contain"
                            source={require("../../assets/images/waves.png")}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.starLayout}>
                      <StarView score={4} style={styles.starView} />
                      <Text style={styles.starText}>13</Text>
                    </View>
                  </View>
                  <View style={styles.interestImageContainer}>
                    <TouchableOpacity style={styles.itemIterestBtnContainer}>
                      <Image
                        source={require("../../assets/images/canon-camera.png")}
                      />
                      <Image
                        style={styles.heartIcon}
                        source={require("../../assets/images/heart.png")}
                      />
                      <Text style={styles.itemText}>
                        Black Canon Film{"\n"}Camera
                      </Text>
                      <View style={styles.currencyWrapper}>
                        <Text style={styles.currencyText}>15$/day</Text>
                        <View style={styles.currencyContainer}>
                          <Image
                            style={styles.currency}
                            resizeMode="contain"
                            source={require("../../assets/images/rentoo.png")}
                          />
                          <Image
                            style={styles.currency}
                            resizeMode="contain"
                            source={require("../../assets/images/bitcoin.png")}
                          />
                          <Image
                            style={styles.currency}
                            resizeMode="contain"
                            source={require("../../assets/images/waves.png")}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.starLayout}>
                      <StarView score={4} style={styles.starView} />
                      <Text style={styles.starText}>13</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={[
                    styles.interestRowContainer,
                    { marginTop: responsiveHeight(1.48) }
                  ]}
                >
                  <View style={styles.interestImageContainer}>
                    <TouchableOpacity style={styles.itemIterestBtnContainer}>
                      <Image
                        source={require("../../assets/images/canon-camera.png")}
                      />
                      <Image
                        style={styles.heartIcon}
                        source={require("../../assets/images/heart.png")}
                      />
                      <Text style={styles.itemText}>
                        Black Canon Film{"\n"}Camera
                      </Text>
                      <View style={styles.currencyWrapper}>
                        <Text style={styles.currencyText}>15$/day</Text>
                        <View style={styles.currencyContainer}>
                          <Image
                            style={styles.currency}
                            resizeMode="contain"
                            source={require("../../assets/images/rentoo.png")}
                          />
                          <Image
                            style={styles.currency}
                            resizeMode="contain"
                            source={require("../../assets/images/bitcoin.png")}
                          />
                          <Image
                            style={styles.currency}
                            resizeMode="contain"
                            source={require("../../assets/images/waves.png")}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.starLayout}>
                      <StarView score={4} style={styles.starView} />
                      <Text style={styles.starText}>13</Text>
                    </View>
                  </View>
                  <View style={styles.interestImageContainer}>
                    <TouchableOpacity style={styles.itemIterestBtnContainer}>
                      <Image
                        source={require("../../assets/images/canon-camera.png")}
                      />
                      <Image
                        style={styles.heartIcon}
                        source={require("../../assets/images/heart.png")}
                      />
                      <Text style={styles.itemText}>
                        Black Canon Film{"\n"}Camera
                      </Text>
                      <View style={styles.currencyWrapper}>
                        <Text style={styles.currencyText}>15$/day</Text>
                        <View style={styles.currencyContainer}>
                          <Image
                            style={styles.currency}
                            resizeMode="contain"
                            source={require("../../assets/images/rentoo.png")}
                          />
                          <Image
                            style={styles.currency}
                            resizeMode="contain"
                            source={require("../../assets/images/bitcoin.png")}
                          />
                          <Image
                            style={styles.currency}
                            resizeMode="contain"
                            source={require("../../assets/images/waves.png")}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.starLayout}>
                      <StarView score={4} style={styles.starView} />
                      <Text style={styles.starText}>13</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottomAbContainer}>
          <View>
            <Text style={styles.rentDayText}>20$/day</Text>
            <View style={styles.currencyContainer2}>
              <Image
                style={styles.currency2}
                resizeMode="contain"
                source={require("../../assets/images/rentoo.png")}
              />
              <Image
                style={styles.currency}
                resizeMode="contain"
                source={require("../../assets/images/bitcoin.png")}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.rentBtn}>
            <Text style={styles.rentText}>Rent now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
