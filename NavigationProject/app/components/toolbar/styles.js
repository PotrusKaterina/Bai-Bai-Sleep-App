import { StyleSheet } from 'react-native';
import {config} from '../../config/config';

export const styles = StyleSheet.create({
    container: {
        height: 35,
        flexDirection: 'row',
        backgroundColor: config.COLOR_LIGHT_VIOLET,
        justifyContent:'space-between',
        alignItems: 'center',
        paddingLeft: 15,
    },
    text: {
        color: config.COLOR_WHITE,
        ...config.MIDLE,
    },
});