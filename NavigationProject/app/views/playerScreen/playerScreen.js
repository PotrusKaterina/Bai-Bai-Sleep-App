import React, { Component } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import TextComponent from './textComponent/textComponent';
import PlayerButtons from './buttonsOnPlayer/buttonsOnPlayer';
import ImageComponent from './imageComponent/imageComponent';
import { setFavourites, deleteSound } from '../soundSleeperScreen/redux/soundSleeperSortActions';
import { connect } from 'react-redux';
import { setPlayerSettings } from './redux/playerSettingsActions';
import HeaderButtons from '../createSoundScreen/headerButtons/headerButtons';

export class PlayerScreen extends Component {
    constructor(props) {
        super(props);
        this.id = props.navigation.getParam('id', 0);
        this.state = {
            changeValue: () => { },
        }
    }

    setChangeValue = (changeValue) => {
        this.setState({ changeValue });
    }

    componentDidMount() {
        const { soundsList } = this.props;
        this.isFavourite = soundsList;
    }

    deleteSoundOff = () => {
        const { navigation, deleteSound } = this.props;
        console.log('deleting', deleteSound)
        navigation.navigate('SoundSleeperScreen');
        deleteSound(this.id)
    }

    render() {
        const { soundsList, setFavourites, volume, duration, setPlayerSettings, deleteSound } = this.props;
        const { changeValue } = this.state;
        return (
            <View style={styles.container}>
                <ImageComponent {...{ setFavourites, soundsList, item: soundsList[this.id] }} />
                <TextComponent {...{ volume, duration, setPlayerSettings, changeValue }} />
                {/* <HeaderButtons deleteSound0={deleteSound} /> */}
                <PlayerButtons title={soundsList[this.id].text} path={soundsList[this.id].path} volume={volume} duration={duration} setChangeValue={this.setChangeValue} />
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
});

const mapDispatchToProps = {
    setFavourites,
    setPlayerSettings,
    deleteSound,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerScreen);