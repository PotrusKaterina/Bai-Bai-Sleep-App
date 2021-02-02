import { StyleSheet } from 'react-native';
import { config } from '../../config/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: config.COLOR_LIGHT_VIOLET,
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 150,
        borderColor: config.COLOR_LIGHT_VIOLET,
        borderWidth: 2,
        alignItems: 'flex-start',
    },
    imageContainer: {
        paddingBottom: 30,
    }
});