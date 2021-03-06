import React, { Component } from 'react';
import { TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from './styles';
import Button from '../../components/buttons/button/button';
import AsyncStorage from '@react-native-community/async-storage';

export class RegistrationScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
        }
    }

    componentDidMount = async () => {
        await this.cleanAsyncStorage();
    }

    goToHomeScreen = () => {
        const { text } = this.state;
        const { navigation} = this.props;
        if (text !== '') {
            this.setDataToAsyncStorage();
            navigation.navigate('Home');
        } else {
            alert('You should fill this input');
        }
    }

    goToForgotPasswordScreen = () => {
        const { navigation } = this.props;
        navigation.navigate('ForgotPasswordScreen');
    }

    setDataToAsyncStorage = async () => {
        const { text } = this.state;
        try {
            await AsyncStorage.setItem('login', text);
        } catch (err) {
            console.warn("AsyncStorage setItem in registration screen ", err);
        }
    }

    cleanAsyncStorage = async () => {
        await AsyncStorage.clear();
    }

    setText = (text) => {
        this.setState({ text });
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <TextInput style={styles.input} placeholder={'Input text...'} onChangeText={this.setText} />
                    <Button onPress={this.goToHomeScreen} title={"OK"} />
                    <Button onPress={this.goToForgotPasswordScreen} title={"Forgot Password"} />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

RegistrationScreen.navigationOptions = ({ navigation }) => {
    const isComeFromSplash = navigation.getParam('isComeFromSplash', false);
    const result = { title: 'Registration' }
    if (isComeFromSplash) {
        result.headerLeft = null;
    }
    return result;
};

export default RegistrationScreen;