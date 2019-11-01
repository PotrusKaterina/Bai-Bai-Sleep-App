import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Image } from 'react-native';
import { styles } from './styles';
import { config } from '../../../../config/config';

export class ListItemWithPictureAndSignature extends Component {
    constructor(props) {
        super(props);
    }

    onPress = () => {
        const { onPress, title, authors, curriculumList } = this.props;
        onPress( title, authors, curriculumList);
    }

    render() {
        const { title, authors } = this.props;
        return (
            <TouchableHighlight style={styles.item} underlayColor={config.COLOR_LIGHT_GRAY} onPress={this.onPress}>
                <View style={styles.container}>
                    <Image style={styles.image} source={require('../../../../assets/images/motherAndChild.jpg')} />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.authors}>{authors}</Text>
                        <Text style={styles.freeText}>FREE</Text>
                    </View >
                </View>
            </TouchableHighlight>
        );
    }
}

export default ListItemWithPictureAndSignature;