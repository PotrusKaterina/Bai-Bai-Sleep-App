import { SET_SLEEP_COURSE, ADD_SLEEP_COURSE } from "./sleepCourseActions";

const INITIAL_STATE = {
    sleepingCourses: []
};

export const sleepCourse = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_SLEEP_COURSE: {
            return {
                ...state,
                sleepingCourses: payload
            }
        };
        case ADD_SLEEP_COURSE: {
            return {
                ...state,
                sleepingCourses: [...state.sleepingCourses, payload]
            }
        };
        default: {
            return state
        };
    }
};