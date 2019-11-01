import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { styles } from './styles';
import { config } from '../../config/config';


export class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    onPress = () => {
        const { propOnPress, title, isFavourite, id } = this.props;
        propOnPress(title, isFavourite, id);
    }

    render() {
        const { title } = this.props;

        return (
            <TouchableHighlight style={styles.item} underlayColor={config.COLOR_LIGHT_GRAY} onPress={this.onPress}>
                <Text style={styles.title}>{title}</Text>
            </TouchableHighlight>
        );
    }
}

export default ListItem;