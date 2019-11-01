import { createStackNavigator } from 'react-navigation-stack';
import AccountScreen from '../../views/accountScreen/accountScreen';
import DrawerNavigator from './drawerNavigator';
import { config } from '../../config/config';
import PlayerScreen from '../../views/playerScreen/playerScreen';
import CreateSoundScreen from '../../views/createSoundScreen/createSoundScreen';
import CourseScreen from '../../views/courseScreen/courseScreen';

export const AppStackNavigator = createStackNavigator({
  DrawerNavigator: {
    screen: DrawerNavigator,
    navigationOptions: {
      header: null,
    },
  },
  AccountScreen,
  PlayerScreen,
  CreateSoundScreen,
  CourseScreen,
}, {
  defaultNavigationOptions: {
    headerTintColor: config.COLOR_WHITE,

    headerStyle: {
      backgroundColor: config.COLOR_GRAY,
    },
  }
});
