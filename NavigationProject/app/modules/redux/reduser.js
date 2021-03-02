import { combineReducers } from 'redux';
import { modal } from '../../components/popupApp/redux/popupReduser';
import { soundSleeperMode } from '../../views/soundSleeperScreen/redux/soundSleeperSortReduser';
import { playerSettings } from '../../views/playerScreen/redux/playerSettingsReduser';
import { user } from '../../views/accountScreen/redux/userReduser';
import { sleepCourse } from '../../views/sleepTrackingScreen/redux/sleepCourseReduser';

export const rootReduser = combineReducers({
    modal,
    soundSleeperMode,
    playerSettings,
    user,
    sleepCourse,
})