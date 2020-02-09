import { LESSON_API_URL } from "../common/constants"
import { TOPIC_API_URL } from "../common/constants"

const createTopic = (lessonID, topic) => {
    return fetch(`${LESSON_API_URL}/${lessonID}/topics`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(topic)
    }).then(response => response.json())
};

const findTopicsForLesson = (lessonID) => {
    return fetch(`${LESSON_API_URL}/${lessonID}/topics`)
        .then(response => response.json())
};

const findTopic = (topicID) => {
    return fetch(`${TOPIC_API_URL}/${topicID}`)
        .then(response => response.json())
};

const updateTopic = (topicID, topic) => {
    return fetch(`${TOPIC_API_URL}/${topicID}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(topic)
    }).then(response => response.json())
};

const deleteTopic = (topicID) => {
    return fetch(`${TOPIC_API_URL}/${topicID}`, {
        method: 'DELETE'
    }).then(response => response.json())
};

export default {
    createTopic,
    findTopicsForLesson,
    findTopic,
    updateTopic,
    deleteTopic
}