import 'react-native-gesture-handler';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SplashScreen from '../../views/splashScreen/splashScreen';
import { AppStackNavigator } from './appStackNavigator';
import { AuthStackNavigator } from './authStackNavigator';
import { TransitionNavigator } from './transitionNavigator';

export const AppSwitchNavigator = createSwitchNavigator(
    {
        Splash: TransitionNavigator,
        Home: AppStackNavigator,
        // Auth: AuthStackNavigator,
    },
    {
        initialRouteName: 'Splash',
    }
);

const SwitchNavigation = createAppContainer(AppSwitchNavigator);

export default SwitchNavigation;
