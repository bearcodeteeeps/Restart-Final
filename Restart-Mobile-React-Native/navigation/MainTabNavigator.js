import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ProfilesScreen from '../screens/ProfilesScreen';
import RewardsScreen from '../screens/RewardsScreen';
import CameraScreen from '../screens/CameraScreen';
import PhotoReturn from '../screens/PhotoReturn';

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={(iconName = 'md-home')} />
  )
};

const ProfilesStack = createStackNavigator({
  Profiles: ProfilesScreen
});

ProfilesStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={(iconName = 'md-person')} />
  )
};

const RewardsStack = createStackNavigator({
  Rewards: RewardsScreen
});

RewardsStack.navigationOptions = {
  tabBarLabel: 'Rewards',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={(iconName = 'md-trophy')} />
  )
};

const CameraStack = createStackNavigator({
  Camera: CameraScreen,
  Photo: PhotoReturn
});

CameraStack.navigationOptions = {
  tabBarLabel: 'Camera',
  tabBarIcon: ({ focused, tintColor }) => (
    <TabBarIcon focused={focused} name={(iconName = 'md-camera')} />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  ProfilesStack,
  RewardsStack,
  CameraStack
});
