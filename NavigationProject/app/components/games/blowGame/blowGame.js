import React, { useEffect, useState } from 'react';
import { ImageBackground } from 'react-native';
import { styles } from './styles';
import RNSoundLevel from 'react-native-sound-level';
import Animated from "react-native-reanimated";

export const BlowGame = () => {
    const [sound, setSound] = useState(-160);

    useEffect(() => {
        RNSoundLevel.start();
        RNSoundLevel.onNewFrame = (data) => {
            data.value > -140
            setSound(data.value);
        }
        return () => RNSoundLevel.stop();
    }, []);

    return (
        <ImageBackground source={require('../../../assets/images/sky.jpg')} style={styles.container}>
            <Animated.Image source={require('../../../assets/images/balloons.png')} style={[styles.round, {
                transform: [{
                    scale: Animated.interpolate(sound, {
                        inputRange: [-160, -50, 0],
                        outputRange: [2, 4, 5],
                    })
                }]
            }]} />
        </ImageBackground>
    );
}

export default BlowGame;