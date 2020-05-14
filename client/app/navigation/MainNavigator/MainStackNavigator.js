import {createStackNavigator} from 'react-navigation-stack';
import Login from '../../screens/Login';
import Signup from '../../screens/Signup';
import ForgotPass from '../../screens/ForgotPass';
import Phone from '../../screens/Phone';
import VerifyPhone from '../../screens/VerifyPhone';
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
