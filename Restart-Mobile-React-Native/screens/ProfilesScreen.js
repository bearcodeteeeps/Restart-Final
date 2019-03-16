import React from 'react';
import { ImageBackground, View, ScrollView, StyleSheet } from 'react-native';
import {
  AirbnbRating,
  Input,
  Avatar,
  Button,
  Text,
  Card
} from 'react-native-elements';
import teddybearprofile from '../assets/images/teddybearprofile.png';
import MainHeader from '../components/MainHeader';
import headerImage from '../assets/images/gradient_header_restart.png';

export default class ProfilesScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile'
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
          <View style={styles.card}>
            <Card
              title={'Profile'}
              containerStyle={{ width: 300, padding: 12 }}
            >
              <View style={styles.profile}>
                <Avatar rounded size="large" source={teddybearprofile} />
                <View style={styles.profileItems}>
                  <Text style={styles.profileKey}>
                    <Text style={{ fontWeight: 'bold' }}>First Name: </Text>
                    Teddy Bear
                  </Text>
                  <Text style={styles.profileKey}>
                    <Text style={{ fontWeight: 'bold' }}>Postcode: </Text>L5V2X5
                  </Text>
                  <Text style={styles.profileKey}>
                    <Text style={{ fontWeight: 'bold' }}>Email: </Text>
                    teddy@gmail.com
                  </Text>
                  <Text>
                    <Text style={{ fontWeight: 'bold' }}>Password: </Text>******
                  </Text>
                </View>
              </View>
            </Card>
          </View>
          <View style={styles.card}>
            <Card
              title={'Feedback'}
              containerStyle={{ width: 300, padding: 12 }}
            >
              <AirbnbRating
                count={5}
                reviews={['Terrible', 'Bad', 'OK', 'Good', 'Very Good']}
                defaultRating={5}
                size={20}
              />

              <Input placeholder="Give us feedback" />

              <Button
                title="Submit"
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
          <View style={styles.card}>
            <Card
              title={'Legal Terms'}
              containerStyle={{ width: 300, padding: 12 }}
            >
              <View style={styles.legal}>
                <Text>Privacy Policy</Text>
                <Text>Terms & Conditions</Text>
              </View>
            </Card>
          </View>
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
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  profileItems: {
    flexDirection: 'column',
    alignContent: 'center'
  },
  profileKey: {
    paddingBottom: 3
  },
  legal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#bbb'
  }
});
