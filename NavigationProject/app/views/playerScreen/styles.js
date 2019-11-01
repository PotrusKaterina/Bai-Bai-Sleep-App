import { StyleSheet } from 'react-native';
import { config } from '../../config/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgraundImage: {
        width: '100%',
        height: '100%',
    },
    image: {
        marginBottom: 5,
        marginTop: 5,
        height: 170,
        width: '100%',
        resizeMode: 'cover',
    },
});