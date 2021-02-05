import { StyleSheet } from 'react-native';
import { config } from '../../config/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: config.COLOR_LIGHT_VIOLET,
    },
    cardContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: config.COLOR_LIGHT_VIOLET,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: '80%',
        height: '80%',
        borderRadius: 20,
        backgroundColor: config.COLOR_WHITE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 280,
        borderRadius: 10,
        borderColor: config.COLOR_LIGHT_GRAY,
        borderWidth: 1.5,
        margin: 20,
        paddingHorizontal: 20
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 150,
        borderColor: config.COLOR_LIGHT_VIOLET,
        borderWidth: 2,
    },
    imageContainer: {
        flex: 1,
        width: '100%',
        paddingBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textAndInputConteiner: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 20,
        textAlign: 'center',
        color: config.COLOR_GRAY
    },
    buttonsContainer: {
        flex: 2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        padding: 15,
        alignItems: 'center',
        width: '80%',
        borderRadius: 30,
        margin: 5,
        backgroundColor: config.COLOR_MIDDLE_VIOLET
    },
    butonTitle: {
        color: config.COLOR_WHITE,
        fontWeight: 'bold',
    },
});