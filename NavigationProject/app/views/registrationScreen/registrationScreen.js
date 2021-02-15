import React, { Component } from 'react';
import { TextInput, View, TouchableWithoutFeedback, Keyboard, Text, Image } from 'react-native';
import { styles } from './styles';
import Button from '../../components/buttons/button/button';
import AsyncStorage from '@react-native-community/async-storage';
import { Transition } from 'react-navigation-fluid-transitions';
import { setUserName, deleteUserPhoto } from '../accountScreen/redux/userActions';
import { connect } from 'react-redux';

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
        const { navigation } = this.props;
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
        const { setUserName, deleteUserPhoto } = this.props;
        try {
            await AsyncStorage.setItem('user', JSON.stringify({ name: text, photo: '' }));
            await AsyncStorage.setItem('login', text);
            setUserName(text);
            deleteUserPhoto();
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
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <View style={styles.imageContainer}>
                            <Transition shared="logo">
                                <Image style={styles.image} source={require('../../assets/images/splashScreen.jpg')} />
                            </Transition>
                        </View>
                        <View style={styles.textAndInputConteiner}>
                            <Text style={styles.titleText}>Login or Sign Up with your Username</Text>
                            <TextInput style={styles.input} placeholder={'Username'} onChangeText={this.setText} />
                        </View>
                        <View style={styles.buttonsContainer}>
                            <Button onPress={this.goToHomeScreen} styleProps={{ container: styles.button, title: styles.butonTitle }} title={"OK"} />
                            <Button onPress={this.goToForgotPasswordScreen} styleProps={{ container: styles.button, title: styles.butonTitle }} title={"Forgot Password"} />
                        </View>
                    </View>
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

const mapStateToProps = (store) => ({
});

const mapDispatchToProps = {
    setUserName,
    deleteUserPhoto,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationScreen);