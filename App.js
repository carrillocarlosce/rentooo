/**
 * RENTOO React Native App
 * 
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
import { Router, Scene, ActionConst, Actions, Tabs } from 'react-native-router-flux';
import Welcome from './src/container/Welcome';
import Login from './src/container/Login';
import Forgot from './src/container/Forgot';
import Signup from './src/container/Signup';
import Name from './src/container/Name';
import Number from './src/container/Number';
import Code from './src/container/Code';
import Search from './src/container/Search';
import Searchresult from './src/container/Searchresult';
import Dashboard from './src/container/Dashboard';
import Upcoming from './src/container/Upcoming';
import Past from './src/container/Past';
import Watchlist from './src/container/Watchlist';
import Myoffers from './src/container/Myoffers';
import Wallets from './src/container/Wallets';
import Yourbalance from './src/container/Yourbalance';
import Inbox from './src/container/Inbox';
import Inboxdetails from './src/container/Inboxdetails';
import Profiledetails from './src/container/Profiledetails';
import Profile from './src/container/Profile';

import styles from './src/style/appStyle'

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

export default class App extends Component{
  render() {
    return (
      <Router navigationBarStyle={{ borderBottomColor: 'transparent' }}>
        <Scene key="root">
          
          <Scene key="Welcome" component={Welcome} title="Welcome" hideNavBar={true} initial />
          <Scene key="Login" 
            renderLeftButton={
              <TouchableOpacity onPress={()=>Actions.pop()}>
                <Image style={styles.leftBtn} source={require('./assets/images/back3x.png')}/>
              </TouchableOpacity>
            }
            component={Login} backTitle=" "
          />
          <Scene key="Forgot" 
            component={Forgot} 
            backTitle=" "
            renderLeftButton={
              <TouchableOpacity onPress={()=>Actions.pop()}>
                <Image style={styles.leftBtn} source={require('./assets/images/back3x.png')}/>
              </TouchableOpacity>
            }
          />
          <Scene key="Signup" 
            component={Signup} 
            backTitle=" "
            renderLeftButton={
              <TouchableOpacity onPress={()=>Actions.pop()}>
                <Image style={styles.leftBtn} source={require('./assets/images/back3x.png')}/>
              </TouchableOpacity>
            }
            renderRightButton = {() => 
              <Text style={styles.rightSignupBtn}>1 of 4</Text>
            } 
          />

          <Scene key="Name" 
            component={Name} 
            renderLeftButton={
              <TouchableOpacity onPress={()=>Actions.pop()}>
                <Image style={styles.leftBtn} source={require('./assets/images/back3x.png')}/>
              </TouchableOpacity>
            }
            renderRightButton = {() => 
              <Text style={styles.rightSignupBtn}>2 of 4</Text>
            } 
          />
          <Scene key="Number" 
            component={Number} 
            renderLeftButton={
              <TouchableOpacity onPress={()=>Actions.pop()}>
                <Image style={styles.leftBtn} source={require('./assets/images/back3x.png')}/>
              </TouchableOpacity>
            }
            renderRightButton = {() => 
              <Text style={styles.rightSignupBtn}>3 of 4</Text>
            } 
          />
          <Scene key="Code" 
            component={Code} 
            renderLeftButton={
              <TouchableOpacity onPress={()=>Actions.pop()}>
                <Image style={styles.leftBtn} source={require('./assets/images/back3x.png')}/>
              </TouchableOpacity>
            }
            renderRightButton = {() => 
              <Text style={styles.rightSignupBtn}>4 of 4</Text>
            } 
          />

          <Scene key="Search" 
            component={Search} 
            renderLeftButton={
              <TouchableOpacity onPress={()=>Actions.pop()}>
                <Image style={styles.leftBtn} source={require('./assets/images/back3x.png')}/>
              </TouchableOpacity>
            }
          />
          <Scene key="Searchresult" 
            component={Searchresult} 
            renderLeftButton={
              <TouchableOpacity onPress={()=>Actions.pop()}>
                <Image style={styles.leftBtn} source={require('./assets/images/back3x.png')}/>
              </TouchableOpacity>
            }
            renderRightButton = {() => 
              <Image style={styles.plusBtn} source={require('./assets/images/map3x.png')}/>
            } 
          />
          <Scene key="Dashboard" component={Dashboard}/>
          <Scene key="Upcoming" component={Upcoming}  />
          <Scene key="Past" component={Past} />
          <Scene key="Watchlist" component={Watchlist} />
          <Scene key="Myoffers" component={Myoffers} />
          <Scene key="Wallets" component={Wallets} />
          <Scene key="Yourbalance" 
            component={Yourbalance} 
            title="Your balance" 
            titleStyle={{color: "white"}} 
            navigationBarStyle={{ backgroundColor: '#0055FF'}}
            renderLeftButton={
              <TouchableOpacity onPress={()=>Actions.pop()}>
                <Image style={styles.leftBtn} source={require('./assets/images/left.png')}/>
              </TouchableOpacity>
            }
          />
          <Scene key="Inbox" component={Inbox} />
          <Scene key="Inboxdetails" component={Inboxdetails} title="Paulina Gayoso"/>
          <Scene key="Profile" component={Profile} />

          <Scene key="dashboardContainerScreen" hideNavBar={true}>
            <Tabs
              key="dashboardContainerTabs"
              swipeEnabled
              showLabel={false}
              tabBarPosition='bottom'
              hideNavBar={true}
              >
                <Scene key={"Search1"} 
                  component={Search} 
                  hideNavBar={false} 
                  title="" 
                  renderRightButton = {() => 
                    <Image style={styles.plusBtn} source={require('./assets/images/plus.png')}/>
                  } 
                  icon={()=><Image source={require('./assets/images/tab1.png')}/>} 
                />
                <Scene 
                  key="Dashboard2" 
                  component={Dashboard} 
                  hideNavBar={false} 
                  renderRightButton = {() => 
                    <Image style={styles.plusBtn} source={require('./assets/images/bell.png')}/>
                  } 
                  icon={()=>(<Image source={require('./assets/images/tab2.png')}/>)} 
                />
                <Scene
                  key="Wallets2" 
                  component={Wallets} 
                  hideNavBar={false}
                  renderRightButton = {() => 
                    <Image style={styles.plusBtn} source={require('./assets/images/add-wallet.png')}/>
                  }  
                  icon={()=>(<Image source={require('./assets/images/tab3.png')}/>)} 
                />
                <Scene 
                  key="Inbox2" 
                  component={Inbox} 
                  hideNavBar={false} 
                  renderRightButton = {() => 
                    <Image style={styles.plusBtn} source={require('./assets/images/box.png')}/>
                  } 
                  icon={()=>(<Image source={require('./assets/images/tab4.png')}/>)} 
                />
                <Scene 
                  key="Profile" 
                  component={Profile} 
                  hideNavBar={false} 
                  renderRightButton = {() => 
                    <Image style={styles.plusBtn} source={require('./assets/images/setting.png')}/>
                  } 
                  icon={()=>(<Image source={require('./assets/images/tab5.png')}/>)} 
                />
              </Tabs>
          </Scene>
          
        </Scene>
      </Router>
    );
  }
}

