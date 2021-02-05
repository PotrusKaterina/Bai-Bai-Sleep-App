import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import Slider from '@react-native-community/slider';
import { config } from '../../../config/config';
import AsyncStorage from '@react-native-community/async-storage';


export class TextComponent extends Component {
    constructor(props) {
        super(props);
        const { volume, duration } = props;
        this.state = {
            volume,
            duration,
        }
    }

    setDataToAsyncStorage = async () => {
        try {
            const { volume, duration } = this.state;
            await AsyncStorage.setItem('playerSettings', JSON.stringify({ volume, duration }));
        } catch (err) {
            console.warn("AsyncStorage setItem in player text component ", err);
        }
    }

    componentWillUnmount = async () => {
        const { volume, duration } = this.state;
        const { setPlayerSettings } = this.props
        await setPlayerSettings({ volume, duration });
        await this.setDataToAsyncStorage();
    }

    changeVolume = (value) => {
        const { changeValue } = this.props;
        this.setState({ volume: value });
        changeValue(value);
    }

    changeDuration = (value) => {
        this.setState({ duration: value });
    }

    render() {
        const { volume, duration } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{` Volume: ${Math.round(volume * 100)}`.toUpperCase()}</Text>
                <Slider value={volume} style={styles.slider} minimumValue={0} maximumValue={1} minimumTrackTintColor={config.COLOR_LIGHT_VIOLET} maximumTrackTintColor={config.COLOR_LIGHT_GRAY} thumbTintColor={config.COLOR_LIGHT_VIOLET}
                    onValueChange={this.changeVolume} />
                <Text style={styles.text}>{` Duration: ${Math.round(duration / 60)} min`.toUpperCase()}</Text>
                <Slider value={duration} style={styles.slider} minimumValue={60} maximumValue={7200} minimumTrackTintColor={config.COLOR_LIGHT_VIOLET} maximumTrackTintColor={config.COLOR_WH} thumbTintColor={config.COLOR_LIGHT_VIOLET}
                    onValueChange={this.changeDuration} />
            </View>
        );
    }
}

export default TextComponent;