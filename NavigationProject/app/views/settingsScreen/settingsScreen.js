import React, { Component } from 'react';
import { SectionList, Text, View } from 'react-native';
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
            <View style={styles.container} >
                <SectionList
                    sections={settingsList}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <ListItemWithSignature title={item.text} signature={item.signature} onPress={this.goToOneOfSettingsPage} />}
                    renderSectionHeader={({ section: { title } }) => (<Text style={styles.header}>{title}</Text>)}
                />
            </View>
        );
    }
}

SettingsScreen.navigationOptions = ({ navigation }) => ({
    tabBarIcon: ({ focused }) => {
        const color = focused ? config.COLOR_WHITE : config.COLOR_MIDDLE_VIOLET;
        return <Settings {...{ color }} />;
    }
});

export default SettingsScreen;