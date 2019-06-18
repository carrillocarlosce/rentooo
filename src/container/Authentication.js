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
import ImagePicker from "react-native-image-picker";
import ImageResizer from "react-native-image-resizer";
import uuid from "uuid/v4"; // Import UUID to generate UUID

import * as userActions from "../actions/userActions";
import styles from "../style/authenticationStyle";

const width = Dimensions.get("window").width;

const itemTab = [{ title: "Starting meeting" }, { title: "Ending meeting" }];

const options = {
  mediaType: "photo",
  quality: 1,
  title: "Select Image",
  storageOptions: {
    mediaType: "photo",
    quality: 1,
    allowsEditing: true,
    aspect: [4, 3]
  }
};

export default class Authentication extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageIndex: 0,
      currentStartStep: 0,
      currentEndStep: 0,
      notes: "",
      imgSource: "",
      imageUri: "",
      uploading: false,
      progress: 0,
      propertyPhotos: [],
      usersSelfie: null
    };
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

  uploadImage = isSelfie => {
    ImagePicker.showImagePicker(options, response => {
      if (!response.didCancel) {
        const source = { uri: response.uri };

        console.log(response);

        ImageResizer.createResizedImage(response.uri, 400, 300, "JPEG", 80)
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
              .ref("authenticationPhotos/" + filename)
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
                    const allImages = this.state.propertyPhotos;
                    !isSelfie && allImages.push(snapshot.downloadURL);
                    console.log(snapshot.downloadURL);

                    state = {
                      ...state,
                      uploading: false,
                      imgSource: "",
                      imageUri: "",
                      progress: 0,
                      propertyPhotos: allImages,
                      usersSelfie: isSelfie
                        ? snapshot.downloadURL
                        : this.state.usersSelfie
                    };
                  }

                  this.setState(state);
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

  componentWillMount() {
    this.getAuthenticationData();
  }

  getAuthenticationData() {
    const { isOwner, rentalKey, reservationKey } = this.props;

    let isUserOwner = isOwner ? "owner/" : "renter/";

    firebase
      .database()
      .ref(
        "rentals/" +
          rentalKey +
          "/reservations/" +
          reservationKey +
          "/authentication/" +
          isUserOwner
      )
      .once("value", authenticationSnapshot => {
        let authenticationState = authenticationSnapshot.val();

        this.setState(authenticationState);
      });
  }

  doneStepAuthentication() {
    const { isOwner, rentalKey, reservationKey } = this.props;
    const {
      pageIndex,
      currentStartStep,
      currentEndStep,
      propertyPhotos,
      notes,
      usersSelfie
    } = this.state;

    this.setState({ currentStartStep: currentStartStep + 1 });

    let authentication = {
      pageIndex,
      currentStartStep,
      currentEndStep,
      propertyPhotos,
      notes,
      usersSelfie
    };

    let isUserOwner = isOwner ? "owner/" : "renter/";

    firebase
      .database()
      .ref(
        "rentals/" +
          rentalKey +
          "/reservations/" +
          reservationKey +
          "/authentication/" +
          isUserOwner
      )
      .update(authentication);
  }

  render() {
    const { isOwner, reservationKey } = this.props;

    const {
      pageIndex,
      currentStartStep,
      currentEndStep,
      propertyPhotos,
      notes,
      usersSelfie
    } = this.state;

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
                      onPress={() => this.doneStepAuthentication()}
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
                    <View>
                      <View
                        style={[
                          styles.containerPropertyPhotos,
                          { marginBottom: responsiveHeight(2) }
                        ]}
                      >
                        {propertyPhotos.map((item, index) => {
                          return (
                            <View key="index" style={styles.addedPhoto}>
                              <Image
                                key={index}
                                resizeMode="cover"
                                source={{ uri: item }}
                                style={{ flex: 1 }}
                              />
                            </View>
                          );
                        })}
                      </View>

                      <Done />
                    </View>
                  ) : (
                    <View>
                      <Text style={styles.textAuthentication}>
                        Lorem ipsum dolor sit amet, consectetur adipis elit.
                        Fusce vestibulum dapibus dolor sit amet.
                      </Text>

                      <View
                        style={[
                          styles.containerPropertyPhotos,
                          { marginTop: responsiveHeight(2) }
                        ]}
                      >
                        {propertyPhotos.map((item, index) => {
                          return (
                            <View key="index" style={styles.addedPhoto}>
                              <Image
                                key={index}
                                resizeMode="cover"
                                source={{ uri: item }}
                                style={{ flex: 1 }}
                              />
                            </View>
                          );
                        })}

                        {propertyPhotos.length < 3 && (
                          <TouchableOpacity
                            onPress={() => this.uploadImage(false)}
                            style={styles.addPicture}
                          >
                            <Image
                              resizeMode="contain"
                              style={styles.addPictureIcon}
                              source={require("../../assets/images/camera2.png")}
                            />
                          </TouchableOpacity>
                        )}
                      </View>

                      {propertyPhotos.length > 2 && (
                        <TouchableOpacity
                          onPress={() => this.doneStepAuthentication()}
                          style={styles.doneBtn}
                        >
                          <Text style={styles.textDoneBtn}>Done</Text>
                        </TouchableOpacity>
                      )}
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
                        onPress={() => this.doneStepAuthentication()}
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
                    <View>
                      <Text
                        style={[
                          styles.textAuthentication,
                          { marginBottom: responsiveHeight(2) }
                        ]}
                      >
                        "{notes}"
                      </Text>

                      <Done />
                    </View>
                  ) : (
                    <View>
                      <Text style={styles.textAuthentication}>
                        Lorem ipsum dolor sit amet, consectetur adipis elit.
                        Fusce vestibulum dapibus dolor sit amet.
                      </Text>

                      <View style={styles.headerInputNotes}>
                        <Text style={styles.headerInputNotesTitle}>Notes</Text>
                        <Text>{200 - notes.length}</Text>
                      </View>

                      <TextInput
                        ref={rentalNotes => {
                          this.rentalNotesInput = rentalNotes;
                        }}
                        returnKeyType={"done"}
                        placeholder="Input some notes you want to save about the rental."
                        value={notes}
                        onChangeText={notes => this.setState({ notes })}
                        onSubmitEditing={() =>
                          notes.length > 10 && this.nextStep()
                        }
                        maxLength={200}
                        multiline={true}
                        numberOfLines={4}
                        blurOnSubmit
                      />

                      <View style={styles.separatorLine} />

                      {notes.length > 10 && (
                        <TouchableOpacity
                          onPress={() => this.doneStepAuthentication()}
                          style={styles.doneBtn}
                        >
                          <Text style={styles.textDoneBtn}>Done</Text>
                        </TouchableOpacity>
                      )}
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

                      <View
                        style={[
                          styles.containerPropertyPhotos,
                          { marginTop: responsiveHeight(2) }
                        ]}
                      >
                        {usersSelfie !== null && (
                          <View style={styles.addedPhoto}>
                            <Image
                              resizeMode="cover"
                              source={{ uri: usersSelfie }}
                              style={{ flex: 1 }}
                            />
                          </View>
                        )}

                        {usersSelfie == null && (
                          <TouchableOpacity
                            onPress={() => this.uploadImage(true)}
                            style={styles.addPicture}
                          >
                            <Image
                              resizeMode="contain"
                              style={styles.addPictureIcon}
                              source={require("../../assets/images/camera2.png")}
                            />
                          </TouchableOpacity>
                        )}
                      </View>

                      {usersSelfie !== null && (
                        <TouchableOpacity
                          onPress={() => this.doneStepAuthentication()}
                          style={styles.doneBtn}
                        >
                          <Text style={styles.textDoneBtn}>Done</Text>
                        </TouchableOpacity>
                      )}
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

                      {!isOwner ? (
                        <TouchableOpacity
                          onPress={() =>
                            Actions.DisplayQRCode({ key: reservationKey })
                          }
                          style={styles.doneBtn}
                        >
                          <Text style={styles.textDoneBtn}>Show QR code</Text>
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() =>
                            Actions.ScanQR({ key: reservationKey })
                          }
                          style={styles.doneBtn}
                        >
                          <Text style={styles.textDoneBtn}>Scan QR code</Text>
                        </TouchableOpacity>
                      )}
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
