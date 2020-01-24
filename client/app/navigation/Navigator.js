import {createAppContainer} from 'react-navigation';
import React from 'react';
import MainStackNavigator from './MainStackNavigator';

export const AppContainer = createAppContainer(MainStackNavigator);

export default class Navigator extends React.Component {
  render() {
    return <AppContainer />;
  }
}
