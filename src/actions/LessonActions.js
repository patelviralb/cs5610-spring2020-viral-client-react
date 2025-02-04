const FIND_LESSON_FOR_MODULE = "FIND_LESSON_FOR_MODULE";
const CREATE_LESSON = "CREATE_LESSON";
const DELETE_LESSON = "DELETE_LESSON";
const UPDATE_LESSON = "UPDATE_LESSON";
const SELECT_LESSON = "SELECT_LESSON";
const REMOVE_ALL_LESSONS = "REMOVE_ALL_LESSONS";

export const findModuleLessons = (allFoundLessons) => ({
    type: FIND_LESSON_FOR_MODULE,
    allFoundLessons: allFoundLessons
});

export const createNewLesson = (newAddedLesson) => ({
    type: CREATE_LESSON,
    newAddedLesson: newAddedLesson
});

export const deleteLesson = (lessonID) => ({
    type: DELETE_LESSON,
    lessonID: lessonID
});

export const updateLesson = (lessonID, updatedLesson) => ({
    type: UPDATE_LESSON,
    lessonID: lessonID,
    updatedLesson: updatedLesson
});

export const updateLessonSelection = (lessonID) => ({
    type: SELECT_LESSON,
    selectedLessonID: lessonID
});

export const removeLessonsAfterModuleDelete = () => ({
    type: REMOVE_ALL_LESSONS
});

export default {
    FIND_LESSON_FOR_MODULE,
    CREATE_LESSON,
    DELETE_LESSON,
    UPDATE_LESSON,
    SELECT_LESSON,
    REMOVE_ALL_LESSONS
}