import { combineReducers } from 'redux';
import { modal } from '../../components/popupApp/redux/popupReduser';
import { soundSleeperMode } from '../../views/soundSleeperScreen/redux/soundSleeperSortReduser';
import { playerSettings } from '../../views/playerScreen/redux/playerSettingsReduser';

export const rootReduser = combineReducers({
    modal, 
    soundSleeperMode,
    playerSettings,
})