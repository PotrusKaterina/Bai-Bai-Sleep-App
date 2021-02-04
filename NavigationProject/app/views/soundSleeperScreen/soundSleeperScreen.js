import React, { Component } from 'react';
import { ImageBackground, View } from 'react-native';
import Music_note from '../../assets/icons/Music_note';
import { config } from '../../config/config';
import { styles } from './styles';
import { connect } from 'react-redux';
import { setSoundSleeperMode } from './redux/soundSleeperSortActions';
import { getSoundSleeperMode } from './soundSleeperApi';
import AsyncStorage from '@react-native-community/async-storage';

export class SoundSleeperScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null,
        }
    }

    setHomemadeSoundToAsyncStorage = async () => {
        try {
            const { soundsList } = this.props;
            const homemadeSounds = Object.values(soundsList).filter((value) => value.title === 'HOMEMADE');
            await AsyncStorage.setItem('homemadeSounds', JSON.stringify(homemadeSounds));
        } catch (err) {
            console.warn(err);
        }
    }

    componentDidUpdate = () => {
        this.setHomemadeSoundToAsyncStorage();
    }

    static getDerivedStateFromProps(nextProps) {
        const { mode, soundsList, navigation } = nextProps;
        const content = getSoundSleeperMode(soundsList, mode, navigation);
        const result = { content, soundsList };
        return result;
    }

    render() {
        const { content } = this.state;
        return (
            <View style={styles.container}>
                {content}
            </View>
        );
    }
}

SoundSleeperScreen.navigationOptions = ({ navigation }) => ({
    tabBarIcon: ({ focused }) => {
        const color = focused ? config.COLOR_WHITE : config.COLOR_MIDDLE_VIOLET;
        return <Music_note {...{ color }} />;
    }
});

const mapStateToProps = (store) => ({
    mode: store.soundSleeperMode.mode,
    soundsList: store.soundSleeperMode.soundsList,
});

const mapDispatchToProps = {
    setSoundSleeperMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(SoundSleeperScreen);