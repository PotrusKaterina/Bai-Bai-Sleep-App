import React, { useRef, useState } from 'react';
import { View, PanResponder, Animated } from 'react-native';
import { styles } from './styles';

export const TwoBallsGame = () => {

    const [pan, setPan] = useState(new Animated.ValueXY());
    const [pan2, setPan2] = useState(new Animated.ValueXY());

    const [scale, setscale] = useState(new Animated.Value(1));
    const [scale2, setscale2] = useState(new Animated.Value(1));

    const panResponder = useRef(PanResponder.create({
        onMoveShouldSetResponderCapture: () => true,
        onMoveShouldSetPanResponderCapture: () => true,

        onPanResponderGrant: () => {
            // Set the initial value to the current state
            pan.setOffset({ x: pan.x._value, y: pan.y._value });
            pan.setValue({ x: 0, y: 0 });
            Animated.spring(
                scale,
                { toValue: 1.1, friction: 3 }
            ).start();
        },

        onPanResponderMove: Animated.event([
            null, { dx: pan.x, dy: pan.y },
        ]),

        onPanResponderRelease: () => {
            // Flatten the offset to avoid erratic behavior
            pan.flattenOffset();
            Animated.spring(
                scale,
                { toValue: 1, friction: 3 }
            ).start();
        }
    }));
    let [translateX, translateY] = [pan.x, pan.y];
    const panResponder2 = useRef(PanResponder.create({
        onMoveShouldSetResponderCapture: () => true,
        onMoveShouldSetPanResponderCapture: () => true,

        onPanResponderGrant: () => {
            // Set the initial value to the current state
            pan2.setOffset({ x: pan2.x._value, y: pan2.y._value });
            pan2.setValue({ x: 0, y: 0 });
            Animated.spring(
                scale2,
                { toValue: 1.1, friction: 3 }
            ).start();
        },

        onPanResponderMove: (evt, gestureState) => {
            changeXYFirstRoundIfNear(gestureState);
            Animated.event([
                null, { dx: pan2.x, dy: pan2.y },
            ])(evt, gestureState)
        },

        onPanResponderRelease: () => {
            // Flatten the offset to avoid erratic behavior
            pan2.flattenOffset();
            Animated.spring(
                scale2,
                { toValue: 1, friction: 3 }
            ).start();
        }
    }));

    const changeXYFirstRoundIfNear = ({ moveX, moveY }) => {
        let [x, y] = [pan.x._value, pan.y._value];
        const isNear = (Math.abs(moveX - x) <= 100 && Math.abs(moveY - y) <= 100);
        if (isNear) {
            let x1Changing = moveX + 10;
            let y1Changing = moveY + 5;

            Animated.parallel([
                Animated.timing(translateX, {
                    toValue: x1Changing,
                    duration: 1
                }),
                Animated.timing(translateY, {
                    toValue: y1Changing,
                    duration: 1
                })
            ]).start();
        };
    }

    // Calculate the x and y transform from the pan value

    let rotate = '0deg';
    // Calculate the transform property and set it as a value for our style which we add below to the Animated.View component
    let imageStyle = { transform: [{ translateX }, { translateY }, { rotate }, { scale }] };
    let imageStyle2 = { transform: [{ translateX: pan2.x }, { translateY: pan2.y }, { rotate }, { scale: scale2 }] };

    return (
        <View source={require('../../../assets/images/1585862428885.jpeg')} style={styles.container}>
            <Animated.View style={[imageStyle, styles.firstRound]} {...panResponder.current.panHandlers} />
            <Animated.View style={[imageStyle2, styles.secondRound]} {...panResponder2.current.panHandlers} />
        </View>
    );
}

export default TwoBallsGame;