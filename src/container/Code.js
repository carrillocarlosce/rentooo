/**
 * Code Screen
 * 
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import { Action } from 'react-native-router-flux';
import styles from '../style/codeStyle'

export default class Code extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
    }
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: "#ffffff"}}>
        <View style={styles.container}>

          <Text style={styles.codeText}>Verify Code</Text>
          <Text style={styles.recieveText}>You're receiving a text on the number you just entered with a verification code.</Text>

          <View style={styles.formLayout}>
            <TextInput style={styles.formItem} placeholder="Code" placeholderTextColor="#979797" value={this.state.code} onChangeText={(code) => this.setState({code})} />
            <TouchableOpacity style={styles.resendTextBtn}>
              <Text style={styles.resendText}>Resend code</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.btnVerifyLayout}>
                <Text style={styles.btnVerifyText}>Verify</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}


