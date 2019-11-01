import { StyleSheet } from 'react-native';
import { config } from '../../../../config/config';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    item: {
        padding: 7,
        borderColor: config.COLOR_LIGHT_GRAY,
        borderBottomWidth: 0.3,
    },
    title: {
        fontSize: 14,
        padding: 5,
        paddingTop: 0,
        paddingBottom: 0,
        color: config.COLOR_WHITE,

    },
    authors: {
        fontSize: 12,
        padding: 5,
        paddingTop: 0,   
        paddingBottom: 0,
        color: config.COLOR_LIGHT_GRAY,

    },
    freeText: {
        fontSize: 12,
        color: config.COLOR_WHITE,
        paddingLeft: 5
    },
    image: {
        width: 70,
        height: 70,
    },

});