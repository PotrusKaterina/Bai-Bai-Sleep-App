import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { styles } from './styles';
import KeyboardArrowRight from '../../../assets/icons/KeyboardArrowRight';
import { config } from '../../../config/config';

export class ListItemWithSignature extends Component {
    constructor(props) {
        super(props);
    }

    onPress = () => {
        const { onPress } = this.props;
        onPress();
    }

    render() {
        const { title, signature } = this.props;
        return (
            <TouchableHighlight style={styles.item} underlayColor={config.COLOR_LIGHT_GRAY} onPress={this.onPress}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.signature}>{signature}</Text>
                    </View >
                    <KeyboardArrowRight />
                </View>
            </TouchableHighlight>
        );
    }
}

export default ListItemWithSignature;