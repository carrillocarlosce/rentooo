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
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { Actions } from "react-native-router-flux";
import ImagePicker from "react-native-image-picker";
import ImageResizer from "react-native-image-resizer";
import firebase from "react-native-firebase";
import uuid from "uuid/v4"; // Import UUID to generate UUID

import styles from "../style/editProfileStyle";

const options = {
  mediaType: "photo",
  quality: 1,
  title: "Select Image",
  storageOptions: {
    mediaType: "photo",
    quality: 1,
    allowsEditing: true,
    aspect: [4, 4]
  }
};

export default class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userProfilePicture:
        window.currentUser["profilePicture"] !== undefined
          ? window.currentUser["profilePicture"]
          : require("../../assets/images/defaultProfilePicture.png"),
      firstname: "",
      lastname: "",
      location: "",
      bio: ""
    };
  }

  componentDidMount() {
    Actions.refresh({
      renderRightButton: this.renderSaveButton()
    });
  }

  renderSaveButton() {
    return (
      <Text
        style={{
          marginRight: responsiveWidth(5.33),
          color: "#0055FF",
          fontSize: responsiveFontSize(2.3),
          fontFamily: "SFProText-Semibold"
        }}
      >
        Save
      </Text>
    );
  }

  uploadProfilePicture = () => {
    ImagePicker.showImagePicker(options, response => {
      if (!response.didCancel) {
        const source = { uri: response.uri };

        ImageResizer.createResizedImage(response.uri, 400, 400, "JPEG", 80)
          .then(({ uri }) => {
            this.setState({
              imgSource: source,
              imageUri: uri
            });

            const ext = "jpg"; // Extract image extension
            const filename = `${uuid()}.${ext}`; // Generate unique name
            this.setState({ uploading: true });

            firebase
              .storage()
              .ref("profilePictures/" + filename)
              .putFile(this.state.imageUri)
              .on(
                firebase.storage.TaskEvent.STATE_CHANGED,
                snapshot => {
                  let state = {};
                  state = {
                    ...state,
                    progress:
                      (snapshot.bytesTransferred / snapshot.totalBytes) * 100 // Calculate progress percentage
                  };

                  if (snapshot.state === firebase.storage.TaskState.SUCCESS) {
                    state = {
                      ...state,
                      uploading: false,
                      imgSource: "",
                      imageUri: "",
                      progress: 0,
                      userProfilePicture: snapshot.downloadURL
                    };
                  }

                  this.setState(state);

                  let currentUser = window.currentUser;
                  currentUser["profilePicture"] = snapshot.downloadURL;

                  firebase
                    .database()
                    .ref("users/" + currentUser["userID"])
                    .update(currentUser);
                },
                error => {
                  unsubscribe();
                  alert("Sorry, Try again.");
                }
              );
          })
          .catch(err => {
            console.log("error=", err);
          });
      } else {
        console.log("user canceled");
      }
    });
  };

  render() {
    const {
      userProfilePicture,
      firstname,
      lastname,
      location,
      bio
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.profilePictureContainer}>
          <View style={styles.profilePicture}>
            <Image
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
              source={{ uri: userProfilePicture }}
            />
          </View>
          <TouchableOpacity onPress={() => this.uploadProfilePicture()}>
            <Text style={styles.editProfilePicture}>Edit</Text>
          </TouchableOpacity>
        </View>

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
          <Text>{200 - bio.length}</Text>
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
          maxLength={200}
          multiline={true}
          numberOfLines={4}
          blurOnSubmit
        />
      </View>
    );
  }
}
