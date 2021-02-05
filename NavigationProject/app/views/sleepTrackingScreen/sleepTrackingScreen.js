import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import Timeline from '../../assets/icons/Timeline';
import { config } from '../../config/config';
import { styles } from './styles';
import { LineChart } from 'react-native-charts-wrapper';

export class SleepTrackingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 0,
        }
    }

    setTimer = () => {
        // const { timer } = this.state;
        // intervalID = setInterval(() => (
        //     this.setState(previousState => (
        //         { timer: previousState.timer + 1 }
        //     ))
        // ), 1000);
    }

    stopTimer = () => {
        // clearInterval(intervalID)
    }

    render() {
        const { timer } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Track your sleep</Text>
                {/* <Text style={styles.timer}>{timer}</Text> */}
                {/* <NavigationEvents
                    onWillFocus={payload => console.log('will focus', payload)}
                    onDidFocus={this.setTimer}
                    onWillBlur={payload => console.log('will blur', payload)}
                    onDidBlur={this.stopTimer}
                /> */}
                <LineChart style={styles.chart}
                    data={{ dataSets: [{ label: "Track your sleep", values: [{ y: 1 }, { y: 2 }, { y: 1 }] }] }}
                />
            </View>
        );
    }
}

SleepTrackingScreen.navigationOptions = ({ navigation }) => ({
    tabBarIcon: ({ focused }) => {
        const color = focused ? config.COLOR_WHITE : config.COLOR_MIDDLE_VIOLET;
        return <Timeline {...{ color }} />;
    }
});

export default SleepTrackingScreen;