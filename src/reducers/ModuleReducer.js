import ModuleActions from "../actions/ModuleActions"

const initialState = {
    modules: [],
    selectedModuleID: null
};

const ModuleReducer = (state = initialState, action) => {
    switch (action.type) {
        case ModuleActions.FIND_MODULE_FOR_COURSE:
            return {
                modules: action.allFoundModules,
                selectedModuleID: state.selectedModuleID
            };
        case ModuleActions.CREATE_MODULE:
            return {
                modules: [
                    ...state.modules,
                    action.newAddedModule
                ],
                selectedModuleID: state.selectedModuleID
            };
        case ModuleActions.DELETE_MODULE:
            return {
                modules: state.modules.filter(module => module._id !== action.moduleID),
                selectedModuleID: state.selectedModuleID
            };
        case ModuleActions.UPDATE_MODULE:
            /* let moduleWithOutUpdatedModule = state.modules.filter(module => module._id !== action.moduleID)
            console.log(moduleWithOutUpdatedModule)
            console.log(action.updatedModule)
            return {
                modules: [
                    ...moduleWithOutUpdatedModule,
                    action.updatedModule
                ]
            } */
            const index = state.modules.findIndex((module) => module._id === action.moduleID)
            return {
                modules: [
                    ...state.modules.slice(0,index),
                    action.updatedModule,
                    ...state.modules.slice(index+1)
                ],
                selectedModuleID: state.selectedModuleID
            };
        case ModuleActions.SELECT_MODULE:
            return {
                modules: [
                    ...state.modules
                ],
                selectedModuleID: action.selectedModuleID
            };
        default:
            return state
    }
}

export default ModuleReducer