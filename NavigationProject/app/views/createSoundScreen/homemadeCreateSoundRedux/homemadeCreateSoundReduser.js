import { SET_HOMEMADESOUNDS } from './homemadeCreateSoundActions';

const INITIAL_STATE = {
    homeMadeSounds: [{ title: 'Homemade', data: {} }]
};

export const homemadeCreateSound = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_HOMEMADESOUNDS: {
            return {
                ...state,
                ...homeMadeSounds.concat(payload)
            }
        };
        case ADD_SOUND: {
            return {
                ...state,
                ...homeMadeSounds[0].data.payload
            }
        };
        default: {
            return state
        };
    }
};