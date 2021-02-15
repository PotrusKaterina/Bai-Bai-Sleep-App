import { SET_NAME, SET_PHOTO, DELETE, DELETE_PHOTO } from './userActions';

const INITIAL_STATE = {
    name: '',
    photo: '',
};

export const user = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_NAME: {
            return {
                ...state,
                name: payload,
            }
        };
        case SET_PHOTO: {
            return {
                ...state,
                photo: payload
            }
        };
        case DELETE_PHOTO: {
            return {
                ...state,
                photo: ''
            }
        };
        case DELETE: {
            return INITIAL_STATE
        };
        default: {
            return state
        }
    }
};