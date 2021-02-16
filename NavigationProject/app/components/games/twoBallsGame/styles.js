import { StyleSheet } from 'react-native';
import { config } from '../../../config/config';

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: config.COLOR_LIGHT_VIOLET_OPACITY
    },
    firstRound: {
        height: 10,
        width: 10,
        backgroundColor: config.COLOR_LIGHT_VIOLET,
        borderRadius: 10
    },
    secondRound: {
        height: 30,
        width: 30,
        backgroundColor: config.COLOR_DARK_VIOLET,
        borderRadius: 100
    }
});