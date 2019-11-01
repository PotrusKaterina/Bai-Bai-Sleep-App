import { StyleSheet } from 'react-native';
import { config } from '../../../config/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 7,
        paddingBottom: 0,
        fontSize: 16,
        color: config.COLOR_BLUE,
    },
});