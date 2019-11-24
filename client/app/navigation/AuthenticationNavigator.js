import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Login';

export default createStackNavigator(
  {
    Login,
  },
  {
    cardStyle: {backgroundColor: 'white', opacity: 1},
    headerMode: 'none',
    initialRouteName: 'Main',
    transitionConfig,
  },
);
