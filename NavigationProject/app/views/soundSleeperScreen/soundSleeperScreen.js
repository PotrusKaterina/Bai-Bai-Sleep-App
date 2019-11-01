import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import Music_note from '../../assets/icons/Music_note';
import { config } from '../../config/config';
import { styles } from './styles';
import { connect } from 'react-redux';
import { setSoundSleeperMode } from './redux/soundSleeperSortActions';
import { getSoundSleeperMode } from './soundSleeperApi';

export class SoundSleeperScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null,
        }
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
            <ImageBackground source={require('../../assets/images/background.jpg')} style={styles.backgraundImage} style={styles.container}>
                {content}
            </ImageBackground >
        );
    }
}

SoundSleeperScreen.navigationOptions = ({ navigation }) => ({
    tabBarIcon: ({ focused }) => {
        const color = focused ? config.COLOR_BLUE : config.COLOR_WHITE;
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