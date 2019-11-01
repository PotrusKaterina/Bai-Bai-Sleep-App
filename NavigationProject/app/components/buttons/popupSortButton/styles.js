import { StyleSheet } from 'react-native';
import { config } from '../../../config/config';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
    },

    text: {
        color: config.COLOR_LIGHT_GRAY,
        ...config.MIDLE,
        
    },
    icon: {
        margin: 20,
    }
});