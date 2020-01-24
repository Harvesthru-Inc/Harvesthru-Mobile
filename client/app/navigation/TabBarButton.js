import {Image} from 'react-native';

import React, {Component} from 'react';

import {Images} from '../assets/images';

const TabBarButton = ({navigation, focused, tintColor}) => {
  const {routeName} = navigation.state;
  return (
    <Image
      source={chooseRouteName(routeName)}
      style={{width: 20, height: 20, tintColor}}
    />
  );
};

const chooseRouteName = (routeName) => {
  if (routeName == 'Home') return Images.homeIcon;
  else if (routeName == 'Profile') return Images.userProfileIcon
}

export default TabBarButton;
