import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import ForgotPass from '../screens/ForgotPass';
import Phone from '../screens/Phone';
import VerifyPhone from '../screens/VerifyPhone';

export default Authentication = createStackNavigator(
  {
    Login,
    Signup,
    ForgotPass,
    Phone,
    VerifyPhone,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
  },
);
