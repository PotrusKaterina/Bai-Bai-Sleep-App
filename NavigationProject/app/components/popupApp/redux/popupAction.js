export const SET_CONTENT = 'SET_CONTENT';
export const CLEAR = 'CLEAR';

export const setContent = (payload) => ({ type: SET_CONTENT, payload });

export const clear = () => ({ type: CLEAR });