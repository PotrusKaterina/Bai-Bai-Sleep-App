import React, { Component } from 'react';
import { View, TouchableHighlight } from 'react-native';
import Trash from '../../../assets/icons/Trash';
import { styles } from './styles';


export class HeaderButtons extends Component {
    constructor(props) {
        super(props);
    }

    deleteSound() {
        const { deleteSound } = this.props;
        deleteSound();
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.button} onPress={this.deleteSound}>
                    <Trash />
                </TouchableHighlight>
            </View>
        );
    }
}

export default HeaderButtons;