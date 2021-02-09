import { StyleSheet } from 'react-native';
import { config } from '../../../config/config';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    item: {
        padding: 7,
        marginBottom: 7,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 7,
        backgroundColor: config.COLOR_WHITE,
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
        padding: 5,
        color: config.COLOR_MIDDLE_VIOLET,
    },
    signature: {
        fontSize: 12,
        padding: 5,
        paddingTop: 0,
        color: config.COLOR_LIGHT_VIOLET,
    },
    icon: {
        marginLeft: 20,
    },
});