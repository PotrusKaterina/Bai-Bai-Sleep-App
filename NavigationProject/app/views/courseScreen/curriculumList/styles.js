import { StyleSheet } from 'react-native';
import { config } from '../../../config/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleText: {
        alignSelf: 'center',
        color: config.COLOR_BLUE,
        fontSize: 20,
        marginBottom: 10,
    },
    header: {
        margin: 10,
        fontSize: 15,
        color: config.COLOR_BLUE,
    },
});