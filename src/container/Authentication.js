/**
 * Inbox Screen
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
  ScrollView,
  Dimensions
} from "react-native";
import { Actions } from "react-native-router-flux";
import {
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";
import firebase from "react-native-firebase";
import moment from "moment";

import * as userActions from "../actions/userActions";
import styles from "../style/authenticationStyle";

const width = Dimensions.get("window").width;

const itemTab = [{ title: "Starting meeting" }, { title: "Ending meeting" }];

export default class Authentication extends Component {
  constructor(props) {
    super(props);

    this.state = { pageIndex: 0, currentStartStep: 0, currentEndStep: 0 };
  }

  onTabClicked(flag) {
    const { pageIndex } = this.state;
    if (flag === 0) this.swiper.scrollTo({ x: 0, y: 0, animated: true });
    if (flag === 1) this.swiper.scrollTo({ x: width, y: 0, animated: true });

    this.setState({ pageIndex: flag });
  }

  ref = el => {
    this.swiper = el;
  };

  handlePageChange = e => {
    var offset = e.nativeEvent.contentOffset;
    if (offset) {
      const page = Math.round(offset.x / width);

      if (this.state.pageIndex != page) {
        this.setState({ pageIndex: page });
      }
    }
  };

  render() {
    const { pageIndex, currentStartStep, currentEndStep } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.inboxText}>Authentication</Text>

        <View style={styles.segmentContainer}>
          {itemTab.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{ marginRight: responsiveWidth(5) }}
                onPress={() => this.onTabClicked(index)}
              >
                <View style={styles.segmentItemContainer}>
                  <Text
                    style={[
                      pageIndex === index
                        ? styles.textTabActive
                        : styles.textTabUnactive
                    ]}
                  >
                    {item.title}
                  </Text>
                  <View
                    style={
                      pageIndex === index
                        ? styles.viewUnderlineActive
                        : styles.viewUnderlineInactive
                    }
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <ScrollView
          ref={snapScroll => {
            this.swiper = snapScroll;
          }}
          horizontal
          pagingEnabled
          onMomentumScrollEnd={this.handlePageChange}
          showsHorizontalScrollIndicator={false}
        >
          <ScrollView style={styles.containerItemTab}>
            <View style={styles.containerAuthentication}>
              <View style={styles.itemAuthentication}>
                <Text style={styles.titleAuthentication}>
                  1. State of the property
                </Text>
                {currentStartStep > 0 ? (
                  <Done />
                ) : (
                  <View>
                    <Text style={styles.textAuthentication}>
                      Lorem ipsum dolor sit amet, consectetur adipis elit. Fusce
                      vestibulum dapibus dolor sit amet.
                    </Text>

                    <TouchableOpacity
                      onPress={() =>
                        this.setState({
                          currentStartStep: currentStartStep + 1
                        })
                      }
                      style={styles.doneBtn}
                    >
                      <Text style={styles.textDoneBtn}>Done</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
              {currentStartStep > 0 && (
                <View style={styles.itemAuthentication}>
                  <Text style={styles.titleAuthentication}>
                    2. Take 3 photos of the property
                  </Text>
                  {currentStartStep > 1 ? (
                    <Done />
                  ) : (
                    <View>
                      <Text style={styles.textAuthentication}>
                        Lorem ipsum dolor sit amet, consectetur adipis elit.
                        Fusce vestibulum dapibus dolor sit amet.
                      </Text>

                      <TouchableOpacity
                        onPress={() =>
                          this.setState({
                            currentStartStep: currentStartStep + 1
                          })
                        }
                        style={styles.doneBtn}
                      >
                        <Text style={styles.textDoneBtn}>Done</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              )}
              {currentStartStep > 1 && (
                <View style={styles.itemAuthentication}>
                  <Text style={styles.titleAuthentication}>
                    3. Control the renter's ID
                  </Text>
                  {currentStartStep > 2 ? (
                    <Done />
                  ) : (
                    <View>
                      <Text style={styles.textAuthentication}>
                        Lorem ipsum dolor sit amet, consectetur adipis elit.
                        Fusce vestibulum dapibus dolor sit amet.
                      </Text>

                      <TouchableOpacity
                        onPress={() =>
                          this.setState({
                            currentStartStep: currentStartStep + 1
                          })
                        }
                        style={styles.doneBtn}
                      >
                        <Text style={styles.textDoneBtn}>Done</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              )}

              {currentStartStep > 2 && (
                <View style={styles.itemAuthentication}>
                  <Text style={styles.titleAuthentication}>4. Notes</Text>
                  {currentStartStep > 3 ? (
                    <Done />
                  ) : (
                    <View>
                      <Text style={styles.textAuthentication}>
                        Lorem ipsum dolor sit amet, consectetur adipis elit.
                        Fusce vestibulum dapibus dolor sit amet.
                      </Text>

                      <TouchableOpacity
                        onPress={() =>
                          this.setState({
                            currentStartStep: currentStartStep + 1
                          })
                        }
                        style={styles.doneBtn}
                      >
                        <Text style={styles.textDoneBtn}>Done</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              )}

              {currentStartStep > 3 && (
                <View style={styles.itemAuthentication}>
                  <Text style={styles.titleAuthentication}>
                    5. Selfie with the renter
                  </Text>
                  {currentStartStep > 4 ? (
                    <Done />
                  ) : (
                    <View>
                      <Text style={styles.textAuthentication}>
                        Lorem ipsum dolor sit amet, consectetur adipis elit.
                        Fusce vestibulum dapibus dolor sit amet.
                      </Text>

                      <TouchableOpacity
                        onPress={() =>
                          this.setState({
                            currentStartStep: currentStartStep + 1
                          })
                        }
                        style={styles.doneBtn}
                      >
                        <Text style={styles.textDoneBtn}>Done</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              )}

              {currentStartStep > 4 && (
                <View style={styles.itemAuthentication}>
                  <Text style={styles.titleAuthentication}>6. QR code</Text>
                  {currentStartStep > 5 ? (
                    <Done />
                  ) : (
                    <View>
                      <Text style={styles.textAuthentication}>
                        Lorem ipsum dolor sit amet, consectetur adipis elit.
                        Fusce vestibulum dapibus dolor sit amet.
                      </Text>

                      <TouchableOpacity
                        onPress={() =>
                          this.setState({
                            currentStartStep: currentStartStep + 1
                          })
                        }
                        style={styles.doneBtn}
                      >
                        <Text style={styles.textDoneBtn}>Done</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              )}
            </View>
          </ScrollView>
          <View style={styles.containerItemTab} />
        </ScrollView>
      </View>
    );
  }
}

class Done extends Component {
  render() {
    return (
      <View style={styles.doneContainer}>
        <View style={styles.containerPictoDone}>
          <Image
            resizeMode="contain"
            style={styles.donePicto}
            source={require("../../assets/UI/check.png")}
          />
        </View>
        <Text style={styles.doneText}>Done</Text>
      </View>
    );
  }
}
