import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  View,
  StyleSheet
} from 'react-native';
import { Image, Button, Text, Card } from 'react-native-elements';
import Barcode from 'react-native-barcode-builder';

export default class CouponCard extends React.Component {
  constructor() {
    super();
    this.state = {
      coupons: []
    };
  }

  componentDidMount() {
    this._retrieveCoupons('coupons');
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

  renderCoupons = () => {
    const { coupons } = this.state;
    return coupons.map((coupon, index) => {
      return (
        <View key={index} style={styles.card}>
          <Card containerStyle={{ width: 300, padding: 12 }}>
            <View style={styles.containerImage}>
              <Image
                source={{ uri: coupon.logo }}
                style={styles.brand}
                PlaceholderContent={<ActivityIndicator />}
              />
              <Barcode
                value={coupon.barcode}
                format="CODE128"
                text={coupon.expiry_date}
              />
            </View>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text
                style={{ fontSize: 32, fontWeight: 'bold', color: '#FF6137' }}
              >
                ${coupon.amount} off
              </Text>
              <Text>Code: {coupon.barcode}</Text>
            </View>

            <Button
              title="Mark Used"
              onPress={this.handleLogin}
              buttonStyle={{
                backgroundColor: '#01A388',
                borderRadius: 40,
                marginLeft: 60,
                marginRight: 60,
                marginBottom: 0,
                marginTop: 20
              }}
            />
          </Card>
        </View>
      );
    });
  };

  render() {
    return this.renderCoupons();
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  containerImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  brand: {
    flex: 1,
    height: 100,
    width: 100,
    resizeMode: 'contain'
  }
});
