import ModuleActions from "../actions/ModuleActions"

const initialState = {
    modules: []
}

const ModuleReducer = (state = initialState, action) => {
    switch (action.type) {
        case ModuleActions.FIND_MODULES_FOR_COURSE:
            return {
                modules: action.allFoundModules
            }
        case ModuleActions.CREATE_NEW_MODULE:
            return {
                modules: [
                    ...state.modules,
                    action.newAddedModule
                ]
            }
        case ModuleActions.DELETE_MODULE:
            return {
                modules: state.modules.filter(module => module._id !== action.moduleID)
            }
        default:
            return state
    }
}

export default ModuleReducer