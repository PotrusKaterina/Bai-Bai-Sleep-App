import { StyleSheet } from 'react-native';
import { config } from '../../config/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: config.COLOR_LIGHT_VIOLET_OPACITY,
    },
    input: {
        alignSelf: 'center',
        color: config.COLOR_LIGHT_VIOLET,
        fontSize: 20,
        borderBottomColor: config.COLOR_LIGHT_VIOLET,
        borderBottomWidth: 1,
        width: '90%',
        padding: 35,
        paddingBottom: 0,
        textAlign: 'center',
        marginBottom:30,
    },
    slider: {
        width: '95%',
        alignSelf: 'center'
    }
});