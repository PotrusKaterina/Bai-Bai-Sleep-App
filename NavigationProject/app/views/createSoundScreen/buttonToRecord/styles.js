import { StyleSheet } from 'react-native';
import { config } from '../../../config/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 2,
        justifyContent: 'center',
    },
    button: {
        margin: 15,
        padding: 15,
        justifyContent: 'center',
        borderRadius: 50,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: config.COLOR_MIDDLE_VIOLET,
        height: 90,
        width: 90,
    },
    timeText: {
        fontSize: 20,
        color: config.COLOR_WHITE,
        alignSelf: 'center',
    },
    slider: {
        flex: 1,
        justifyContent: 'center',
    }
});