import React, { Component } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import PlayerButton from '../../../components/buttons/playerButton/playerButton';
import TrackPlayer from 'react-native-track-player';
import { track1 } from '../../../../__mocks__/tracksMocks';

export class PlayerButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTitle: 'PAUSE',
        }
    }

    componentDidMount = () => {
        const { setChangeValue } = this.props;
        setChangeValue(this.changeValue);
    }

    changeValue = (volume) => {
        TrackPlayer.setVolume(volume);
    }

    play = async (activeButton) => {
        const { title, volume } = this.props
        this.setState({ activeTitle: activeButton });
        await TrackPlayer.setupPlayer({});
        await TrackPlayer.add([{
            id: 'myFirstAudio',
            url: require('../../../assets/music/song.mp3'),
            title: title
        }, track1]);
        TrackPlayer.play();
        TrackPlayer.setVolume(volume);
    }



    pause = async (activeButton) => {
        this.setState({ activeTitle: activeButton });
        await TrackPlayer.setupPlayer({});
        TrackPlayer.stop();
    }

    render() {
        const { activeTitle } = this.state;
        return (
            <View style={styles.container}>
                <PlayerButton title='PLAY' {...{ activeTitle, onPress: this.play }} />
                <PlayerButton title='PAUSE'  {...{ activeTitle, onPress: this.pause }} />
                <PlayerButton title='LISTEN'  {...{ activeTitle, onPress: this.play }} />
            </View>
        );
    }
}

export default PlayerButtons;