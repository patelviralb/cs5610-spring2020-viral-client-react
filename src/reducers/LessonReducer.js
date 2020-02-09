import LessonActions from "../actions/LessonActions"

const initialState = {
    lessons: []
}

const LessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case LessonActions.FIND_LESSONS_FOR_MODULE:
            return {
                lessons: action.allFoundLessons
            }
        case LessonActions.CREATE_NEW_LESSON:
            return {
                lessons: [
                    ...state.lessons,
                    action.newAddedLesson
                ],
                selectedLessonID: state.selectedLessonID
            }
        case LessonActions.DELETE_LESSON:
            return {
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonID),
                selectedLessonID: state.selectedLessonID
            }
        case LessonActions.UPDATE_LESSON:
            const index = state.lessons.findIndex((lesson) => lesson._id === action.lessonID)
            return {
                lessons: [
                    ...state.lessons.slice(0, index),
                    action.updatedLesson,
                    ...state.lessons.slice(index + 1)
                ],
                selectedLessonID: state.selectedLessonID
            }
        case LessonActions.SELECT_LESSON:
            return {
                lessons: [
                    ...state.lessons
                ],
                selectedLessonID: action.selectedLessonID
            }
        case LessonActions.REMOVE_ALL_LESSONS:
            return {
                lessons: []
            }
        default:
            return state
    }
}

export default LessonReducer