import { Dimensions } from 'react-native';

export const getNewVolume = ({ dy }, volume) => {
    const windowHeight = Dimensions.get('window').height;
    let result = volume;
    const draggedDown = dy > windowHeight * 0.4;
    const draggedUp = dy < windowHeight * 0.4;

    if (draggedDown) return result < 0.2 ? result : result - 0.1
    if (draggedUp) return result > 0.8 ? result : result + 0.1

    return result < 1 && result > 0 ? result : result > 1 ? 1 : 0.2
};