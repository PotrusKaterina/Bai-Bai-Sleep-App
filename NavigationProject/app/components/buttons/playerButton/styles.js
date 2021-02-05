import { StyleSheet } from 'react-native';
import { config } from '../../../config/config';

export const styles = StyleSheet.create({
    container: {
        height: 165,
        width: '31%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    text: {
        color: config.COLOR_WHITE,
        fontSize: 18,
    },
});