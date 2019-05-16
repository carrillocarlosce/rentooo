import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from '../component/TabView';
import Upcoming from './Upcoming';
import Past from './Past';
import Watchlist from './Watchlist';
import Myoffers from './/Myoffers';
import styles from '../style/dashboardStyle';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#FF00FF' }]} />
);
const FourthRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#FF00FF' }]} />
);

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Upcoming' },
      { key: 'second', title: 'Past' },
      { key: 'third', title: 'Watchlist' },
      { key: 'fourth', title: 'My offers' },
    ],
  };

  render() {
    return (
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: Upcoming,
            second: Past,
            third: Watchlist,
            fourth: Myoffers,
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
        />
    );
  }
}

