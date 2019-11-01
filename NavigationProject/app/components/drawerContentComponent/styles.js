import { StyleSheet } from 'react-native';
import { config } from '../../config/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: config.COLOR_GRAY,
    },
    text: {
        color: config.COLOR_WHITE,
    }
});