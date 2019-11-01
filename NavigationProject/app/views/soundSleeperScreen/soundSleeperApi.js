import React from 'react';
import ListBlock from "../../components/listBlock/listBlock";
import ListSounsSleeperScrollView from '../../components/listSoundSleeperScrollView/listSoundSleeperScrollView';

export const getSoundSleeperMode = (soundsList, mode, navigation) => {
    result = null;
    switch (mode) {
        case 'ABC': {
            result = <ListSounsSleeperScrollView {...{soundsList, navigation }} />
            break;
        };
        case 'Favourites': {
            result =  <ListBlock {...{soundsList, navigation, mode }} />
            break;
        };
        default: {
            result = <ListBlock {...{soundsList, navigation, mode }} />
            break;
        };
    }
    return result;
}