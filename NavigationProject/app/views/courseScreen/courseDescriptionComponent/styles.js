import { StyleSheet } from 'react-native';
import { config } from '../../../config/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginTop: 2,
        marginBottom: 3,
    },
    titleText: {
        alignSelf: 'center',
        color: config.COLOR_LIGHT_VIOLET,
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
    },
    descriptonText: {
        color: config.COLOR_MIDDLE_VIOLET,
        width: '94%',
        marginBottom: 10,
    },
    descriptionContainer: {
        flexDirection: 'row',
        flex: 1
    },
    line: {
        width: '100%',
        alignSelf: 'center',
        margin: 1.5,
        borderBottomColor: config.COLOR_LIGHT_VIOLET,
        borderBottomWidth: 1,
    },
});