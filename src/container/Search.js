/**
 * Search Screen
 * 
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Action } from 'react-native-router-flux';
import styles from '../style/searchStyle'
import { SearchBar } from 'react-native-elements';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import StarView from '../component/Startview'
import Rect from '../component/Rect'

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
    }
  }
  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: "#ffffff"}}>
        <View style={styles.container}>
          <Text style={styles.nameText}>Search</Text>

          <View>
            <SearchBar style={styles.formItem} placeholder="Search" placeholderTextColor="#979797" value={this.state.searchString} onChangeText={(searchString) => this.setState({searchString})} />
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnFiltersLayout}>
                <Text style={styles.btnFilterText}>Nearby</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnFiltersLayout}>
                <Text style={styles.btnFilterText}>Dates</Text> 
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnGroupLayout}>
              <Image style={styles.itemGroupImage} source={require('../../assets/images/camera.png')}/>
              <Text style={styles.itemGroupText}>Image{"\n"}& Video</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnGroupLayout2}>
              <Image style={styles.itemGroupImage} source={require('../../assets/images/rocket.png')}/>
              <Text style={styles.itemGroupText}>Tech</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnGroupLayout3}>
              <Image style={styles.itemGroupImage} source={require('../../assets/images/home.png')}/>
              <Text style={styles.itemGroupText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnGroupLayout4}>
              <Image style={styles.itemGroupImage} source={require('../../assets/images/sport.png')}/>
              <Text style={styles.itemGroupText}>Sport</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.interestContainer}>
            <View style={styles.interestHeader}>
              <Text style={styles.text1IterestHeader}>It might interest you</Text>
              <TouchableOpacity>
                <Text style={styles.text2IterestHeader}>Show all</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.interestInsideContainer}>
              <View style={styles.interestRowContainer}>
                <View style={styles.interestImageContainer}>
                  <TouchableOpacity style={styles.itemIterestBtnContainer}>
                      <Image source={require('../../assets/images/canon-camera.png')}/>
                      <View style={styles.rectWhiteColor}></View>
                      <Text style={styles.itemText}>Black Canon Film{"\n"}Camera</Text>
                      <View style={styles.currencyWrapper}>
                        <Text style={styles.currencyText}>15$/day</Text>
                        <View style={styles.currencyContainer}>
                          <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/rentoo.png')}/>
                          <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/bitcoin.png')}/>
                          <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/waves.png')}/>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.starLayout}>
                      <StarView score={4} style={styles.starView} />
                      <Text style={styles.starText}>13</Text>
                    </View>
                </View>
                <View style={styles.interestImageContainer}>
                  <TouchableOpacity style={styles.itemIterestBtnContainer}>
                      <Image source={require('../../assets/images/canon-camera.png')}/>
                      <View style={styles.rectWhiteColor}></View>
                      <Text style={styles.itemText}>Black Canon Film{"\n"}Camera</Text>
                      <View style={styles.currencyWrapper}>
                        <Text style={styles.currencyText}>15$/day</Text>
                        <View style={styles.currencyContainer}>
                          <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/rentoo.png')}/>
                          <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/bitcoin.png')}/>
                          <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/waves.png')}/>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.starLayout}>
                      <StarView score={4} style={styles.starView} />
                      <Text style={styles.starText}>13</Text>
                    </View>
                </View>
              </View>
              <View style={styles.interestRowContainer}>
                <View style={styles.interestImageContainer}>
                  <TouchableOpacity style={styles.itemIterestBtnContainer}>
                      <Image source={require('../../assets/images/canon-camera.png')}/>
                      <View style={styles.rectWhiteColor}></View>
                      <Text style={styles.itemText}>Black Canon Film{"\n"}Camera</Text>
                      <View style={styles.currencyWrapper}>
                        <Text style={styles.currencyText}>15$/day</Text>
                        <View style={styles.currencyContainer}>
                          <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/rentoo.png')}/>
                          <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/bitcoin.png')}/>
                          <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/waves.png')}/>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.starLayout}>
                      <StarView score={4} style={styles.starView} />
                      <Text style={styles.starText}>13</Text>
                    </View>
                </View>
                <View style={styles.interestImageContainer}>
                  <TouchableOpacity style={styles.itemIterestBtnContainer}>
                      <Image source={require('../../assets/images/canon-camera.png')}/>
                      <View style={styles.rectWhiteColor}></View>
                      <Text style={styles.itemText}>Black Canon Film{"\n"}Camera</Text>
                      <View style={styles.currencyWrapper}>
                        <Text style={styles.currencyText}>15$/day</Text>
                        <View style={styles.currencyContainer}>
                          <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/rentoo.png')}/>
                          <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/bitcoin.png')}/>
                          <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/waves.png')}/>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.starLayout}>
                      <StarView score={4} style={styles.starView} />
                      <Text style={styles.starText}>13</Text>
                    </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.interestContainer}>
            <View style={styles.interestHeader}>
              <Text style={styles.text1IterestHeader}>Popular on Rentoo</Text>
              <TouchableOpacity>
                <Text style={styles.text2IterestHeader}>Show all</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.interestInsideContainer}>
              <View style={styles.interestRowContainer}>
                <View style={styles.interestImageContainer}>
                  <TouchableOpacity style={styles.itemIterestBtnContainer}>
                      <Image source={require('../../assets/images/canon-camera.png')}/>
                      <View style={styles.rectWhiteColor}></View>
                      <Text style={styles.itemText}>Black Canon Film{"\n"}Camera</Text>
                      <View style={styles.currencyWrapper}>
                        <Text style={styles.currencyText}>15$/day</Text>
                        <View style={styles.currencyContainer}>
                          <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/rentoo.png')}/>
                          <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/bitcoin.png')}/>
                          <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/waves.png')}/>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.starLayout}>
                      <StarView score={4} style={styles.starView} />
                      <Text style={styles.starText}>13</Text>
                    </View>
                </View>
                <View style={styles.interestImageContainer}>
                  <TouchableOpacity style={styles.itemIterestBtnContainer}>
                      <Image source={require('../../assets/images/canon-camera.png')}/>
                      <View style={styles.rectWhiteColor}></View>
                      <Text style={styles.itemText}>Black Canon Film{"\n"}Camera</Text>
                      <View style={styles.currencyWrapper}>
                        <Text style={styles.currencyText}>15$/day</Text>
                        <View style={styles.currencyContainer}>
                          <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/rentoo.png')}/>
                          <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/bitcoin.png')}/>
                          <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/waves.png')}/>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.starLayout}>
                      <StarView score={4} style={styles.starView} />
                      <Text style={styles.starText}>13</Text>
                    </View>
                </View>
              </View>
              <View style={styles.interestRowContainer}>
                <View style={styles.interestImageContainer}>
                  <TouchableOpacity style={styles.itemIterestBtnContainer}>
                      <Image source={require('../../assets/images/canon-camera.png')}/>
                      <View style={styles.rectWhiteColor}></View>
                      <Text style={styles.itemText}>Black Canon Film{"\n"}Camera</Text>
                      <View style={styles.currencyWrapper}>
                        <Text style={styles.currencyText}>15$/day</Text>
                        <View style={styles.currencyContainer}>
                          <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/rentoo.png')}/>
                          <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/bitcoin.png')}/>
                          <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/waves.png')}/>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.starLayout}>
                      <StarView score={4} style={styles.starView} />
                      <Text style={styles.starText}>13</Text>
                    </View>
                </View>
                <View style={styles.interestImageContainer}>
                  <TouchableOpacity style={styles.itemIterestBtnContainer}>
                      <Image source={require('../../assets/images/canon-camera.png')}/>
                      <View style={styles.rectWhiteColor}></View>
                      <Text style={styles.itemText}>Black Canon Film{"\n"}Camera</Text>
                      <View style={styles.currencyWrapper}>
                        <Text style={styles.currencyText}>15$/day</Text>
                        <View style={styles.currencyContainer}>
                          <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/rentoo.png')}/>
                          <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/bitcoin.png')}/>
                          <Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/waves.png')}/>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.starLayout}>
                      <StarView score={4} style={styles.starView} />
                      <Text style={styles.starText}>13</Text>
                    </View>
                </View>
              </View>
            </View>
          </View>
        </View>
          
      </ScrollView>
    );
  }
}


