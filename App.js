/**
 * RENTOO React Native App
 * 
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet} from 'react-native';
import { Router, Scene, ActionConst, Actions } from 'react-native-router-flux';
import Welcome from './src/container/Welcome';
import Login from './src/container/Login';
import Forgot from './src/container/Forgot';
import Signup from './src/container/Signup';
import Name from './src/container/Name';
import Number from './src/container/Number';
import Code from './src/container/Code';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Welcome" component={Welcome} title="Welcome" hideNavBar={true} />
          <Scene key="Login" component={Login} title="Login" />
          <Scene key="Forgot" component={Forgot} title="Forgot" />
          <Scene key="Signup" component={Signup} title="Signup" />
          <Scene key="Name" component={Name} title="Name" />
          <Scene key="Number" component={Number} title="Number" />
          <Scene key="Code" component={Code} title="Code" initial />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
