import { StyleSheet } from 'react-native';
import { config } from '../../../config/config';

export const styles = StyleSheet.create({
    container: {
    },
    button: {
        backgroundColor: config.COLOR_GRAY,
        padding: 10,
        alignItems: 'center',   
        width: 160,
        borderRadius: 4,
        margin: 5,
    },
    text: {
        fontWeight: 'bold',
        color: config.COLOR_WHITE,
    },
});