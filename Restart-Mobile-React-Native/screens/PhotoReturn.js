import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import { Button, Card, Image, Text } from 'react-native-elements';
import MainHeader from '../components/MainHeader.js';
import headerImage from '../assets/images/gradient_header_restart.png';
import CompostBin from '../assets/images/bins/compost_bin.png';
import RecycleBin from '../assets/images/bins/recycle_bin.png';
import LandfillBin from '../assets/images/bins/landfill_bin.png';
import HazardBin from '../assets/images/bins/hazard_bin.png';

export default class PhotoReturn extends React.Component {
  static navigationOptions = {
    title: 'Item Details'
  };

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

  _storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log(error);
    }
  };

  //At this point REDUX or CONTEXT API should be used to manage changes on the state and trigger all components again
  getUpdatedCoupon = () => {
    const { navigate } = this.props.navigation;
    const user_id = this.state.coupons[0].user_id;
    fetch(
      `http://172.46.1.207:3000/coupons?user_id=${user_id}
      }`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          // points: data.points,
          coupons: data
        });
        const coupons = JSON.stringify(this.state.coupons);
        // const points = this.state.points.toString();
        this._storeData('coupons', coupons);
        // this._storeData('points', points);
        navigate('Rewards');
      })
      .catch(err => {
        console.log('Err', err);
        this.setState({
          points: '',
          coupons: []
        });
      });
  };

  getBinImage(type) {
    switch (type) {
      case 'Recycle':
        return RecycleBin;
        break;
      case 'Compost':
        return CompostBin;
        break;
      case 'Hazardous':
        return HazardBin;
        break;
      case 'Landfill':
        return LandfillBin;
        break;
      default:
        return '?';
        break;
    }
  }

  render() {
    const { data } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={headerImage}
          style={styles.backgroundContainer}
          PlaceholderContent={<ActivityIndicator />}
        >
          <MainHeader />
        </ImageBackground>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Card containerStyle={{ width: 300, padding: 12 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center'
              }}
            >
              <Image
                source={{ uri: data.photo }}
                style={{ width: 200, height: 200, marginBottom: 10 }}
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text
                style={{
                  marginBottom: 10,
                  fontWeight: 'bold'
                }}
              >
                Details based on your photo
              </Text>
            </View>

            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-around'
                }}
              >
                <Text>
                  <Text style={{ fontWeight: 'bold' }}>Brand: </Text>
                  {data.brand}
                </Text>
                <Text>
                  <Text style={{ fontWeight: 'bold' }}>Type of Item: </Text>
                  {data.item_type}
                </Text>
                <Text>
                  <Text style={{ fontWeight: 'bold' }}>Category: </Text>
                  {data.recyclable}
                </Text>
                <Text style={styles.baseText}>Edit/Update</Text>
                <Text style={styles.baseText}>
                  {' '}
                  <Text style={{ color: '#FF6137', fontWeight: 'bold' }}>
                    *Bonus points for corrections*
                  </Text>
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center'
                }}
              >
                <Text>Points</Text>
                <Text>200</Text>
                <Image
                  source={this.getBinImage(data.recyclable)}
                  style={{ width: 65, height: 85 }}
                />
                <Button
                  title="Confirm"
                  onPress={() => this.getUpdatedCoupon()}
                  buttonStyle={{
                    backgroundColor: '#01A388',
                    borderRadius: 20,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginTop: 5
                  }}
                />
              </View>
            </View>
          </Card>
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
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  },
  baseText: {
    fontSize: 10
  }
});
