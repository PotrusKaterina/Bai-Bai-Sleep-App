
import React, { Component } from 'react';
import { View, Image, PanResponder, Animated } from 'react-native';
import { styles } from './styles';

export class ImagePanResponderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pan: new Animated.ValueXY(),
            scale: new Animated.Value(1),
        };
    }

    componentWillMount() {
        this.panResponder = PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: () => true,

            onPanResponderGrant: (e, gestureState) => {
                // Set the initial value to the current state
                this.state.pan.setOffset({ x: this.state.pan.x._value, y: this.state.pan.y._value });
                this.state.pan.setValue({ x: 0, y: 0 });
                Animated.spring(
                    this.state.scale,
                    { toValue: 1.1, friction: 3 }
                ).start();
            },

            onPanResponderMove: Animated.event([
                null, { dx: this.state.pan.x, dy: this.state.pan.y },
            ]),

            onPanResponderRelease: (e, { vx, vy }) => {
                // Flatten the offset to avoid erratic behavior
                this.state.pan.flattenOffset();
                Animated.spring(
                    this.state.scale,
                    { toValue: 1, friction: 3 }
                ).start();
            }
        });
    }

    render() {
        const { scale } = this.state;
        // Destructure the value of pan from the state
        let { pan } = this.state;

        // Calculate the x and y transform from the pan value
        let [translateX, translateY] = [pan.x, pan.y];

        let rotate = '0deg';

        // Calculate the transform property and set it as a value for our style which we add below to the Animated.View component
        let imageStyle = { transform: [{ translateX }, { translateY }, { rotate }, { scale }] };

        return (
            <View style={styles.container}>
                <Animated.View style={imageStyle} {...this.panResponder.panHandlers}>
                    <Image style={styles.image} source={require('../../assets/images/moon.png')} />
                </Animated.View>
            </View>
        );
    }
}

export default ImagePanResponderComponent;