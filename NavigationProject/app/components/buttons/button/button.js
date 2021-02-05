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
        const { title, styleProps } = this.props;
        return (
            <TouchableOpacity onPress={this.onButtonPress} style={styleProps?.container || styles.container}>
                <Text style={styleProps?.title || styles.text}>
                    {title.toUpperCase()}
                </Text>
            </TouchableOpacity>
        );
    }
}

export default Button;