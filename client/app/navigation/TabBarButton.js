import React from 'react';
import {Image} from 'react-native';

import {Images} from '../assets/images';

const TabBarButton = ({focused, tintColor}) => {
  const {routeName} = navigation.state;
  if (routeName === 'Home') {
    return (
      <Image
        source={Images.homeIcon}
        style={{width: 20, height: 20}}
      />
    );
  } else {
    return (
      <Image
        source={Images.userProfileIcon}
        style={{width: 20, height: 20}}
      />
    );
  }
};

export default TabBarButton;