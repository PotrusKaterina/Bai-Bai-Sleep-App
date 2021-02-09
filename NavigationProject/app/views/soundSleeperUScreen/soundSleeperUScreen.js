import React, { Component } from 'react';
import { ScrollView, Image } from 'react-native';
import Academy from '../../assets/icons/Academy';
import { config } from '../../config/config';
import { styles } from './styles';
import CoursesList from './coursesList/coursesList';

export class SoundSleeperUScreen extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <ScrollView style={styles.container}>
                <Image style={styles.image} source={require('../../assets/images/unnamed.jpg')} />
                <CoursesList navigation={navigation} />
            </ScrollView>
        );
    }
}

SoundSleeperUScreen.navigationOptions = ({ navigation }) => ({
    tabBarIcon: ({ focused }) => {
        const color = focused ? config.COLOR_WHITE : config.COLOR_MIDDLE_VIOLET;
        return <Academy {...{ color }} />;
    }
});

export default SoundSleeperUScreen;