import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { styles } from './styles';
import TextComponent from './textComponent/textComponent';
import PlayerButtons from './buttonsOnPlayer/buttonsOnPlayer';
import ImageComponent from './imageComponent/imageComponent';
import { setFavourites, deleteSound } from '../soundSleeperScreen/redux/soundSleeperSortActions';
import { connect } from 'react-redux';
import { setPlayerSettings } from './redux/playerSettingsActions';
import AsyncStorage from '@react-native-community/async-storage';
import { addSleepCourse } from '../sleepTrackingScreen/redux/sleepCourseActions';

export class PlayerScreen extends Component {
    constructor(props) {
        super(props);
        this.id = props.navigation.getParam('id', 0);
        this.state = {
            changeValue: () => { },
            isWatchedSleep: false,
            sleepDuration: 0,
            fallingAsleepDuration: 0,
            timeFinish: 0,
            sleepCourse: []
        }
    }

    setChangeValue = (changeValue) => {
        this.setState({ changeValue });
    }

    setSleepDuration = (sleepDuration) => {
        this.setState({ sleepDuration });
    }

    setSleepFinish = (timeFinish) => {
        this.setState({ timeFinish });
    }

    fallingAsleepDurationFunc = (fallingAsleepDuration) => {
        this.setState({ fallingAsleepDuration });
    }

    static getDerivedStateFromProps(nextProps) {
        const { sleepCourses } = nextProps;
        const sleepCourse = sleepCourses.map(item => { return { y: Number(item.y) } });
        const result = { sleepCourse };
        return result;
    }

    componentDidMount() {
        const { soundsList } = this.props;
        const { fallingAsleepDuration } = this.state;
        console.log('fallingAsleepDuration', fallingAsleepDuration)
        this.isFavourite = soundsList;
        Alert.alert(
            "Phone Mammy",
            "Do you want to check quality of the sleeping?",
            [{ text: "No" },
            { text: "Yes", onPress: () => this.setState({ isWatchedSleep: true }) }],
            { cancelable: false }
        );
    }

    componentWillUnmount = async () => {
        const { sleepDuration, fallingAsleepDuration, sleepCourse, isWatchedSleep } = this.state;
        const { addSleepCourse } = this.props;
        let timeWhenUmnount = !fallingAsleepDuration ? new Date().getTime() : 0;
        let sleepCoursesNew = sleepCourse ? [...sleepCourse, { y: fallingAsleepDuration || ((timeWhenUmnount - sleepDuration) / 1000) / 60 }] : [{ y: fallingAsleepDuration || (((timeWhenUmnount - sleepDuration) / 1000) / 60) }];
        if (isWatchedSleep && sleepDuration) {
            await AsyncStorage.setItem('sleepCourse', JSON.stringify(sleepCoursesNew));
            addSleepCourse({ y: fallingAsleepDuration || (((timeWhenUmnount - sleepDuration) / 1000) / 60) });
        }

    }

    deleteSoundOff = () => {
        const { navigation, deleteSound } = this.props;
        navigation.navigate('SoundSleeperScreen');
        deleteSound(this.id)
    }

    render() {
        const { soundsList, setFavourites, volume, duration, setPlayerSettings, } = this.props;
        const { changeValue, fallingAsleepDuration } = this.state;
        return (
            <View style={styles.container}>
                <ImageComponent {...{ setFavourites, soundsList, item: soundsList[this.id] }} />
                <TextComponent {...{ volume, duration, setPlayerSettings, changeValue }} />
                {/* <HeaderButtons deleteSound0={deleteSound} /> */}
                <PlayerButtons title={soundsList[this.id].text} path={soundsList[this.id].path}
                    fallingAsleepDurationFunc={this.fallingAsleepDurationFunc} setSleepFinish={this.setSleepFinish}
                    setSleepDuration={this.setSleepDuration} setChangeValue={this.setChangeValue} {...{ duration, volume, fallingAsleepDuration }} />
            </View>
        );
    }
}

PlayerScreen.navigationOptions = ({ navigation }) => {
    const title = navigation.getParam('songsName', '');
    const result = { title }
    return result;
};

const mapStateToProps = (store) => ({
    soundsList: store.soundSleeperMode.soundsList,
    volume: store.playerSettings.volume,
    duration: store.playerSettings.duration,
    sleepCourses: store.sleepCourse.sleepingCourses,
});

const mapDispatchToProps = {
    setFavourites,
    setPlayerSettings,
    addSleepCourse,
    deleteSound,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerScreen);