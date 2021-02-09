import React, { Component } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import DrawerButton from '../buttons/drawerButton/drawerButton';

export class DrawerContentComponent extends Component {
    goToAccount = () => {
        const { navigation } = this.props;
        navigation.closeDrawer();
        navigation.navigate('AccountScreen');
    };

    goToGame = () => {
        const { navigation } = this.props;
        navigation.closeDrawer();
        navigation.navigate('MyGames');
    };

    exit = () => {
        const { navigation } = this.props;
        navigation.navigate('RegistrationScreen');
    };

    render() {
        return (
            <View style={styles.container}>
                <DrawerButton title={'Account'} onPress={this.goToAccount} />
                <DrawerButton title={'My Games'} onPress={this.goToGame} />
                <DrawerButton title={'Exit'} onPress={this.exit} />
            </View>
        );
    }
}

export default DrawerContentComponent;