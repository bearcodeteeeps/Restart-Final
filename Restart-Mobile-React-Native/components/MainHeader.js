import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, Image } from 'react-native';
import Logo from '../assets/images/restart_logo_header.png';

export default class MainHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      points: '',
      coupons: []
    };
  }

  componentDidMount() {
    this._retrieveCoupons('coupons');
    this._retrievePoints('points');
  }

  _retrieveCoupons = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        this.setState({
          [key]: JSON.parse(value)
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  _retrievePoints = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        this.setState({
          [key]: value
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { points, coupons } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image style={styles.image} source={Logo} />
        </View>
        <View style={styles.containerContent}>
          <View style={styles.containerHead}>
            <Text style={styles.coupons}>Coupons</Text>
            <Text>Points</Text>
          </View>
          <View style={styles.containerData}>
            <Text style={styles.textData}>{coupons.length}</Text>
            <Text style={styles.textData}>{points}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 15
  },
  containerImage: {
    flex: 1,

    paddingRight: 10
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'contain'
  },
  containerContent: {
    marginLeft: 10
  },
  containerHead: {
    flex: 0.3,
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    marginTop: 16
  },
  coupons: {
    marginLeft: 30
  },
  containerData: {
    flex: 0.7,
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  textData: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 20
  }
});
