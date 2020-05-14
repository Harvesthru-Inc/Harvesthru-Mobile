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
  else if (routeName == 'Social') return Images.socialIcon;
  else if (routeName == 'Sell') return Images.sellIcon;
  else if (routeName == 'Orders') return Images.ordersIcon;
  else if (routeName == 'Profile') return Images.profileIcon;
}

export default TabBarButton;
