import { FluidNavigator } from 'react-navigation-fluid-transitions';
import AuthorizationScreen from '../../views/authorizationScreen/authorizationScreen';
import ForgotPasswordScreen from '../../views/forgotPasswordScreen/forgotPasswordScreen';
import RegistrationScreen from '../../views/registrationScreen/registrationScreen';
import SplashScreen from '../../views/splashScreen/splashScreen';
import { AuthStackNavigator } from './authStackNavigator';


export const TransitionNavigator = FluidNavigator({
    Splash: { screen: SplashScreen },
    AuthorizationScreen: { screen: AuthorizationScreen },
    ForgotPasswordScreen: { screen: ForgotPasswordScreen },
    RegistrationScreen: { screen: RegistrationScreen },
});
