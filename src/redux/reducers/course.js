import { FETCH_COURSES, FETCH_COURSE_DETAIL } from "../constants/course";

const initialState = {
    courseList: [], 
    courseDetail: {}
}

const reducer = (state=initialState, {type, payload, ...action}) => {

    switch (type) {
        case FETCH_COURSES: 
            state.courseList = payload;
            return {...state};
        case FETCH_COURSE_DETAIL : 
            return {...state, courseDetail: payload};
        default:
            return state;
    }
}

export default reducer; 
