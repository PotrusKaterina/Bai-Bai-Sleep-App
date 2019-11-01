import { SET_PLAYER_SETTINGS } from "./playerSettingsActions";

const INITIAL_STATE = {
    volume: 0.2,
    duration: 1800,
};

export const playerSettings = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_PLAYER_SETTINGS: {
            return {
                ...state,
                ...payload
            }
        };
        default: {
            return state
        };
    }
};