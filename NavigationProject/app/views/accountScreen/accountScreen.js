
import React, { Component } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import ImagePanResponderComponent from '../../components/imagePanResponderComponent/imagePanResponderComponent';

export class AccountScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImagePanResponderComponent />
            </View>
        );
    }
}

export default AccountScreen;