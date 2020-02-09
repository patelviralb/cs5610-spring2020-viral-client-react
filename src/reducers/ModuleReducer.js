import ModuleActions from "../actions/ModuleActions"

const initialState = {
    modules: [],
    selectedIndex: 0
}

const ModuleReducer = (state = initialState, action) => {
    switch (action.type) {
        case ModuleActions.FIND_MODULES_FOR_COURSE:
            return {
                modules: action.allFoundModules,
                selectedIndex: state.selectedIndex
            }
        case ModuleActions.CREATE_NEW_MODULE:
            return {
                modules: [
                    ...state.modules,
                    action.newAddedModule
                ],
                selectedIndex: state.selectedIndex
            }
        case ModuleActions.DELETE_MODULE:
            return {
                modules: state.modules.filter(module => module._id !== action.moduleID),
                selectedIndex: state.selectedIndex
            }
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
                selectedIndex: state.selectedIndex
            }
        case ModuleActions.SELECT_MODULE:
            return {
                modules: [
                    ...state.modules
                ],
                selectedIndex: action.selectedIndex
            }
        default:
            return state
    }
}

export default ModuleReducer