import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import Timeline from '../../assets/icons/Timeline';
import { config } from '../../config/config';
import { styles } from './styles';
import ImagePanResponderComponent from '../../components/imagePanResponderComponent/imagePanResponderComponent';

export class SleepTrackingScreen extends Component {
    render() {
        return (
            <ImageBackground source={require('../../assets/images/background.jpg')} style={styles.backgraundImage}>
                <View style={styles.container}>
                    <ImagePanResponderComponent />
                </View>
            </ImageBackground>
        );
    }
}

SleepTrackingScreen.navigationOptions = ({ navigation }) => ({
    tabBarIcon: ({ focused }) => {
        const color = focused ? config.COLOR_BLUE : config.COLOR_WHITE;
        return <Timeline {...{ color }} />;
    }
});

export default SleepTrackingScreen;