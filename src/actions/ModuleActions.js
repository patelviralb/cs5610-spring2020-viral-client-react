const FIND_MODULES_FOR_COURSE = "FIND_MODULES_FOR_COURSE"
const CREATE_NEW_MODULE = "CREATE_NEW_MODULE"
const DELETE_MODULE = "DELETE_MODULE"

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

export default {
    FIND_MODULES_FOR_COURSE,
    CREATE_NEW_MODULE,
    DELETE_MODULE
}