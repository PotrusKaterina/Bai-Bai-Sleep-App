import { createStackNavigator } from 'react-navigation-stack';
import AccountScreen from '../../views/accountScreen/accountScreen';
import DrawerNavigator from './drawerNavigator';
import { config } from '../../config/config';
import PlayerScreen from '../../views/playerScreen/playerScreen';
import CreateSoundScreen from '../../views/createSoundScreen/createSoundScreen';
import CourseScreen from '../../views/courseScreen/courseScreen';
import MyGames from '../../views/myGames/myGames';
import CosmosGame from '../../views/cosmosGame/cosmosGame';

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
  MyGames,
  CosmosGame,
}, {
  defaultNavigationOptions: {
    headerTintColor: config.COLOR_WHITE,

    headerStyle: {
      backgroundColor: config.COLOR_LIGHT_VIOLET,
    },
  }
});
