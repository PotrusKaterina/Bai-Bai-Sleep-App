import { config } from "../../config/config";

export const getTitleForTollBar = (index) => {
    let title = '';
    switch (index) {
        case 0: {
            title = config.SoundSleeper;
            break;
        };
        case 1: {
            title = config.SleepTracking;
            break;
        };
        case 2: {
            title = config.SoundSleeperU;
            break;
        };
        case 3: {
            title = config.Settings;
            break;
        };
        default: {
            title = config.SoundSleeper;
            break;
        };
    }
    return title;
}