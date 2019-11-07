import React, { Component } from 'react';
import { View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from './styles';
import { config } from '../../config/config';
import ButtonToRecord from './buttonToRecord/buttonToRecord';
import { addSound, deleteSound } from '../soundSleeperScreen/redux/soundSleeperSortActions';
import { connect } from 'react-redux';

export class CreateSoundScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homemadeSoundName: ''
        }
    }

    componentWillUnmount = () => {
        this.setState({ homemadeSoundName: '' });
    }

    setHomemadeSoundName = (text) => {
        this.setState({ homemadeSoundName: text.replace(/\s/g, '') })
    }

    render() {
        const { homemadeSoundName } = this.state;
        const { addSound } = this.props;
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <TextInput style={styles.input} placeholder={'Sound name'}
                        placeholderTextColor={config.COLOR_LIGHT_GRAY} onChangeText={this.setHomemadeSoundName} />
                    <ButtonToRecord homemadeSoundName={homemadeSoundName} addSound={addSound} />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

CreateSoundScreen.navigationOptions = ({ navigation }) => {
    const title = 'Create sound';
    const result = { title }
    return result;
};

const mapDispatchToProps = {
    addSound,
};

export default connect(null, mapDispatchToProps)(CreateSoundScreen);