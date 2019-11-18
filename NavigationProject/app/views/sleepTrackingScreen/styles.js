import { StyleSheet } from 'react-native';
import { config } from '../../config/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgraundImage: {
        width: '100%',
        height: '100%',
    },
    text: {
        alignSelf: 'center',
        color: config.COLOR_WHITE,
        fontSize: 20,
        margin: 40,
    },
    timer: {
        alignSelf: 'center',
        color: config.COLOR_WHITE,
        fontSize: 84,
    },
});