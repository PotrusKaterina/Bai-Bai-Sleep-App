import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export class Button extends Component {
    constructor(props) {
        super(props);
    }

    onButtonPress = () => {
        const { onPress } = this.props;
        onPress();
    }

    render() {
        const { title } = this.props;
        return (
            <TouchableOpacity onPress={this.onButtonPress} style={styles.button}>
                <Text style={styles.text}>
                    {title}
                </Text>
            </TouchableOpacity>
        );
    }
}

export default Button;