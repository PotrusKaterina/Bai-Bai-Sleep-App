import { StyleSheet } from 'react-native';
import { config } from '../../../config/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginTop: 2,
        marginBottom: 3,
    },
    authorsText: {
        color: config.COLOR_MIDDLE_VIOLET,
        marginBottom: 5,
    },
    textTitle: {
        color: config.COLOR_LIGHT_VIOLET,
        fontSize: 19,
        marginBottom: 13,
    },
    button: {
        backgroundColor: config.COLOR_LIGHT_VIOLET,
        height: 40,
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        marginBottom: 5,
    },
    buttonText: {
        fontSize: 14,
        color: config.COLOR_WHITE,
    },
    line: {
        width: '100%',
        alignSelf: 'center',
        margin: 1.5,
        borderBottomColor: config.COLOR_LIGHT_VIOLET,
        borderBottomWidth: 1,
    },
});