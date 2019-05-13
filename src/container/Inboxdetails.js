/**
 * Inboxdetails Screen
 * 
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Action } from 'react-native-router-flux';
import styles from '../style/inboxdetailStyle'
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import StarView from '../component/Startview'

export default class Inboxdetails extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
			<View style={styles.container}>
        <ScrollView style={styles.midContainer}>
          
					<View>
						<View style={styles.messengerRightContainer}>
							<Text style={styles.messgengerRightPart}>
								Lorem ipsum dolor sit amet,{"\n"}
								consectetur adipiscing elit.{"\n"}
								Quisque sodales lorem elit,{"\n"}
								quis gravida orci feugiat
							</Text>
							<Text style={styles.messgengerRightName}>Anje Keizer - 9:36 </Text>
						</View>
					</View>
						
					
					<View style={styles.messengerLeftLayout}>
					<Image style={styles.imageLeft} source={require('../../assets/images/profile.png')}/>
					<View style={styles.messengerLeftContainer}>
						<Text style={styles.messgengerLeftPart}>
							Lorem ipsum dolor sit amet,{"\n"}
							consectetur adipiscing elit.{"\n"}
							Quisque sodales lorem elit
						</Text>
						<Text style={styles.messgengerLeftName}>Paulina Gayoso - 9:38</Text>
					</View>
				</View>
          
				</ScrollView>

				<View style={styles.bottomContainer}>
					<TextInput style={styles.textinput} />
					<View style={styles.buttonBottomLayout}>
						<View style={styles.leftbtn}>
							<TouchableOpacity>
								<Image source={require('../../assets/images/camera2.png')}/>
							</TouchableOpacity>
							<TouchableOpacity>
								<Image source={require('../../assets/images/picture.png')}/>
							</TouchableOpacity>
						</View>
						
						<TouchableOpacity>
							<Text style={styles.sendBtnText}>Send</Text>
						</TouchableOpacity>
					</View>
				</View>

      </View>
      
    );
  }
}


