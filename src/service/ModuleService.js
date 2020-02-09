import { COURSE_API_URL } from "../common/constants"
import { MODULE_API_URL } from "../common/constants"

const createModule = (courseID, module) => {
    return fetch(`${COURSE_API_URL}/${courseID}/modules`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(module)
    }).then(response => response.json())
};

const findModulesForCourse = (courseID) => {
    return fetch(`${COURSE_API_URL}/${courseID}/modules`)
        .then(response => response.json())
};

const findModule = (moduleID) => {
    return fetch(`${MODULE_API_URL}/${moduleID}`)
        .then(response => response.json())
};

const updateModule = (moduleID, module) => {
    return fetch(`${MODULE_API_URL}/${moduleID}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(module)
    }).then(response => response.json())
};

const deleteModule = (moduleID) => {
    return fetch(`${MODULE_API_URL}/${moduleID}`, {
        method: 'DELETE'
    }).then(response => response.json())
};

export default {
    createModule,
    findModulesForCourse,
    findModule,
    updateModule,
    deleteModule
}