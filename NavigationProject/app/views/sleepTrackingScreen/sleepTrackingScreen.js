import React, { Component } from 'react';
import { Text, View, processColor } from 'react-native';
import Timeline from '../../assets/icons/Timeline';
import { config } from '../../config/config';
import { styles } from './styles';
import { BarChart } from 'react-native-charts-wrapper';
import { connect } from 'react-redux';

const VIOLET = processColor(config.COLOR_LIGHT_VIOLET);

export class SleepTrackingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sleepCourse: [],
        }
    };

    static getDerivedStateFromProps(nextProps) {
        const { sleepCourses } = nextProps;
        const sleepCourse = sleepCourses.map(item => Number(item.y));
        const result = { sleepCourse };
        return result;
    }

    render() {
        const { sleepCourse } = this.state;
        const { sleepCourses } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.text}>Track your sleep</Text>
                </View>
                <View style={styles.chartContainer}>
                    {sleepCourse ? <BarChart style={styles.chart}
                        data={{
                            dataSets: [{
                                values: sleepCourse,
                                label: 'Sleep Tracking',
                                config: {
                                    colors: [VIOLET]
                                }
                            }],
                        }}
                    />
                        : <Text style={styles.instructionText}>There aren't information about sleep</Text>}
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


const mapStateToProps = (store) => ({
    sleepCourses: store.sleepCourse.sleepingCourses,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(SleepTrackingScreen);