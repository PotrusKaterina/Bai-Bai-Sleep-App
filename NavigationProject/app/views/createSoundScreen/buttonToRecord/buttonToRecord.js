import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { styles } from './styles';
import Microphone from '../../../assets/icons/Microphone';
import Stop from '../../../assets/icons/Stop';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { getPermissions } from '../../../services/permissionService';
import Slider from '@react-native-community/slider';
import { config } from '../../../config/config';

export class ButtonToRecord extends Component {
    constructor(props) {
        super(props);
        this.audioRecorderPlayer = new AudioRecorderPlayer();
        this.state = {
            recordSecs: 0,
            recordTime: '00:00:00',
            currentPositionSec: 0,
            currentDurationSec: 0,
            playTime: '00:00:00',
            duration: '00:00:00',
            isRecording: false,
            recordPath: ``,
        };
    }

    stopRecord = async () => {
        try {
            const { addSound, homemadeSoundName } = this.props;
            const { recordPath } = this.state;
            const result = await this.audioRecorderPlayer.stopRecorder();
            this.audioRecorderPlayer.removeRecordBackListener();
            this.setState({
                recordSecs: 0,
            });
            console.log(result);
            const id = new Date().getTime();
            addSound({ text: homemadeSoundName, id, isFavourite: false, title: 'HOMEMADE', path: recordPath })
        } catch (error) {
            console.warn(error)
        }
    };

    startRecord = async () => {
        try {
            const { homemadeSoundName } = this.props
            if (await getPermissions) {
                const path = Platform.select({
                    ios: `${homemadeSoundName}.m3a`,
                    android: `storage/emulated/0/DCIM/${homemadeSoundName}.mp3`,
                });
                this.setState({ recordPath: `file:///storage/emulated/0/DCIM/${homemadeSoundName}.mp3` })
                const result = await this.audioRecorderPlayer.startRecorder(path);
                this.audioRecorderPlayer.addRecordBackListener((e) => {
                    this.setState({
                        recordSecs: e.current_position,
                        recordTime: this.audioRecorderPlayer.mmssss(
                            Math.floor(e.current_position),
                        )
                    });
                    return;
                });
            }
        } catch (err) {
            console.warn(err);
        }
    };

    startPlay = async () => {
        try {
            console.log('onStartPlay');
            const path = Platform.select({
                ios: `${homemadeSoundName}.m3a`,
                android: `storage/emulated/0/DCIM/${homemadeSoundName}.mp3`,
            });
            const msg = await this.audioRecorderPlayer.startPlayer(path);
            this.audioRecorderPlayer.setVolume(1.0);
            console.log(msg);
            this.audioRecorderPlayer.addPlayBackListener((e) => {
                this.setState({
                    currentPositionSec: e.current_position, currentDurationSec: e.duration, playTime: this.audioRecorderPlayer.mmssss(Math.floor(e.current_position)),
                    duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
                });
            });
        } catch (err) {
            console.warn(err);
        }
    }

    changeRecordState = async () => {
        try {
            const { homemadeSoundName } = this.props;
            const { isRecording } = this.state;
            if (homemadeSoundName !== '') {
                this.setState(prevState => ({ isRecording: !prevState.isRecording }))
                if (isRecording) {
                    this.stopRecord();
                } else {
                    this.startRecord();
                }
            } else {
                alert('Please enter sound name');
            }
        } catch (err) {
            console.warn(err);
        }
    }

    render() {
        const { isRecording, recordTime, recordSecs } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer} >
                    <Text style={styles.timeText}>{recordTime}</Text>
                    <TouchableHighlight style={styles.button} onPress={this.changeRecordState} >
                        {isRecording ? <Stop /> : <Microphone />}
                    </TouchableHighlight>
                </View >
                <View style={styles.slider}>
                    <Slider disabled value={recordSecs} maximumValue={72000} minimumTrackTintColor={config.COLOR_BLUE} maximumTrackTintColor={config.COLOR_LIGHT_GRAY} thumbTintColor={config.COLOR_BLUE} />
                </View>
            </View>
        );
    }
}

export default ButtonToRecord;