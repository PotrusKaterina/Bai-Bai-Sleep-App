import { StyleSheet } from 'react-native';
import { config } from '../../../config/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        margin: 15,
        marginBottom: 0,
        color: config.COLOR_WHITE,
        fontSize: config.MIDLE.fontSize,
    },
    textContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    slider: {
        width: '96%', 
        height: 40,
        alignSelf: 'center',
        margin: 0,
        borderBottomColor: config.COLOR_MIDDLE_GRAY,
        borderBottomWidth: 1,
    },
});