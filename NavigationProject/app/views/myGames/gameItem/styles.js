import { StyleSheet } from 'react-native';
import { config } from '../../../config/config';

export const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '90%',
        backgroundColor: config.COLOR_WHITE,
        marginVertical: 15,
        alignSelf: 'center',
        borderRadius: 7,
        justifyContent: 'center'
    },
    title: {
        paddingLeft: 15,
        fontSize: 18,
        color: config.COLOR_LIGHT_VIOLET
    }
});