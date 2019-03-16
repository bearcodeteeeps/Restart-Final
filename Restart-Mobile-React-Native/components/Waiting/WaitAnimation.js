import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Animated } from 'react-native';
import { Image } from 'react-native-elements';
import spinner from '../../assets/images/spin-logo-restart.png';

export default class animatedbasic extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }
  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 30000
    }).start();
  }

  render() {
    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0rad', '10rad']
    });
    const animatedStyle = {
      transform: [{ rotate: interpolateRotation }]
    };
    return (
      <View style={styles.container}>
        <Animated.View style={[animatedStyle]}>
          <Image style={styles.imageContainer} source={spinner} />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  imageContainer: {
    flex: 1,
    resizeMode: 'contain',
    height: 100,
    width: 100
  },
  text: {
    color: 'white'
  }
});

AppRegistry.registerComponent('animatedbasic', () => animatedbasic);
