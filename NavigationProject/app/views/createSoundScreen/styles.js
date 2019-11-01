import { StyleSheet } from 'react-native';
import { config } from '../../config/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: config.COLOR_MIDDLE_GRAY,
    },
    input: {
        alignSelf: 'center',
        color: config.COLOR_WHITE,
        fontSize: 20,
        borderBottomColor: config.COLOR_LIGHT_GRAY,
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