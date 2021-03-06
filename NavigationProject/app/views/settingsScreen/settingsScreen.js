import React, { Component } from 'react';
import { SectionList, Text, ImageBackground } from 'react-native';
import Settings from '../../assets/icons/Settings';
import { config } from '../../config/config';
import { styles } from './styles';
import { settingsList } from '../../../__mocks__/settingsMocks';
import ListItemWithSignature from './listItemWithSignature/listItemWithSignature';

export class SettingsScreen extends Component {
    constructor(props) {
        super(props);
    }

    goToOneOfSettingsPage = () => {
        const { navigation } = this.props;
        navigation.closeDrawer();
        navigation.navigate('SoundSleeperScreen');
    }

    render() {
        return (
            <ImageBackground source={require('../../assets/images/background.jpg')} style={styles.backgraundImage} >
                <SectionList
                    sections={settingsList}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <ListItemWithSignature title={item.text} signature={item.signature} onPress={this.goToOneOfSettingsPage} />}
                    renderSectionHeader={({ section: { title } }) => (<Text style={styles.header}>{title}</Text>)}
                />
            </ImageBackground>
        );
    }
}

SettingsScreen.navigationOptions = ({ navigation }) => ({
    tabBarIcon: ({ focused }) => {
        const color = focused ? config.COLOR_BLUE : config.COLOR_WHITE;
        return <Settings {...{ color }} />;
    }
});

export default SettingsScreen;