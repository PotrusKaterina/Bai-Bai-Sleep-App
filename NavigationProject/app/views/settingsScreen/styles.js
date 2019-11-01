import { StyleSheet } from 'react-native';
import {config} from '../../config/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgraundImage: {
        width: '100%',
        height: '100%',
    },
    header: {
        padding: 10,
        paddingBottom: 0,
        color: config.COLOR_BLUE,
    },
    text: {
        color: config.COLOR_WHITE,
        ...config.MIDLE,
    },
});