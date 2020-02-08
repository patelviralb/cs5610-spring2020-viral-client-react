import { COURSE_API_URL } from "../common/constants"
import { MODULE_API_URL } from "../common/constants"

export const createModule = (courseID, module) => {
    return fetch(`${COURSE_API_URL}/${courseID}/modules`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(module)
    }).then(response => response.json())
};

export const findModulesForCourse = (courseID) => {
    fetch(`${COURSE_API_URL}/${courseID}/modules`)
        .then(response => response.json())
};

export const findModule = (moduleID) => {
    fetch(`${MODULE_API_URL}/${moduleID}`)
        .then(response => response.json())
};

export const updateModule = (moduleID, module) => {
    return fetch(`${MODULE_API_URL}/${moduleID}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(module)
    }).then(response => response.json())
};

export const deleteModule = (moduleID) => {
    return fetch(`${MODULE_API_URL}/${moduleID}`, {
        method: 'DELETE'
    }).then(response => response.json())
};