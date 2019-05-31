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

import styles from "../style/inboxStyle";

const width = Dimensions.get("window").width;

const itemTab = [{ title: "Rentals" }, { title: "My offers" }];

export default class Inbox extends Component {
  constructor(props) {
    super(props);

    this.state = { chatList: [], pageIndex: 0 };
    this.getChatList = this.getChatList.bind(this);
    this.datediff = this.datediff.bind(this);
  }

  componentWillMount() {
    this.getChatList();
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
      console.log("page===", page);
      if (this.state.pageIndex != page) {
        this.setState({ pageIndex: page });
      }
    }
  };

  datediff(first, second) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24) - 1);
  }

  async getChatList() {
    const currentKey = window.currentUser["userID"];
    const THIS = this;

    firebase
      .database()
      .ref("chat")
      .on("value", snapshot => {
        let keylist = [];
        let chatlist = [];

        snapshot.forEach(data => {
          const chatID = data.key;
          if (chatID.indexOf(currentKey) >= 0) {
            keylist.push(chatID);
          }
        });

        if (keylist.length > 0) {
          keylist.map(chatid => {
            firebase
              .database()
              .ref("chat")
              .child(chatid)
              .limitToLast(1)
              .once("value", async function(snapshot) {
                if (snapshot.val() !== null) {
                  let childData = "";
                  snapshot.forEach(childSnapshot => {
                    childData = childSnapshot.val();
                  });

                  if (childData != null) {
                    if (childData.location != null) {
                      childData.text = "Position partagée";
                    } else if (childData.image != null) {
                      childData.text = "Pièce jointe partagée";
                    }
                  } else {
                    childData = {
                      createdAt: "0",
                      text: "Lancez une discussion!"
                    };
                  }

                  var options = { month: "long", day: "numeric" };
                  var date = new Date(childData.createdAt);
                  var lastTime_msg = "";

                  if (THIS.datediff(date, new Date()) < 1) {
                    lastTime_msg = moment(date).format("HH:mm");
                  } else if (THIS.datediff(date, new Date()) === 1) {
                    lastTime_msg = "Hier";
                  } else if (THIS.datediff(date, new Date()) < 365) {
                    lastTime_msg = date.toLocaleDateString("fr-FR", options);
                  }

                  const userIDArr = chatid.split("*_*");
                  let chatUserID =
                    currentKey === userIDArr[0] ? userIDArr[1] : userIDArr[0];

                  let userData = "";

                  await firebase
                    .database()
                    .ref("users/")
                    .child(chatUserID)
                    .once("value", snapshot => {
                      if (snapshot.val() !== null) {
                        let user = snapshot.val();
                        user["userID"] = snapshot.key;
                        userData = user;
                      }
                    });

                  if (userData !== "") {
                    let object = {
                      chatID: chatid,
                      lastMessage: childData.text,
                      lastMessageTime: lastTime_msg,
                      createdAt: childData.createdAt,
                      reservationStatus: "Pending",
                      reservationDates: "9 Apr. to 14 Apr.",
                      user: userData
                    };

                    if (chatlist.length > 0) {
                      let replace_index = -1;
                      chatlist.map((item, index) => {
                        if (item.chatID == object.chatID) {
                          replace_index = index;
                        }
                      });
                      if (replace_index > -1) {
                        chatlist[replace_index] = object;
                      } else {
                        chatlist.push(object);
                      }
                    } else {
                      chatlist.push(object);
                    }

                    console.log("chatObj====", chatlist);
                    THIS.setState({ chatList: chatlist });
                  }
                }
              });
          });
        } else {
          THIS.setState({ chatList: chatlist });
        }
      });
  }

  openConversation(chatItem) {
    let contactName = chatItem.user.firstname + " " + chatItem.user.lastname;

    Actions.Inboxdetails({
      user: chatItem.user,
      chatID: chatItem.chatID,
      title: contactName
    });
  }

  render() {
    const { chatList, pageIndex } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.inboxText}>Inbox</Text>

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
          <View style={styles.containerItemTab}>
            <ScrollView style={styles.midContainer}>
              {chatList.map((item, key) => {
                return (
                  <TouchableOpacity onPress={() => this.openConversation(item)}>
                    <View
                      style={styles.itemLayout}
                      onPress={() => this.openConversation(item)}
                    >
                      <Image
                        resizeMode="contain"
                        style={styles.userChatProfilePicture}
                        source={require("../../assets/images/profile.png")}
                      />
                      <View style={styles.itemContainer}>
                        <View style={styles.upperItem}>
                          <Text style={styles.upperText}>
                            {item.user["firstname"] +
                              " " +
                              item.user["lastname"]}
                          </Text>
                          <Text style={styles.upperText}>
                            {item.reservationStatus}
                          </Text>
                        </View>
                        <Text style={styles.inlineBlackText}>
                          {item.reservationDates}
                        </Text>
                        <View style={styles.upperItem}>
                          <Text style={styles.inlineText}>
                            {item.lastMessage}
                          </Text>
                          <Text style={styles.inlineText}>
                            {item.lastMessageTime}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.bottomline} />
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          <View style={styles.containerItemTab}>
            <ScrollView style={styles.midContainer}>
              {chatList.map((item, key) => {
                return (
                  <TouchableOpacity onPress={() => this.openConversation(item)}>
                    <View
                      style={styles.itemLayout}
                      onPress={() => this.openConversation(item)}
                    >
                      <Image
                        resizeMode="contain"
                        style={styles.userChatProfilePicture}
                        source={require("../../assets/images/profile.png")}
                      />
                      <View style={styles.itemContainer}>
                        <View style={styles.upperItem}>
                          <Text style={styles.upperText}>
                            {item.user["firstname"] +
                              " " +
                              item.user["lastname"]}
                          </Text>
                          <Text style={styles.upperText}>
                            {item.reservationStatus}
                          </Text>
                        </View>
                        <Text style={styles.inlineBlackText}>
                          {item.reservationDates}
                        </Text>
                        <View style={styles.upperItem}>
                          <Text style={styles.inlineText}>
                            {item.lastMessage}
                          </Text>
                          <Text style={styles.inlineText}>
                            {item.lastMessageTime}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.bottomline} />
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}
