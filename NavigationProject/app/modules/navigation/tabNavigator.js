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
    pressColor :  config.COLOR_GRAY,
    style: {    
      activeTintColor: config.COLOR_WHITE,
      backgroundColor: config.COLOR_GRAY,
    },
    indicatorStyle: {
      backgroundColor: config.COLOR_BLUE
    },
  },
}
);

export default createAppContainer(TabBarNavigator);