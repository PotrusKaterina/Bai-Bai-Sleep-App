import React, { Component } from 'react';
import { View, TouchableHighlight } from 'react-native';
import { styles } from './styles';
import Plus from '../../../assets/icons/Plus';
import Sort from '../../../assets/icons/Sort';
import { config } from '../../../config/config';


export class ToolBarButtons extends Component {
    constructor(props) {
        super(props);
    }

    goToCreateSoundScreen = () => {
        const { navigation } = this.props;
        navigation.navigate('CreateSoundScreen');
    }

    openSortPopup = () => {
        const { setContent } = this.props;
        setContent('Sort');
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.button} onPress={this.openSortPopup} underlayColor={config.COLOR_MIDDLE_GRAY}>
                    <Sort />
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} onPress={this.goToCreateSoundScreen} underlayColor={config.COLOR_MIDDLE_GRAY}>
                    <Plus />
                </TouchableHighlight>
            </View>
        );
    }
}

export default ToolBarButtons;