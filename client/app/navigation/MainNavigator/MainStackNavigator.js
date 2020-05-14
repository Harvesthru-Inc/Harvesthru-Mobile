import {createStackNavigator} from 'react-navigation-stack';
import Login from '../../screens/Authentication/Login';
import Signup from '../../screens/Authentication/Signup';
import ForgotPass from '../../screens/Authentication/ForgotPass';
import Phone from '../../screens/Authentication/Phone';
import VerifyPhone from '../../screens/Authentication/VerifyPhone';
import HomeBottomTab from '../BottomTabBar/HomeBottomTab';

export default MainStackNavigator = createStackNavigator(
  {
    Login,
    Signup,
    ForgotPass,
    Phone,
    VerifyPhone,
    Main: HomeBottomTab,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
  },
);
