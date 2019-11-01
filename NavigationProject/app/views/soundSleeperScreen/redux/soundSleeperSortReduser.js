import { SETMODE, ADD_SOUND, SET_FAVOURITES, SET_SOUNDS_LIST } from './soundSleeperSortActions'

const INITIAL_STATE = {
    mode: '',
    soundsList: {
        1: { text: 'Hairdryer', id: 1, isFavorite: false, title: 'BEST FOR NEWBORNS' },
        2: { text: 'Hush', id: 2, isFavorite: false, title: 'BEST FOR NEWBORNS' },
        3: { text: 'Shhh', id: 3, isFavorite: false, title: 'BEST FOR NEWBORNS' },
        4: { text: 'Vacuum Cleaner', id: 4, isFavorite: false, title: 'BEST FOR NEWBORNS' },
        5: { text: 'Womb', id: 5, isFavorite: false, title: 'BEST FOR NEWBORNS' },
        10: { text: 'Car Ride', id: 10, isFavorite: false, title: 'BEST FOR INFANTS' },
        11: { text: 'Market', id: 11, isFavorite: false, title: 'BEST FOR TODDLERS' },
        6: { text: 'Ocean', id: 6, isFavorite: false, title: 'BEST FOR TODDLERS' },
        7: { text: 'Pond', id: 7, isFavorite: false, title: 'BEST FOR TODDLERS' },
        8: { text: 'Bubbling Brook', id: 8, isFavorite: false, title: 'BEST FOR PARENTS' },
        9: { text: 'Fireplace', id: 9, isFavorite: false, title: 'BEST FOR PARENTS' },
    },
};

export const soundSleeperMode = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case SETMODE: {
            return {
                ...state,
                mode: payload,
            }
        };
        case ADD_SOUND: {
            return {
                ...state,
                soundsList: {
                    ...state.soundsList,
                    [payload.id]: payload
                }
            }
        };
        case SET_FAVOURITES: {
            return {
                ...state,
                soundsList: {
                    ...state.soundsList,
                    [payload.id]: {
                        ...state.soundsList[payload.id],
                        isFavorite: payload.isFavorite,
                    }
                }
            }
        };
        case SET_SOUNDS_LIST: {
            return {
                ...state,
                soundsList: { ...payload }
            }
        };
        default: {
            return state
        }
    }
};