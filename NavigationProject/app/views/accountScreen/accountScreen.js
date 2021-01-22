
import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './styles';

export class AccountScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image resizeMode={'contain'} source={require('../../assets/images/427369_632_canny_pic.jpg')} style={styles.image} />
            </View>
        );
    }
}

export default AccountScreen;