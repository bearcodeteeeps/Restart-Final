import React from 'react';
import { AsyncStorage, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Card, Button } from 'react-native-elements';

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      points: '',
      coupons: []
    };
  }

  _storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log(error);
    }
  };

  handleLogin = user => {
    fetch('http://172.46.1.207:3000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        const data = JSON.parse(res._bodyInit);
        this.setState({
          points: data.points,
          coupons: data.coupons
        });
        const coupons = JSON.stringify(this.state.coupons);
        const points = this.state.points.toString();
        this._storeData('coupons', coupons);
        this._storeData('points', points);
        this.props.navigate('Home', { data: this.state });
      })
      .catch(err => {
        console.log('Err', err);
        this.setState({
          points: '',
          coupons: []
        });
      });
  };

  render() {
    const auth = {
      email: 'lucas',
      password: 'asdf'
    };
    return (
      <View style={styles.card}>
        <Card title={'Login'} containerStyle={{ width: 250, padding: 12 }}>
          <View style={{ marginBottom: 10 }}>
            <Input
              placeholder="  Email"
              leftIcon={<Icon name="user" size={24} color="black" />}
            />
            <Input
              secureTextEntry={true}
              placeholder="  Password"
              leftIcon={<Icon name="lock" size={24} color="black" />}
            />
            <Button
              title="Login"
              onPress={() => this.handleLogin(auth)}
              buttonStyle={{
                backgroundColor: '#01A388',
                borderRadius: 20,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                marginTop: 20
              }}
            />
            <View style={styles.password}>
              <Text style={styles.lost}>Forgot Password</Text>
            </View>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    flex: 1,
    marginTop: 78,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  lost: {
    color: '#FF6137',
    fontSize: 12
  },
  password: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
