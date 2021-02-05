import { StyleSheet } from 'react-native';
import { config } from '../../../config/config';

export const styles = StyleSheet.create({
    container: {
        justifyContent:'space-around',
        flexDirection: 'row',
        flex: 2,     
        margin: 13,
    },
    text: {
        margin: 15,
        color: config.COLOR_WHITE,
        fontSize: config.MIDLE.fontSize,
    },
});