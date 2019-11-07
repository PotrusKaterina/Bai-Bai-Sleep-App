export const SETMODE = 'SETMODE';
export const ADD_SOUND = 'ADD_SOUND';
export const SET_FAVOURITES = 'SET_FAVOURITES';
export const SET_SOUNDS_LIST = 'SET_SOUNDS_LIST';
export const DELETE_SOUND = 'DELETE_SOUND';

export const setSoundSleeperMode = (payload) => ({ type: SETMODE, payload });

export const addSound = (payload) => ({ type: ADD_SOUND, payload });

export const setFavourites = (payload) => ({ type: SET_FAVOURITES, payload });

export const setSoundsList = (payload) => ({ type: SET_SOUNDS_LIST, payload });

export const deleteSound = () => ({ type: DELETE_SOUND, payload })