import { StyleSheet } from 'react-native';
import { config } from '../../../config/config';

export const styles = StyleSheet.create({
    container: {
        padding: 15,
        alignItems: 'center',
        width: '80%',
        backgroundColor: config.COLOR_WHITE,
        borderRadius: 10,
        margin: 5,
    },
    text: {
        fontWeight: 'bold',
        color: config.COLOR_DARK_VIOLET,
    },
});