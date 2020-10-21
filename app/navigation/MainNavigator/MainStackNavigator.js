import {createStackNavigator} from 'react-navigation-stack';
import Login from '~/screens/Authentication/Login';
import Signup from '~/screens/Authentication/Signup';
import ForgotPass from '~/screens/Authentication/ForgotPass';
import Phone from '~/screens/Authentication/Phone';
import VerifyPhone from '~/screens/Authentication/VerifyPhone';
import HomeBottomTab from '~/navigation/BottomTabBar/HomeBottomTab';
import Farm from '~/screens/Farm';

const MainStackNavigator = createStackNavigator(
  {
    Main: HomeBottomTab,
    Login,
    Signup,
    ForgotPass,
    Phone,
    VerifyPhone,
    Farm,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
  },
);

export default MainStackNavigator;
