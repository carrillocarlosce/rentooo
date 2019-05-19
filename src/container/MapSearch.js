/**
 * Code Screen
 * 
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import { Actions } from 'react-native-router-flux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import styles from '../style/codeStyle'

export default class MapSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
    }
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: "#ffffff"}}>
        <MapView
          style={{flex: 1}}
          region={{
            latitude: 42.882004,
            longitude: 74.582748,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          showsUserLocation={true}
        />
      </View>
    );
  }
}


