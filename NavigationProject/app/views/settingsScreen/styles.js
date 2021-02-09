import { StyleSheet } from 'react-native';
import { config } from '../../config/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: config.COLOR_LIGHT_VIOLET_OPACITY
    },
    backgraundImage: {
        width: '100%',
        height: '100%',
    },
    header: {
        padding: 10,
        marginLeft: 10,
        fontSize: 15,
        color: config.COLOR_LIGHT_VIOLET,
        fontWeight: 'bold'
    },
    text: {
        color: config.COLOR_WHITE,
        ...config.MIDLE,
    },
});