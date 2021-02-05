import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';
import { config } from '../../../config/config';

export class PlayerButton extends Component {
    constructor(props) {
        super(props);
    }

    onPress = () => {
        const { onPress, title } = this.props;
        onPress(title);
    }

    render() {
        const { title, activeTitle } = this.props;
        return (
            <TouchableWithoutFeedback onPress={this.onPress}>
                <View style={[styles.container, { backgroundColor: (activeTitle === title) ? config.COLOR_LIGHT_VIOLET : config.COLOR_WHITE }]}>
                    <Text style={[styles.text, { color: (activeTitle === title) ? config.COLOR_WHITE : config.COLOR_LIGHT_VIOLET }]}>
                        {title}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default PlayerButton;