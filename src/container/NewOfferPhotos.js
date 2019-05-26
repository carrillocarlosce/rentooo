/**
 * Yourbalance Screen
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { Actions } from "react-native-router-flux";
import {
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";
import ImagePicker from "react-native-image-picker";
import ImageResizer from "react-native-image-resizer";
import RNFetchBlob from "react-native-fetch-blob";
import firebase from "react-native-firebase";

import styles from "../style/newOfferStyle";

function uploadImage(uri, mime = "application/octet-stream") {
  const Blob = RNFetchBlob.polyfill.Blob;
  const fs = RNFetchBlob.fs;
  window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
  window.Blob = Blob;
  const currentTimeStamp = new Date().getTime() + ".png";

  return new Promise((resolve, reject) => {
    const uploadUri = Platform.OS === "ios" ? uri.replace("file://", "") : uri;
    let uploadBlob = null;
    const imageRef = firebase
      .storage()
      .ref("rentalsImages")
      .child(`${currentTimeStamp}`);

    fs.readFile(uploadUri, "base64")
      .then(data => {
        console.log(data);
        return Blob.build(data, { type: `${mime};BASE64` });
      })
      .then(blob => {
        uploadBlob = blob;
        return imageRef.put(blob, { contentType: mime });
      })
      .then(() => {
        uploadBlob.close();
        return imageRef.getDownloadURL();
      })
      .then(url => {
        resolve(url);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export default class NewOfferPhotos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isImageupload: false,
      rentalImages: []
    };
    this.uploadImageAsync = this.uploadImageAsync.bind(this);
  }

  componentDidMount() {}

  pickImagefromGallery = async () => {
    let options = {
      mediaType: "photo",
      quality: 1,
      allowsEditing: true,
      aspect: [4, 3]
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (!response.didCancel) {
        ImageResizer.createResizedImage(response.uri, 500, 500, "JPEG", 80)
          .then(({ uri }) => {
            this.uploadImageAsync(uri);
            this.setState({ isImageupload: true });
          })
          .catch(err => {
            console.log("error=", err);
          });
      }
    });
  };

  async uploadImageAsync(uri) {
    this.setState({ isImageupload: true });
    uploadImage(uri)
      .then(url => {
        imagesList[0] = url;
        this.setState({ isImageupload: false, rentalImages: url });
        dismissKeyboard();
      })
      .catch(error => console.warn(error));
  }

  nextStep() {
    const { newRentalItem } = this.props;
    console.log(newRentalItem);
    Actions.NewOfferCategories({ newRentalItem: newRentalItem });
  }

  render() {
    const { title, summary } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>Add photos</Text>
          <Text style={styles.pageInstructions}>
            Highlight your offer with one, two or three photos.
          </Text>
        </View>

        <View style={styles.addPicture}>
          <Image
            resizeMode="contain"
            style={styles.addPictureIcon}
            source={require("../../assets/images/camera2.png")}
          />
        </View>

        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => this.nextStep()}
        >
          <Text style={styles.textBtnNext}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
