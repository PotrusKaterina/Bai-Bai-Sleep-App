import { StyleSheet } from 'react-native';
import { config } from '../../config/config';

export const styles = StyleSheet.create({
    container: {
    },
    item: {
        padding: 7,        
        borderColor: config.COLOR_LIGHT_GRAY,
        borderBottomWidth: 0.3,
    },
    title: {
        fontSize: 18,
        padding: 7,
        color: config.COLOR_WHITE,

    },
});