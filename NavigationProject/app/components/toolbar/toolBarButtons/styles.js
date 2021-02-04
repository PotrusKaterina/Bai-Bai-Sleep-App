import { StyleSheet } from 'react-native';
import { config } from '../../../config/config';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: config.COLOR_LIGHT_VIOLET,
        justifyContent:'center',
        alignItems:'center',
        height: 35,
    },
    button: {
        height: 30,
        width: 30,
        borderRadius: 100,
        justifyContent:'center',
        alignItems:'center',
        marginRight: 20,
    },
});