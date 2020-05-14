import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from '~/screens/BottomTab/Home';
import Social from '~/screens/BottomTab/Social';
import Sell from '~/screens/BottomTab/Sell';
import Orders from '~/screens/BottomTab/Orders';
import UserProfile from '~/screens/BottomTab/UserProfile';
import TabBarButton from '~/components/Buttons/TabBarButton';

const HomeBottomTab = createBottomTabNavigator(
  {
    Home,
    Social,
    Sell,
    Orders,
    Profile: UserProfile,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        return (
          <TabBarButton
            focused={focused}
            tintColor={tintColor}
            navigation={navigation}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: '#9ACD00',
      inactiveTintColor: '#979797',
      style: {
        height: 60,
        justifyContent: 'center',
        paddingVertical: 10,
      },
    },
  },
);

export default HomeBottomTab;
