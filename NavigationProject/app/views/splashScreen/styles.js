import { StyleSheet } from 'react-native';
import { config } from '../../config/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    image: {
        height: 250,
        width: 250,
        borderRadius: 150,
        borderColor: config.COLOR_LIGHT_VIOLET,
        borderWidth: 2,
        backgroundColor: 'violet'
    },
    text: {
        fontFamily: 'Mystical Snow',
        fontSize: 20,
        color: config.COLOR_LIGHT_VIOLET
    }
});