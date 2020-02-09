const FIND_TOPICS_FOR_LESSON = "FIND_TOPICS_FOR_LESSON"
const CREATE_NEW_TOPIC = "CREATE_NEW_TOPIC"
const DELETE_TOPIC = "DELETE_TOPIC"
const UPDATE_TOPIC = "UPDATE_TOPIC"
const SELECT_TOPIC = "SELECT_TOPIC"
const REMOVE_ALL_TOPICS = "REMOVE_ALL_TOPICS"

export const findLessonTopics = (allFoundTopics) => ({
    type: FIND_TOPICS_FOR_LESSON,
    allFoundTopics: allFoundTopics
})

export const createNewTopic = (newAddedTopic) => ({
    type: CREATE_NEW_TOPIC,
    newAddedTopic: newAddedTopic
})

export const deleteTopic = (lessonID) => ({
    type: DELETE_TOPIC,
    lessonID: lessonID
})

export const updateTopic = (lessonID, updatedTopic) => ({
    type: UPDATE_TOPIC,
    lessonID: lessonID,
    updatedTopic: updatedTopic
})

export const updateTopicSelection = (lessonID) => ({
    type: SELECT_TOPIC,
    selectedTopicID: lessonID
})

export const removeTopicsAfterLessonDelete = () => ({
    type: REMOVE_ALL_TOPICS
})

export default {
    FIND_TOPICS_FOR_LESSON,
    CREATE_NEW_TOPIC,
    DELETE_TOPIC,
    UPDATE_TOPIC,
    SELECT_TOPIC,
    REMOVE_ALL_TOPICS
}