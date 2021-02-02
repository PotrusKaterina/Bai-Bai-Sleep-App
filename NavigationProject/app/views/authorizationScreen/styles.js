import { StyleSheet } from 'react-native';
import { config } from '../../config/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: config.COLOR_LIGHT_VIOLET,
    },
    imageContainer: {
        flex: 2,
        justifyContent: 'flex-end',
        paddingBottom: 30,
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 150,
        borderColor: config.COLOR_LIGHT_VIOLET,
        borderWidth: 2,
        alignItems: 'flex-start',
    },
    buttonsContainer: {
        flex: 2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});