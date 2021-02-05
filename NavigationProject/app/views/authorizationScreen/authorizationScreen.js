import React, { Component } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import Button from '../../components/buttons/button/button';
import AsyncStorage from '@react-native-community/async-storage';
import { createArreySectionList } from '../../components/listBlock/listBlockApi';

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
                <Button onPress={this.goToForgotPasswordScreen} title={'Forgot password'} />
                <Button onPress={this.goToRegistrationScreen} title={'Registration'} />
                <Button onPress={this.goToHomeScreen} title={'OK'} />
            </View>
        );
    }
}

AuthorizationScreen.navigationOptions = {
    title: 'Authorization',
};

export default AuthorizationScreen;