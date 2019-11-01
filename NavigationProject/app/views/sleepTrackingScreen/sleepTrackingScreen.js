import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import Timeline from '../../assets/icons/Timeline';
import { config } from '../../config/config';
import { styles } from './styles';

export class SleepTrackingScreen extends Component {
    render() {
        return (
            <ImageBackground source={require('../../assets/images/background.jpg')} style={styles.backgraundImage}>
                <View style={styles.container}>
                    <Text>Sleep Tracking</Text>
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