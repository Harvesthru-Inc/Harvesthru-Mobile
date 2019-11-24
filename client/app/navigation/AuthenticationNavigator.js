import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import {Images} from '../assets/images';

const Left = ({onPress}) => (
  <TouchableHighlight onPress={onPress}>
    <Image source={Images.backArrow} />
  </TouchableHighlight>
);

export default Authentication = createStackNavigator(
  {
    Login,
    Signup,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
  },
  {
    headerMode: 'none'
  }
);
