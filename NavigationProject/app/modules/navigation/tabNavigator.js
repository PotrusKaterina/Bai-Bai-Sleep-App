import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import SoundSleeperScreen from '../../views/soundSleeperScreen/soundSleeperScreen';
import SoundSleeperUScreen from '../../views/soundSleeperUScreen/soundSleeperUScreen';
import SettingsScreen from '../../views/settingsScreen/settingsScreen';
import SleepTrackingScreen from '../../views/sleepTrackingScreen/sleepTrackingScreen';
import { config } from '../../config/config';

const TabBarNavigator = createMaterialTopTabNavigator({
  SoundSleeperScreen,
  SleepTrackingScreen,
  SoundSleeperUScreen,
  SettingsScreen,
}, {
  swipeEnabled: false,
  tabBarOptions: {
    showIcon: true,    
    showLabel: false,
    pressColor :  config.COLOR_WHITE,
    style: {    
      activeTintColor: config.COLOR_MIDDLE_VIOLET,
      backgroundColor: config.COLOR_LIGHT_VIOLET,
    },
    indicatorStyle: {
      backgroundColor: config.COLOR_WHITE
    },
  },
}
);

export default createAppContainer(TabBarNavigator);