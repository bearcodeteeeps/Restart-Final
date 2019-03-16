import React from 'react';
import { ImageBackground, View, ScrollView, StyleSheet } from 'react-native';
import MainHeader from '../components/MainHeader';
import headerImage from '../assets/images/gradient_header_restart.png';
import CouponCard from '../components/Rewards/Coupons';

export default class RewardsScreen extends React.Component {
  static navigationOptions = {
    title: 'Rewards'
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={headerImage}
          style={styles.backgroundContainer}
        >
          <MainHeader />
        </ImageBackground>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.overall}
        >
          <CouponCard />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 2
  },
  backgroundContainer: {
    flex: 0.3,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0
  },
  overall: {
    flexDirection: 'column',
    alignItems: 'center'
  }
});
