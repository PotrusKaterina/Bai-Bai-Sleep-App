import { StyleSheet } from 'react-native';
import { config } from '../../../config/config';

export const styles = StyleSheet.create({
    container: { 
        backgroundColor: config.COLOR_BLUE,
        justifyContent: 'center',
    },
    text: {      
        height: 35,
        padding: 10,
        color: config.COLOR_WHITE,
        ...config.MIDLE,
    }
});