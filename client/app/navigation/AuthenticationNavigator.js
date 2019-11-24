import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import ForgotPass from '../screens/ForgotPass';
import Phone from '../screens/Phone';

export default Authentication = createStackNavigator(
  {
    Login,
    Signup,
    ForgotPass,
    Phone,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
  },
);
