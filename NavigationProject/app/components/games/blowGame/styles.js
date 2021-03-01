import { StyleSheet } from 'react-native';
import { config } from '../../../config/config';

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: config.COLOR_LIGHT_VIOLET_OPACITY
    },
    round: {
        height: 200,
        width: 120,
    },
});