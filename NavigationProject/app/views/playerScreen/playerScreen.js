import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { styles } from './styles';
import TextComponent from './textComponent/textComponent';
import PlayerButtons from './buttonsOnPlayer/buttonsOnPlayer';
import ImageComponent from './imageComponent/imageComponent';
import { setFavourites } from '../soundSleeperScreen/redux/soundSleeperSortActions';
import { connect } from 'react-redux';
import { setPlayerSettings } from './redux/playerSettingsActions';

export class PlayerScreen extends Component {
    constructor(props) {
        super(props);
        this.id = props.navigation.getParam('id', 0);
        this.state = {
            changeValue: () => { },
        }
    }

    setChangeValue = (changeValue) => {
        this.setState({changeValue});
    }

    componentDidMount() {
        const { soundsList } = this.props;
        this.isFavourite = soundsList;
    }

    render() {
        const { soundsList, setFavourites, volume, duration, setPlayerSettings } = this.props;
        const { changeValue } = this.state;
        return (
            <ImageBackground source={require('../../assets/images/background.jpg')} style={styles.backgraundImage} style={styles.container}>
                <ImageComponent {...{ setFavourites, soundsList, item: soundsList[this.id] }} />
                <TextComponent {...{ volume, duration, setPlayerSettings, changeValue }} />
                <PlayerButtons title={soundsList[this.id].text} volume={volume} setChangeValue={this.setChangeValue}/>
            </ImageBackground >
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
    setPlayerSettings
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerScreen);