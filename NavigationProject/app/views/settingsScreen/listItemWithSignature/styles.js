import { StyleSheet } from 'react-native';
import { config } from '../../../config/config';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    item: {
        padding: 7,
        borderColor: config.COLOR_LIGHT_GRAY,
        borderBottomWidth: 0.3,
    },
    title: {
        fontSize: 14,
        padding: 5,
        paddingTop: 3,
        paddingBottom: 0,
        color: config.COLOR_WHITE,

    },
    signature: {
        fontSize: 10,
        padding: 5,
        paddingTop: 0,
        color: config.COLOR_WHITE,
    },
    icon: {
        marginLeft: 20,
    },

});