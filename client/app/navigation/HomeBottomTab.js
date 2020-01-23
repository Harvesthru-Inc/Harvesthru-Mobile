import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../screens/Home';
import UserProfile from '../screens/UserProfile';
import TabBarButton from './TabBarButton';

const HomeBottomTab = createBottomTabNavigator(
    {
      Home,
      UserProfile,
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: TabBarButton,
      }),
      tabBarOptions: {
        activeTintColor: '#FF6F00',
        inactiveTintColor: '#263238',
      },
    }
  );

export default HomeBottomTab;