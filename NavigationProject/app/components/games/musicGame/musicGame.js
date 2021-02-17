import React, { useRef, useEffect } from 'react';
import { PanResponder, Animated, View } from 'react-native';
import { styles } from './styles';
import TrackPlayer from 'react-native-track-player';
import { getNewVolume } from './services';

let volume = 1;
export const MusicGame = () => {

    const pan = useRef(new Animated.ValueXY());
    const scale = useRef(new Animated.Value(1));

    useEffect(() => {
        TrackPlayer.setupPlayer({}).then(() => {
            TrackPlayer.add([{
                id: 'MusicGame',
                url: require('../../../assets/music/cloud-song.mp3'),
                title: 'Music Game'
            }]);
        })
        TrackPlayer.play();
        TrackPlayer.setVolume(volume);
        return () => TrackPlayer.destroy();
    }, []);

    const panResponder = useRef(PanResponder.create({
        onMoveShouldSetResponderCapture: () => true,
        onMoveShouldSetPanResponderCapture: () => true,

        onPanResponderGrant: () => {
            // Set the initial value to the current state
            pan.current.setOffset({ x: pan.current.x._value, y: pan.current.y._value });
            pan.current.setValue({ x: 0, y: 0 });
            Animated.spring(
                scale.current,
                { toValue: 1.1, friction: 3 }
            ).start();
        },

        onPanResponderMove: (evt, gestureState) => {
            let newVolume = getNewVolume(gestureState, volume);
            volume = newVolume;
            TrackPlayer.setVolume(volume);
            Animated.event([
                null, { dx: pan.current.x, dy: pan.current.y },
            ])(evt, gestureState)
        },

        onPanResponderRelease: () => {
            // Flatten the offset to avoid erratic behavior
            pan.current.flattenOffset();
            Animated.spring(
                scale.current,
                { toValue: 1, friction: 3 }
            ).start();
        }
    }));

    let [translateX, translateY] = [pan.current.x, pan.current.y];

    let rotate = '0deg';
    // Calculate the transform property and set it as a value for our style which we add below to the Animated.View component
    let imageStyle = { transform: [{ translateX }, { translateY }, { rotate }, { scale: scale.current }] };

    return (
        <View style={styles.container}>
            <Animated.Image source={require('../../../assets/images/cloud.png')} style={[imageStyle, styles.round,]} {...panResponder.current.panHandlers} />
        </View>
    );
}

export default MusicGame;