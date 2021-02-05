import React, { Component } from 'react';
import { Text, View, processColor } from 'react-native';
import Timeline from '../../assets/icons/Timeline';
import { config } from '../../config/config';
import { styles } from './styles';
import { LineChart } from 'react-native-charts-wrapper';

const VIOLET = processColor(config.COLOR_LIGHT_VIOLET);

export class SleepTrackingScreen extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.text}>Track your sleep</Text>
                </View>
                <View style={styles.chartContainer}>
                    <LineChart style={styles.chart}
                        data={{
                            dataSets: [{
                                values: [{ y: -224.1 }, { y: 238.5 }, { y: 1280.1 }, { y: -442.3 }, { y: -2280.1 }],
                                label: 'Zero line dataset',
                                config: {
                                    colors: [VIOLET]
                                }
                            }],
                        }}
                    />
                </View>
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