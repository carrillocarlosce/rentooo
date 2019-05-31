import * as React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions
} from "react-native";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

import Upcoming from "./Upcoming";
import Past from "./Past";
import Watchlist from "./Watchlist";
import Myoffers from ".//Myoffers";
import styles from "../style/dashboardStyle";

const width = Dimensions.get("window").width;

const itemTab = [
  { title: "Upcoming" },
  { title: "Past" },
  { title: "Watchlist" },
  { title: "My offers" }
];

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 0
    };
  }

  onTabClicked(flag) {
    const { pageIndex } = this.state;
    if (flag === 0) this.swiper.scrollTo({ x: 0, y: 0, animated: true });
    if (flag === 1) this.swiper.scrollTo({ x: width, y: 0, animated: true });
    if (flag === 2)
      this.swiper.scrollTo({ x: width * 2, y: 0, animated: true });
    if (flag === 3)
      this.swiper.scrollTo({ x: width * 3, y: 0, animated: true });

    this.setState({ pageIndex: flag });
  }

  ref = el => {
    this.swiper = el;
  };

  handlePageChange = e => {
    var offset = e.nativeEvent.contentOffset;
    if (offset) {
      const page = Math.round(offset.x / width);

      if (this.state.pageIndex != page) {
        this.setState({ pageIndex: page });
      }
    }
  };

  render() {
    const { pageIndex } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.nameText}>Rental dashboard</Text>

        <View style={styles.segmentContainer}>
          {itemTab.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{ marginRight: responsiveWidth(5) }}
                onPress={() => this.onTabClicked(index)}
              >
                <View style={styles.segmentItemContainer}>
                  <Text
                    style={[
                      pageIndex === index
                        ? styles.textTabActive
                        : styles.textTabUnactive
                    ]}
                  >
                    {item.title}
                  </Text>
                  <View
                    style={
                      pageIndex === index
                        ? styles.viewUnderlineActive
                        : styles.viewUnderlineInactive
                    }
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <ScrollView
          ref={snapScroll => {
            this.swiper = snapScroll;
          }}
          horizontal
          pagingEnabled
          onMomentumScrollEnd={this.handlePageChange}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.containerItemTab}>
            <Upcoming />
          </View>
          <View style={styles.containerItemTab}>
            <Past />
          </View>
          <View style={styles.containerItemTab}>
            <Watchlist />
          </View>
          <View style={styles.containerItemTab}>
            <Myoffers />
          </View>
        </ScrollView>
      </View>
    );
  }
}
