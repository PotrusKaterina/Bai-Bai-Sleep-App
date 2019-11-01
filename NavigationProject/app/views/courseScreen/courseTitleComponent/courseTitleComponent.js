import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { styles } from './styles';

export class CourseTitleComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { authors, title } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.authorsText}>{authors}</Text>
                <Text style={styles.textTitle}>{title}</Text>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>FREE</Text>
                </TouchableHighlight>
                <View style={styles.line} />
                <View style={styles.line} />
            </View>
        );
    }
}

export default CourseTitleComponent;