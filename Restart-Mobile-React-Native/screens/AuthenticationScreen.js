import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Form from '../components/Authentication/Form';
import bgImage from '../assets/images/bgAuth.png';

export default class AuthenticationScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.container}>
          <Form navigate={navigate} />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1
  }
});
