import { StyleSheet } from 'react-native';
import { config } from '../../../config/config';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        padding: 10,
        marginTop: 5,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: config.COLOR_WHITE,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: config.COLOR_WHITE,
        ...config.MIDLE,
    }
});