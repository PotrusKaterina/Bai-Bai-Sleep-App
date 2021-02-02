import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';
import Button from '../../components/buttons/button/button';
import AsyncStorage from '@react-native-community/async-storage';
import { createArreySectionList } from '../../components/listBlock/listBlockApi';
import { Transition } from 'react-navigation-fluid-transitions';

export class AuthorizationScreen extends Component {

    goToForgotPasswordScreen = () => {
        const { navigation } = this.props;
        navigation.navigate('ForgotPasswordScreen');
    }

    goToRegistrationScreen = async () => {
        try {
            const { navigation } = this.props;
            await AsyncStorage.removeItem('login');
            navigation.navigate('RegistrationScreen');
        } catch (err) {
            console.warn("AsyncStorage setItem in registration screen ", err);
        }
    }

    goToHomeScreen = () => {
        const { navigation } = this.props;
        navigation.navigate('SoundSleeperScreen');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Transition shared="logo">
                        <Image style={styles.image} source={require('../../assets/images/splashScreen.jpg')} />
                    </Transition>
                </View>
                <View style={styles.buttonsContainer}>
                    <Button onPress={this.goToHomeScreen} title={'Entrance'} />
                    <Button onPress={this.goToForgotPasswordScreen} title={'Forgot password'} />
                    <Button onPress={this.goToRegistrationScreen} title={'Registration'} />
                </View>
            </View>
        );
    }
}

AuthorizationScreen.navigationOptions = {
    title: 'Authorization',
};

export default AuthorizationScreen;