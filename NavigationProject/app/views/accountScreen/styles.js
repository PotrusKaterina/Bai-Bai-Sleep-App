import { StyleSheet } from 'react-native';
import { config } from '../../config/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: config.COLOR_LIGHT_VIOLET_OPACITY,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 700,
    },
    avatarContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
    buttonContainer: {
        width: '50%',
        height: 50,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: config.COLOR_WHITE,
        borderRadius: 8,
        shadowColor: "#000",
        marginTop: 30,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
        color: config.COLOR_LIGHT_VIOLET,
    },
    nameContainer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    nameText: {
        borderBottomWidth: 1,
        borderColor: config.COLOR_LIGHT_VIOLET,
        fontSize: 18,
        fontFamily: 'Mystical Snow',
        color: config.COLOR_LIGHT_VIOLET
    },
    avatarAndNameContainer: {
        flex: 1,
        flexDirection: 'row',
    }
});