import { StyleSheet } from 'react-native';
import { config } from '../../../../config/config';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    item: {
        margin: 7,
        borderRadius: 7,
        paddingLeft: 10,
        height: 95,
        width: '90%',
        backgroundColor: config.COLOR_WHITE,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
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
        fontSize: 16,
        padding: 5,
        paddingTop: 0,
        paddingBottom: 0,
        color: config.COLOR_MIDDLE_VIOLET,

    },
    authors: {
        fontSize: 14,
        padding: 5,
        paddingBottom: 0,
        color: config.COLOR_LIGHT_VIOLET,

    },
    freeText: {
        fontSize: 13,
        color: config.COLOR_LIGHT_VIOLET,
        paddingLeft: 5
    },
    image: {
        width: '20%',
        height: '100%',
        borderRadius: 100,
        marginRight: 10
    },

});