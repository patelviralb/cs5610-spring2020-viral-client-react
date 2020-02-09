const FIND_MODULES_FOR_COURSE = "FIND_MODULES_FOR_COURSE"
const CREATE_NEW_MODULE = "CREATE_NEW_MODULE"
const DELETE_MODULE = "DELETE_MODULE"
const UPDATE_MODULE = "UPDATE_MODULE"
const SELECT_MODULE = "SELECT_MODULE"

export const findCourseModules = (allFoundModules) => ({
    type: FIND_MODULES_FOR_COURSE,
    allFoundModules: allFoundModules
})

export const createNewModule = (newAddedModule) => ({
    type: CREATE_NEW_MODULE,
    newAddedModule: newAddedModule
})

export const deleteModule = (moduleID) => ({
    type: DELETE_MODULE,
    moduleID: moduleID
})

export const updateModule = (moduleID, updatedModule) => ({
    type: UPDATE_MODULE,
    moduleID: moduleID,
    updatedModule: updatedModule
})

export const updateModuleSelection = (moduleID) => ({
    type: SELECT_MODULE,
    selectedModuleID: moduleID
})

export default {
    FIND_MODULES_FOR_COURSE,
    CREATE_NEW_MODULE,
    DELETE_MODULE,
    UPDATE_MODULE,
    SELECT_MODULE
}