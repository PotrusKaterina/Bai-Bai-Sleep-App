
import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { styles } from './styles';
import ImagePanResponderComponent from '../../components/imagePanResponderComponent/imagePanResponderComponent';

export class MyGames extends Component {
    render() {
        return (
            <ImageBackground source={require('../../assets/images/1585862428885.jpeg')} style={styles.container}>
                <ImagePanResponderComponent />
            </ImageBackground>
        );
    }
}

export default MyGames;