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
    image: {
        height: 400,
        width: '100%',
        resizeMode: 'cover',
    },
    authorsText: {
        color: config.COLOR_LIGHT_VIOLET,
        marginBottom: 5
    },
    text: {
        color: config.COLOR_LIGHT_VIOLET,
        fontSize: 19,
    },
    textContainer: {
        margin: 10,
        marginTop: 1,
    },
});