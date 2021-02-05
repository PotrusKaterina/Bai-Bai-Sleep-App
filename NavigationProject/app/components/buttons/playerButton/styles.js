import { StyleSheet } from 'react-native';
import { config } from '../../../config/config';

export const styles = StyleSheet.create({
    container: {
        height: '90%',
        width: '31%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    text: {
        color: config.COLOR_WHITE,
        fontSize: 18,
    },
});