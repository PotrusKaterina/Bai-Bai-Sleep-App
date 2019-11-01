import { StyleSheet } from 'react-native';
import { config } from '../../../../config/config';

export const styles = StyleSheet.create({
    container: {
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: config.COLOR_LIGHT_GRAY,
            borderBottomWidth: 0.3,
            paddingBottom: 8,
            marginTop: 8,
    },
    title: {
        fontSize: 14,
        padding: 5,
        paddingTop: 3,
        paddingBottom: 0,
        color: config.COLOR_WHITE,

    },  
    videoLenght: {
        fontSize: 10,
        padding: 5,
        paddingTop: 0,
        color: config.COLOR_LIGHT_GRAY,
    },
    itemNumber: {
        margin: 10,
        height: 30,
        width: 30,
        borderRadius: 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberInButton: {      
        fontSize: 18,
    },
    textContainer: {
        marginBottom: 8,
    }
});