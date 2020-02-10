import CourseActions from "../actions/CourseActions"

const initialState = {
  course: []
};

const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case CourseActions.FIND_COURSE_FROM_COURSE_ID:
      return {
        course: action.course
      };
    default:
      return state
  }
};

export default CourseReducer