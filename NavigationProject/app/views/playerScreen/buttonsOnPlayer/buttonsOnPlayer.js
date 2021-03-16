import React, { Component } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import PlayerButton from '../../../components/buttons/playerButton/playerButton';
import RNSoundLevel from 'react-native-sound-level'
import TrackPlayer from 'react-native-track-player';
import { getPermissions } from '../../../services/permissionService';

export class PlayerButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTitle: 'PAUSE',
            timeStart: 0,
            timeListen: 0,
            durationListen: 0
        }
    }

    componentDidMount = async () => {
        const { setChangeValue } = this.props;
        setChangeValue(this.changeValue);
        await getPermissions();
    }

    componentWillUnmount = () => {
        TrackPlayer.destroy();
    }

    changeValue = (volume) => {
        TrackPlayer.setVolume(volume);
    }

    play = async () => {
        try {
            const { title, volume, path, duration, setSleepDuration } = this.props
            RNSoundLevel.stop();
            this.setState({ activeTitle: 'PLAY', timeStart: new Date().getTime() });
            setSleepDuration(new Date().getTime());

            await TrackPlayer.setupPlayer({});
            await TrackPlayer.add([{
                id: 'myFirstAudio',
                url: path,
                title: title
            }]);

            setTimeout(() => {
                this.listen();
                this.setState({ activeTitle: 'LISTEN' })

            }, duration * 1000)

            TrackPlayer.play();
            TrackPlayer.setVolume(volume);
        }
        catch (err) {
            console.warn(err);
        }
    }

    listen = async (activeButton) => {
        const { fallingAsleepDuration, fallingAsleepDurationFunc } = this.props;
        const { timeListen, timeStart } = this.state;
        this.pause(activeButton);
        console.log({ timeStart, timeListen: new Date().getTime(), fin: (new Date().getTime()) - timeStart / 1000 })
        let durationFalling = (((new Date().getTime() - timeStart) / 1000) / 60);
        console.log('durationFalling', durationFalling)
        fallingAsleepDurationFunc(Math.floor(durationFalling));
        RNSoundLevel.start();
        RNSoundLevel.onNewFrame = (data) => {
            if (-20 < data.value) {
                this.play();
            }
        }
    }

    pause = async (activeButton) => {
        try {
            this.setState({ activeTitle: activeButton });
            const { setSleepFinish } = this.props;
            RNSoundLevel.stop();
            await TrackPlayer.setupPlayer({});
            TrackPlayer.stop();
        } catch (err) {
            console.warn(err);
        }
    }

    render() {
        const { activeTitle } = this.state;
        return (
            <View style={styles.container}>
                <PlayerButton title='PLAY' {...{ activeTitle, onPress: this.play }} />
                <PlayerButton title='PAUSE'  {...{ activeTitle, onPress: this.pause }} />
                <PlayerButton title='LISTEN'  {...{ activeTitle, onPress: this.listen }} />
            </View>
        );
    }
}

export default PlayerButtons;