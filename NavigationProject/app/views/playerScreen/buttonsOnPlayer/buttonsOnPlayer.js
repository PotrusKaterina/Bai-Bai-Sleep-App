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
        }
    }

    componentDidMount = async () => {
        const { setChangeValue } = this.props;
        setChangeValue(this.changeValue);
        await getPermissions();
    }

    changeValue = (volume) => {
        TrackPlayer.setVolume(volume);
    }

    play = async () => {
        try {
            const { title, volume, path, duration } = this.props
            RNSoundLevel.stop();
            this.setState({ activeTitle: 'PLAY' });

            await TrackPlayer.setupPlayer({});
            await TrackPlayer.add([{
                id: 'myFirstAudio',
                url: path,
                title: title
            }]);

            setTimeout(() => {
                this.pause();
                this.setState({ activeTitle: 'PAUSE' })

            }, duration * 1000)

            TrackPlayer.play();
            TrackPlayer.setVolume(volume);
        }
        catch (err) {
            console.warn(err);
        }
    }

    listen = async (activeButton) => {
        this.pause(activeButton);
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