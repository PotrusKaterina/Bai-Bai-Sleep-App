export const SET_NAME = 'SET_NAME';
export const SET_PHOTO = 'SET_PHOTO';
export const DELETE_PHOTO = 'DELETE_PHOTO';
export const DELETE = 'DELETE';

export const setUserName = (payload) => ({ type: SET_NAME, payload });

export const setUserPhoto = (payload) => ({ type: SET_PHOTO, payload });

export const deleteUserPhoto = () => ({ type: DELETE_PHOTO });

export const deleteUser = () => ({ type: DELETE });