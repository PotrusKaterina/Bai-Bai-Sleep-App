import { StyleSheet } from 'react-native';
import { config } from '../../../config/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(100,100,100,0.6)",
        justifyContent: 'center',
        alignItems: 'center',
    },
    popupContainer: {
        width: "90%",
        backgroundColor: config.COLOR_WHITE,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    text: {
        padding: 20,
        fontWeight: 'bold',
        color: config.COLOR_LIGHT_VIOLET,
        fontSize: 20,
    },
});