import { StyleSheet } from 'react-native';
import { config } from '../../config/config';

export const styles = StyleSheet.create({
    container: {
    },
    item: {
        height: 50,
        width: '90%',
        backgroundColor: config.COLOR_WHITE,
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 5,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    title: {
        fontSize: 18,
        paddingLeft: 20,
        color: config.COLOR_LIGHT_VIOLET,
    },
});