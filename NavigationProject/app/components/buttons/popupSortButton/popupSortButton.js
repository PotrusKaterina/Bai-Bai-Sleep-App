import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { styles } from './styles';
import { config } from '../../../config/config';
import AsyncStorage from '@react-native-community/async-storage';

export class PopupSortButton extends Component {
    constructor(props) {
        super(props);
    }

    onPress = async () => {
        try {
            const { setSoundSleeperMode, clear, nameOfMode } = this.props;
            clear();
            setSoundSleeperMode(nameOfMode);
            await AsyncStorage.setItem('soundSleeperMode', nameOfMode);
        } catch (err) {
            console.warn(err);
        }
    }

    render() {
        const { title, icon } = this.props;
        return (
            <TouchableHighlight onPress={this.onPress} underlayColor={config.COLOR_LIGHT_GRAY}>
                <View style={styles.container}>
                    <View style={styles.icon}>{icon}</View>
                    <Text style={styles.text}>
                        {title}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
}

export default PopupSortButton;