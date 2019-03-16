import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from 'react-navigation';
import AuthenticationScreen from '../screens/AuthenticationScreen';

import MainTabNavigator from './MainTabNavigator';

const AuthenticationStack = createStackNavigator({
  Authentication: AuthenticationScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthenticationStack,
      Main: MainTabNavigator
    },
    { initialRouteName: 'Auth' }
  )
);
