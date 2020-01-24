import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from '../screens/Home';
import UserProfile from '../screens/UserProfile';
import TabBarButton from './TabBarButton';

const HomeBottomTab = createBottomTabNavigator(
  {
    Home,
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
    },
  },
);

export default HomeBottomTab;
