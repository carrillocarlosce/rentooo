/**
 * Inboxdetails Screen
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
  SafeAreaView,
  Keyboard
} from "react-native";
import { Actions } from "react-native-router-flux";
import {
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";
import firebase from "react-native-firebase";
import {
  GiftedChat,
  Bubble,
  Time,
  Send,
  InputToolbar,
  SystemMessage
} from "react-native-gifted-chat";
import { AutoGrowTextInput } from "react-native-auto-grow-textinput";
import moment from "moment";

import styles from "../style/inboxdetailStyle";
import * as userActions from "../actions/userActions";
import StarView from "../component/Startview";

export default class Inboxdetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      message: "",
      userID: window.currentUser["userID"],
      userName: window.currentUser["firstname"],
      //userAvatar: window.currentUser["avatar"],
      chatUser: this.props.user,
      chatID: this.props.chatID
    };

    this.renderBubble = this.renderBubble.bind(this);
    this.renderInputToolbar = this.renderInputToolbar.bind(this);
    this.renderTime = this.renderTime.bind(this);
    this.renderSystemMessage = this.renderSystemMessage.bind(this);
    this.onSend = this.onSend.bind(this);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );

    this.getMessageList();
  }

  snapshotToArray = snapshot => {
    let returnArr = [];
    const userAvatar = this.state.chatUser["avatar"];
    snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      //item.user["avatar"] = userAvatar;
      returnArr.push(item);
    });

    this.setState({ messages: returnArr.reverse() });
  };

  getMessageList() {
    firebase
      .database()
      .ref("chat")
      .child(this.state.chatID)
      .on("value", snapshot => {
        this.snapshotToArray(snapshot);
      });
  }

  renderSystemMessage(props) {
    return <View />;
  }

  renderSend = props => {
    return <Send {...props} />;
  };

  renderTime = props => {
    return (
      <Time
        {...props}
        timeTextStyle={{
          right: {
            color: "#898989"
          },
          left: {
            color: "#3c3c3c"
          }
        }}
      />
    );
  };

  renderInputToolbar(props) {
    return (
      <SafeAreaView style={styles.textInputContainer}>
        <TextInput
          style={styles.textinput}
          onChangeText={message => this.setState({ message })}
          placeholder="Write a message"
        />
        <View style={styles.buttonBottomLayout}>
          <View style={styles.leftbtn}>
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                style={styles.optionChat}
                source={require("../../assets/images/camera2.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                style={styles.optionChat}
                source={require("../../assets/images/picture.png")}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={this.onSend}>
            <Text style={styles.sendBtnText}>Send</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  renderBubble = props => {
    return (
      <Bubble
        {...props}
        textStyle={{
          right: {
            color: "#fff"
          },
          left: {
            color: "#000"
          }
        }}
        wrapperStyle={{
          left: {
            backgroundColor: "#c6c6c6"
          },
          right: {
            backgroundColor: "#0055FF"
          }
        }}
        timeTextStyle={{
          right: { color: "rgba(255,255,255,0.6)" },
          left: { color: "rgba(0,0,0,0.6)" }
        }}
      />
    );
  };

  onSend(messages = []) {
    var message = {
      _id: userActions.generatorMessageID(),
      text: this.state.message,
      createdAt: Date.now(),
      user: {
        _id: this.state.userID,
        name: this.state.userName
        //avatar: this.state.userAvatar
      }
    };

    if (this.state.message !== "") {
      const { chatUser, chatID, userID } = this.state;

      firebase
        .database()
        .ref("chat/")
        .child(chatID)
        .push(message)
        .then(data => {
          this.setState({ message: "" });
        })
        .catch(err => {
          console.log("error===", err);
        });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <GiftedChat
          messages={this.state.messages}
          locale="fr"
          timeFormat="HH:mm"
          dateFormat="DD MMM.YYYY"
          onSend={messages => this.onSend(messages)}
          user={{
            _id: this.state.userID
          }}
          renderBubble={this.renderBubble}
          renderSend={this.renderSend}
          renderTime={this.renderTime}
          renderSystemMessage={this.renderSystemMessage}
          keyboardShouldPersistTaps={"handled"}
          renderInputToolbar={this.renderInputToolbar}
          parsePatterns={linkStyle => [
            {
              pattern: /#(\w+)/,
              style: { ...linkStyle, color: "lightgreen" },
              onPress: props => alert(`press on ${props}`)
            }
          ]}
        />
      </View>
    );
  }
}
