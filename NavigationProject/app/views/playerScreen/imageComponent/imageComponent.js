import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import { styles } from './styles';
import Like from '../../../assets/icons/Like';
import FillLike from '../../../assets/icons/FillLike';
import { config } from '../../../config/config';
import AsyncStorage from '@react-native-community/async-storage';

export class ImageComponent extends Component {
    constructor(props) {
        super(props);
    }

    setFavouriteSoundToAsyncStorage = async () => {
        try {
            const { soundsList } = this.props;
            const favourite = Object.keys(soundsList).filter((key) => soundsList[key].isFavorite);
            await AsyncStorage.setItem('favourite', JSON.stringify(favourite));
        } catch (err) {
            console.warn("AsyncStorage setItem in registration screen ", err);
        }
    }

    toggleFavourite = async () => {
        try {
            const { item: { id, isFavorite }, setFavourites } = this.props;
            await setFavourites({ id, isFavorite: !isFavorite });
            await this.setFavouriteSoundToAsyncStorage();
        } catch (err) {
            console.warn("AsyncStorage setItem in registration screen ", err);
        }
    }

    render() {
        const { item: { isFavorite } } = this.props;
        return (
            <ImageBackground source={require('../../../assets/images/motherKissesHerChild.jpg')} style={styles.backgraundImage}>
                <View style={styles.container}>
                    <TouchableWithoutFeedback onPress={this.toggleFavourite}>
                        <View style={styles.svgWrapper}>
                            {isFavorite ? <FillLike color={config.COLOR_ROSE} width={40} height={40} /> : <Like />}
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </ImageBackground >

        );
    }
}

export default ImageComponent;