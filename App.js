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
import Search from './src/container/Search';
import Dashboard from './src/container/Dashboard';
import Upcoming from './src/container/Upcoming';
import Past from './src/container/Past';
import Watchlist from './src/container/Watchlist';
import Myoffers from './src/container/Myoffers';
import Wallets from './src/container/Wallets';
import Yourbalance from './src/container/Yourbalance';

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
          <Scene key="Code" component={Code} title="Code" />
          <Scene key="Search" component={Search} title="Search" />
          <Scene key="Dashboard" component={Dashboard} title="Dashboard"  />
          <Scene key="Upcoming" component={Upcoming} title="Upcoming"  />
          <Scene key="Past" component={Past} title="Past"  />
          <Scene key="Watchlist" component={Watchlist} title="Watchlist"  />
          <Scene key="Myoffers" component={Myoffers} title="My offers"  />
          <Scene key="Wallets" component={Wallets} title="Wallets" />
          <Scene key="Yourbalance" component={Yourbalance} title="Yourbalance" initial  />
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
