
import { gamesObject } from './services';

export const GamesFacade = ({ navigation }) => {
    const { name } = navigation.state.params;

    return (
        gamesObject[name]
    );
}

export default GamesFacade;