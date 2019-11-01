import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, TouchableHighlight, View } from 'react-native';
import { styles } from './styles';
import { config } from '../../../../config/config';

export class CurriculumItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPressed: false,
        }
    }

    changeNumberColor = () => {
        this.setState({ isPressed: true });
    }

    render() {
        const { text, textVideoLenght, numberInSection } = this.props;
        const { isPressed } = this.state;
        console.log('')
        return (
            <TouchableHighlight onPress={this.changeNumberColor} underlayColor={config.COLOR_LIGHT_GRAY} >
                <View style={styles.container}>
                    <View style={[styles.itemNumber, { backgroundColor: isPressed? config.COLOR_MIDDLE_GRAY : config.COLOR_WHITE }]} >
                        <Text style={styles.numberInButton}>{numberInSection}</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>{text}</Text>
                        <Text style={styles.videoLenght}>{textVideoLenght}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

export default CurriculumItem;