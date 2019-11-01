import { SET_CONTENT, CLEAR } from './popupAction'

const INITIAL_STATE = {
    type: '',
};

export const modal = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_CONTENT: {
            return {
                ...state,
                type: payload,
            }
        }
        case CLEAR: {
            return {
               ...INITIAL_STATE
            }
        }
        default: {
            return state
        }
    }
};