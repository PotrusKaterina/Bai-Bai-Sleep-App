import { StyleSheet } from 'react-native';
import { config } from '../../../config/config';

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: config.COLOR_LIGHT_VIOLET_OPACITY
    },
    round: {
        height: 70,
        width: 70,
        backgroundColor: config.COLOR_LIGHT_VIOLET,
        borderRadius: 100,
    },
});