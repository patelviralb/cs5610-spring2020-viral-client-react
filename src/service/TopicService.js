import { LESSON_API_URL } from "../common/constants"
import { TOPIC_API_URL } from "../common/constants"

export const createTopic = (lessonID, topic) => {
    return fetch(`${LESSON_API_URL}/${lessonID}/topics`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(topic)
    }).then(response => response.json())
};

export const findtopicsForModule = (lessonID) => {
    fetch(`${LESSON_API_URL}/${lessonID}/topics`)
        .then(response => response.json())
};

export const findTopic = (topicID) => {
    fetch(`${TOPIC_API_URL}/${topicID}`)
        .then(response => response.json())
};

export const updateTopic = (topicID, topic) => {
    return fetch(`${TOPIC_API_URL}/${topicID}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(topic)
    }).then(response => response.json())
};

export const deleteTopic = (topicID) => {
    return fetch(`${TOPIC_API_URL}/${topicID}`, {
        method: 'DELETE'
    }).then(response => response.json())
};