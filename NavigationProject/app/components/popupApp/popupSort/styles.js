import { StyleSheet } from 'react-native';
import { config } from '../../../config/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: 'center',
        alignItems: 'center',
    },
    popupContainer: {
        width: "90%",
        backgroundColor: config.COLOR_GRAY,
    },
    text: {
        padding: 20,
        fontWeight: 'bold',
        color: config.COLOR_WHITE,
        fontSize: 16,
    },
});