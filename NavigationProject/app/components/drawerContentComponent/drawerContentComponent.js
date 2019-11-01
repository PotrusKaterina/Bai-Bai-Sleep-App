import React, { Component } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import DrawerButton from '../buttons/drawerButton/drawerButton';

export class DrawerContentComponent extends Component {
    goToAccount = () => {
        const { navigation } = this.props;
        navigation.closeDrawer();
        navigation.navigate('AccountScreen');
    }

    exit = () => {
        const { navigation } = this.props;
        navigation.navigate('Auth');
    }

    render() {
        return (
            <View style={styles.container}>
                <DrawerButton title={'Account'} onPress={this.goToAccount} />
                <DrawerButton title={'Exit'} onPress={this.exit} />
            </View>
        );
    }
}

export default DrawerContentComponent;