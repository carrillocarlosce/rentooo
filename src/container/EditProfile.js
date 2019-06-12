/**
 * Profile Screen
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
import firebase from "react-native-firebase";

import styles from "../style/editProfileStyle";

export default class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      location: "",
      bio: ""
    };
  }

  render() {
    const { firstname, lastname, location, bio } = this.state;

    return (
      <View style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.headerInput}>
          <Text style={styles.headerInputTitle}>First name</Text>
        </View>

        <TextInput
          ref={userFirstname => {
            this.userFirstnameInput = userFirstname;
          }}
          returnKeyType={"next"}
          placeholder="Firstname"
          value={firstname}
          onChangeText={firstname => this.setState({ firstname })}
          onSubmitEditing={() => this.userLastnameInput.focus()}
          maxLength={40}
        />

        <View style={styles.separatorLine} />

        <View style={styles.headerInput}>
          <Text style={styles.headerInputTitle}>Last name</Text>
        </View>

        <TextInput
          ref={userLastname => {
            this.userLastnameInput = userLastname;
          }}
          returnKeyType={"next"}
          placeholder="Lastname"
          value={lastname}
          onChangeText={lastname => this.setState({ lastname })}
          onSubmitEditing={() => this.userLocationInput.focus()}
          maxLength={40}
        />

        <View style={styles.separatorLine} />

        <View style={styles.headerInput}>
          <Text style={styles.headerInputTitle}>Location</Text>
        </View>

        <TextInput
          ref={userLocation => {
            this.userLocationInput = userLocation;
          }}
          returnKeyType={"next"}
          placeholder="Location"
          value={location}
          onChangeText={location => this.setState({ location })}
          onSubmitEditing={() => this.userBioInput.focus()}
          maxLength={40}
        />

        <View style={styles.separatorLine} />

        <View style={styles.headerInput}>
          <Text style={styles.headerInputTitle}>Bio</Text>
          <Text>{400 - bio.length}</Text>
        </View>

        <TextInput
          ref={userBio => {
            this.userBioInput = userBio;
          }}
          returnKeyType={"done"}
          placeholder="Bio"
          value={bio}
          onChangeText={bio => this.setState({ bio })}
          onSubmitEditing={() => bio.length > 10 && this.nextStep()}
          maxLength={400}
          multiline={true}
          numberOfLines={4}
          blurOnSubmit
        />
      </View>
    );
  }
}
