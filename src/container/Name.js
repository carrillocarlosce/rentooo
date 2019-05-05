/**
 * Name Screen
 * 
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import { Action } from 'react-native-router-flux';
import styles from '../style/nameStyle'

export default class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: ""
    }
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: "#ffffff"}}>
        <View style={styles.container}>

          <Text style={styles.nameText}>What's your name ?</Text>

          <View style={styles.formLayout}>
            <TextInput style={styles.formItem} placeholder="First name" placeholderTextColor="#979797" value={this.state.firstName} onChangeText={(firstName) => this.setState({firstName})} />
            <TextInput style={styles.formItem} placeholder="Last name" value={this.state.lastName} onChangeText={(lastName) => this.setState({lastName})}/>
          </View>
          <View>
            <TouchableOpacity style={styles.btnNextLayout}>
                <Text style={styles.btnNextText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}


