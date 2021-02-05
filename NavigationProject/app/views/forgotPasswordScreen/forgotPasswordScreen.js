import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Button from '../../components/buttons/button/button';

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
                <Button onPress={this.goToAuthorizationScreen} title={'Authorization'} />
                <Button onPress={this.goToRegistrationScreen} title={'Registration'} />
            </View>
        );
    }
}

ForgotPasswordScreen.navigationOptions = ({navigation}) => ({
    title: 'Forgotyour password',
});


export default ForgotPasswordScreen;