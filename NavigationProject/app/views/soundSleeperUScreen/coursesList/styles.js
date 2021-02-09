import { StyleSheet } from 'react-native';
import { config } from '../../../config/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginLeft: 5,
        padding: 7,
        fontSize: 16,
        fontWeight: 'bold',
        color: config.COLOR_LIGHT_VIOLET,
    },
});