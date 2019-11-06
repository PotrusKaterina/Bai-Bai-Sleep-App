
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export class AccountScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Account</Text>
            </View>
        );
    }
}

export default AccountScreen;