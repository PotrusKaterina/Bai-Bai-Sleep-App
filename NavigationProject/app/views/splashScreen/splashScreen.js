import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { setSoundSleeperMode, setSoundsList, addSound } from '../soundSleeperScreen/redux/soundSleeperSortActions';
import { setPlayerSettings } from '../playerScreen/redux/playerSettingsActions';

export class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRegistered: false,
        }
    }

    componentDidMount = async () => {
        try {
            await this.getDataFromAsyncStorage();
            //  setTimeout(() => {
            this.navigate();
            //  }, 2000);
        } catch (error) {
            console.warn(error);
        }
    }

    navigate = () => {
        const { isRegistered } = this.state;
        const { navigation } = this.props;
        const screen = isRegistered ? 'AuthorizationScreen' : 'RegistrationScreen';
        const isComeFromSplash = true;
        navigation.navigate(screen, { isComeFromSplash });
    }

    getDataFromAsyncStorage = async () => {
        try {
            const { setSoundSleeperMode, soundsList, setPlayerSettings, addSound } = this.props;
            let keys = ['login', 'soundSleeperMode', 'favourite', 'playerSettings', 'homemadeSounds']
            await AsyncStorage.multiGet(keys).then(result => {
                result.forEach((item) => {
                    if (item[1]) {
                        switch (item[0]) {
                            case 'login': {
                                if (result) {
                                    this.setState({ isRegistered: true })
                                }
                                break;
                            };
                            case 'soundSleeperMode': {
                                setSoundSleeperMode(item[1])
                                break;
                            };
                            case 'favourite': {
                                let soundList = { ...soundsList };
                                const favouriteKeys = JSON.parse(item[1]);
                                Object.keys(soundList).forEach((key) => {
                                    const isExist = favouriteKeys.some((item) => item === key);
                                    soundList[key].isFavorite = isExist;
                                });
                                setSoundsList(soundList);
                                break;
                            };
                            case 'playerSettings': {
                                const res = JSON.parse(item[1])
                                setPlayerSettings(res)
                                break;
                            };
                            case 'homemadeSounds': {
                                JSON.parse(item[1]).forEach((value) => addSound(value))
                            }
                        }
                    }
                })

            });
        } catch (err) {
            console.warn('AsyncStorage getItem in splashScreen screen ', err)
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text> SplashScreen </Text>
            </View>
        );
    }
}

const mapStateToProps = (store) => ({
    mode: store.soundSleeperMode.mode,
    soundsList: store.soundSleeperMode.soundsList,
});

const mapDispatchToProps = {
    setSoundSleeperMode,
    setSoundsList,
    setPlayerSettings,
    addSound
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);