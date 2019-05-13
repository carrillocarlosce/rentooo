/**
 * Inbox Screen
 * 
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Action } from 'react-native-router-flux';
import styles from '../style/inboxStyle'
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import StarView from '../component/Startview'

export default class Inbox extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
			<View style={styles.container}>
				<Text style={styles.inboxText}>Inbox</Text>
                
        <ScrollView style={styles.midContainer}>
          
          <View style={styles.itemLayout}>
            <Image style={styles.checkbox} source={require('../../assets/images/profile.png')}/>
            <View style={styles.itemContainer}>
              <View style={styles.upperItem}>
                <Text style={styles.upperText}>Paulina Gayoso</Text>
                <Text style={styles.upperText}>Pending</Text>
							</View>
							<Text style={styles.inlineBlackText}>22 to 24 Apr, 2019</Text>
							 <View style={styles.upperItem}>
								<Text style={styles.inlineText}>Lorem ipsum dolor sit ametco...</Text>
                <Text style={styles.inlineText}>9:41</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomline}/>
          
          <View style={styles.itemLayout}>
            <Image style={styles.checkbox} source={require('../../assets/images/profile.png')}/>
            <View style={styles.itemContainer}>
              <View style={styles.upperItem}>
                <Text style={styles.upperText}>Santiago Valetin</Text>
                <Text style={styles.upperText}>Confirmed</Text>
							</View>
							<Text style={styles.inlineBlackText}>21 to 23 Apr, 2019</Text>
							 <View style={styles.upperItem}>
								<Text style={styles.inlineText}>Lorem ipsum dolor sit ametco...</Text>
                <Text style={styles.inlineText}>21 Apr, 2019</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomline}/>
          
          <View style={styles.itemLayout}>
            <Image style={styles.checkbox} source={require('../../assets/images/profile.png')}/>
            <View style={styles.itemContainer}>
              <View style={styles.upperItem}>
                <Text style={styles.upperText}>Ashley Sarasvati</Text>
                <Text style={styles.upperText}>Canceled</Text>
							</View>
							<Text style={styles.inlineBlackText}>21 to 23 Apr, 2019</Text>
							 <View style={styles.upperItem}>
								<Text style={styles.inlineText}>Lorem ipsum dolor sit ametco...</Text>
                <Text style={styles.inlineText}>19 Apr, 2019</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomline}/>
          
          <View style={styles.itemLayout}>
            <Image style={styles.checkbox} source={require('../../assets/images/profile.png')}/>
            <View style={styles.itemContainer}>
              <View style={styles.upperItem}>
                <Text style={styles.upperText}>Kevin Noboa</Text>
                <Text style={styles.upperText}>Completed</Text>
							</View>
							<Text style={styles.inlineBlackText}>03 to 11 Apr, 2019</Text>
							 <View style={styles.upperItem}>
								<Text style={styles.inlineText}>Lorem ipsum dolor sit ametco...</Text>
                <Text style={styles.inlineText}>11 Apr, 2019</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomline}/>

        </ScrollView>
      </View>
      
    );
  }
}


