import { MODULE_API_URL } from "../common/constants"
import { LESSON_API_URL } from "../common/constants"

export const createLesson = (moduleID, lesson) => {
    return fetch(`${MODULE_API_URL}/${moduleID}/lessons`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(lesson)
    }).then(response => response.json())
};

export const findLessonsForModule = (moduleID) => {
    fetch(`${MODULE_API_URL}/${moduleID}/lessons`)
        .then(response => response.json())
};

export const findLesson = (lessonID) => {
    fetch(`${LESSON_API_URL}/${lessonID}`)
        .then(response => response.json())
};

export const updateLesson = (lessonID, lesson) => {
    return fetch(`${LESSON_API_URL}/${lessonID}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(lesson)
    }).then(response => response.json())
};

export const deleteLesson = (lessonID) => {
    return fetch(`${LESSON_API_URL}/${lessonID}`, {
        method: 'DELETE'
    }).then(response => response.json())
};