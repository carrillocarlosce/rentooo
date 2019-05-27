/**
 * Yourbalance Screen
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { Action } from "react-native-router-flux";
import styles from "../style/yourbalanceStyle";
import {
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";
import StarView from "../component/Startview";

export default class Yourbalance extends Component {
  constructor(props) {
    super(props);

    this.state = { dollarPrice: 0 };
  }

  componentDidMount() {
    const { data } = this.props;

    this.props.navigation.setParams({
      headerStyle: { backgroundColor: data.color }
    });

    this.getDollarValue();
  }

  async getDollarValue() {
    const { data, balance } = this.props;

    try {
      let response = await fetch(
        "https://api.cryptonator.com/api/ticker/" + data.symbol + "-usd"
      );
      let responseJson = await response.json();
      let valueInDollar = responseJson.ticker.price * balance;

      this.setState({ dollarPrice: valueInDollar });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { data, balance } = this.props;
    const { dollarPrice } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.midContainer}>
          <View style={[styles.topContainer, { backgroundColor: data.color }]}>
            <View style={styles.totopLayout}>
              <View style={styles.containerLogo}>
                <Image
                  resizeMode="contain"
                  style={styles.itemLogo}
                  source={data.logo}
                />
              </View>
              <Text style={styles.rentooText}>{data.name.toUpperCase()}</Text>
            </View>
            <Text style={styles.rentooCurrentyText}>{balance}</Text>
            <Text style={styles.dollarCurrency}>{dollarPrice.toFixed(2)}$</Text>
          </View>

          <Text style={styles.title}>Recent transactions</Text>

          <View style={styles.itemLayout}>
            <Image
              style={styles.checkbox}
              source={require("../../assets/images/hole.png")}
            />
            <View style={styles.itemContainer}>
              <View style={styles.leftItem}>
                <Text style={styles.upperText}>Sent</Text>
                <Text style={styles.inlineText}>21 Apr, 2019</Text>
              </View>
              <View style={styles.rightItem}>
                <Text style={styles.upperText}>-100 000 000.0</Text>
                <Text style={styles.inlineText}>RENTOO</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomline} />

          <View style={styles.itemLayout}>
            <Image
              style={styles.rotateIcons}
              source={require("../../assets/images/hole.png")}
            />
            <View style={styles.itemContainer}>
              <View style={styles.leftItem}>
                <Text style={styles.upperText}>Received</Text>
                <Text style={styles.inlineText}>21 Apr, 2019</Text>
              </View>
              <View style={styles.rightItem}>
                <Text style={styles.upperText}>+88 900 000.0</Text>
                <Text style={styles.inlineText}>RENTOO</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomline} />

          <View style={styles.itemLayout}>
            <Image
              style={styles.checkbox}
              source={require("../../assets/images/hole.png")}
            />
            <View style={styles.itemContainer}>
              <View style={styles.leftItem}>
                <Text style={styles.upperText}>Sent</Text>
                <Text style={styles.inlineText}>19 Apr, 2019</Text>
              </View>
              <View style={styles.rightItem}>
                <Text style={styles.upperText}>-5400.5</Text>
                <Text style={styles.inlineText}>RENTOO</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomline} />

          <View style={styles.itemLayout}>
            <Image
              style={styles.rotateIcons}
              source={require("../../assets/images/hole.png")}
            />
            <View style={styles.itemContainer}>
              <View style={styles.leftItem}>
                <Text style={styles.upperText}>Received</Text>
                <Text style={styles.inlineText}>5 Apr, 2019</Text>
              </View>
              <View style={styles.rightItem}>
                <Text style={styles.upperText}>+100 000 000.0</Text>
                <Text style={styles.inlineText}>RENTOO</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomline} />

          <View style={styles.itemLayout}>
            <Image
              style={styles.checkbox}
              source={require("../../assets/images/hole.png")}
            />
            <View style={styles.itemContainer}>
              <View style={styles.leftItem}>
                <Text style={styles.upperText}>Sent</Text>
                <Text style={styles.inlineText}>2 Apr, 2019</Text>
              </View>
              <View style={styles.rightItem}>
                <Text style={styles.upperText}>-88 900 000.0</Text>
                <Text style={styles.inlineText}>RENTOO</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomline} />

          <View style={styles.itemLayout}>
            <Image
              style={styles.rotateIcons}
              source={require("../../assets/images/hole.png")}
            />
            <View style={styles.itemContainer}>
              <View style={styles.leftItem}>
                <Text style={styles.upperText}>Sent</Text>
                <Text style={styles.inlineText}>2 Apr, 2019</Text>
              </View>
              <View style={styles.rightItem}>
                <Text style={styles.upperText}>-100 000 000.0</Text>
                <Text style={styles.inlineText}>RENTOO</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomline} />

          <View style={styles.itemLayout}>
            <Image
              style={styles.checkbox}
              source={require("../../assets/images/hole.png")}
            />
            <View style={styles.itemContainer}>
              <View style={styles.leftItem}>
                <Text style={styles.upperText}>Sent</Text>
                <Text style={styles.inlineText}>2 Apr, 2019</Text>
              </View>
              <View style={styles.rightItem}>
                <Text style={styles.upperText}>-100 000 000.0</Text>
                <Text style={styles.inlineText}>RENTOO</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomline} />
        </ScrollView>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={[styles.bottomButton, { backgroundColor: "#A3A3BD" }]}
          >
            <Image
              resizeMode="contain"
              style={styles.arrowBalance}
              source={require("../../assets/images/toparrow.png")}
            />
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.bottomButton, { backgroundColor: "#0055FF" }]}
          >
            <Image
              resizeMode="contain"
              style={[styles.arrowBalance, styles.rotateIcons]}
              source={require("../../assets/images/toparrow.png")}
            />
            <Text style={styles.buttonText}>Receive</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
