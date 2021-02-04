import { StyleSheet } from 'react-native';
import { config } from '../../../config/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    text: {
        margin: 15,
        marginBottom: 0,
        color: config.COLOR_LIGHT_VIOLET,
        fontSize: config.MIDLE.fontSize,
        fontWeight: 'bold'
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