import { AuthorizationScreen } from '../../views/authorizationScreen/authorizationScreen';
import { createStackNavigator } from 'react-navigation-stack';
import ForgotPasswordScreen from '../../views/forgotPasswordScreen/forgotPasswordScreen';
import RegistrationScreen from '../../views/registrationScreen/registrationScreen';
import { config } from '../../config/config';

export const AuthStackNavigator = createStackNavigator({
    AuthorizationScreen,
    ForgotPasswordScreen,
    RegistrationScreen
}, {
    initialRouteName: 'AuthorizationScreen',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: config.COLOR_GRAY,
        }
    }
});