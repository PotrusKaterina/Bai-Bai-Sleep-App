import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export class DrawerButton extends Component {
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
            <View style={styles.container} >
                <TouchableOpacity onPress={this.onButtonPress}>
                    <Text style={styles.text}>
                        {title}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default DrawerButton;