import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';
import Button from '../../components/buttons/button/button';
import { Transition } from 'react-navigation-fluid-transitions';

export class ForgotPasswordScreen extends Component {
    componentDidMount() {
        console.log('componentDidMount ForgotPasswordScreen')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount ForgotPasswordScreen')

    }

    goToAuthorizationScreen = () => {
        const { navigation } = this.props;
        navigation.navigate('AuthorizationScreen');
    }

    goToRegistrationScreen = () => {
        const { navigation } = this.props;
        navigation.navigate('RegistrationScreen');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Transition shared="logo">
                        <Image style={styles.image} source={require('../../assets/images/splashScreen.jpg')} />
                    </Transition>
                </View>
                <Button onPress={this.goToAuthorizationScreen} title={'Authorization'} />
                <Button onPress={this.goToRegistrationScreen} title={'Registration'} />
            </View>
        );
    }
}

ForgotPasswordScreen.navigationOptions = ({ navigation }) => ({
    title: 'Forgotyour password',
});


export default ForgotPasswordScreen;