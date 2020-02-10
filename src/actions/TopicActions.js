const FIND_TOPIC_FOR_LESSON = "FIND_TOPIC_FOR_LESSON";
const CREATE_TOPIC = "CREATE_TOPIC";
const DELETE_TOPIC = "DELETE_TOPIC";
const UPDATE_TOPIC = "UPDATE_TOPIC";
const SELECT_TOPIC = "SELECT_TOPIC";
const REMOVE_ALL_TOPICS = "REMOVE_ALL_TOPICS";

export const findLessonTopics = (allFoundTopics) => ({
    type: FIND_TOPIC_FOR_LESSON,
    allFoundTopics: allFoundTopics
});

export const createNewTopic = (newAddedTopic) => ({
    type: CREATE_TOPIC,
    newAddedTopic: newAddedTopic
});

export const deleteTopic = (topicID) => ({
    type: DELETE_TOPIC,
    topicID: topicID
});

export const updateTopic = (topicID, updatedTopic) => ({
    type: UPDATE_TOPIC,
    topicID: topicID,
    updatedTopic: updatedTopic
});

export const updateTopicSelection = (topicID) => ({
    type: SELECT_TOPIC,
    selectedTopicID: topicID
});

export const removeTopicsAfterLessonDelete = () => ({
    type: REMOVE_ALL_TOPICS
});

export default {
    FIND_TOPIC_FOR_LESSON,
    CREATE_TOPIC,
    DELETE_TOPIC,
    UPDATE_TOPIC,
    SELECT_TOPIC,
    REMOVE_ALL_TOPICS
}