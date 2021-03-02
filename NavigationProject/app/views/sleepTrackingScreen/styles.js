import { StyleSheet } from 'react-native';
import { config } from '../../config/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: config.COLOR_LIGHT_VIOLET_OPACITY
    },
    backgraundImage: {
        width: '100%',
        height: '100%',
    },
    text: {
        alignSelf: 'center',
        color: config.COLOR_LIGHT_VIOLET,
        fontSize: 40,
        fontFamily: 'Mystical Snow',
        margin: 40,
    },
    titleContainer: {
        flex: 1
    },
    chartContainer: {
        flex: 3,
        width: '100%',
    },
    chart: {
        height: '80%',
        width: '95%',
        alignSelf: 'center',
        justifyContent: 'flex-start'
    },
    instructionText: {
        alignSelf: 'center',
        color: config.COLOR_LIGHT_VIOLET,
        fontSize: 20,
        fontFamily: 'Mystical Snow',
        margin: 40,
    }
});