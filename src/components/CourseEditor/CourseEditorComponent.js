import React from "react"
import CourseEditorNavigationBar from "./CourseEditorNavigationBarComponent";
import CourseModuleComponent from "./CourseModules/CourseModuleComponent";
import CourseModuleDetails from "./CourseModules/ModuleDetails/ModuleDetailsComponent";
import ModuleReducer from "../../reducers/ModuleReducer"
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  moduleReducer: ModuleReducer/* ,
  lessonReducer: LessonReducer,
  topicReducer: TopicReducer */
})

const store = createStore(rootReducer)

const CourseEditorComponent = ({ history, match }) =>
  <Provider store={store}>
    <div>
      <CourseEditorNavigationBar
        history={history}
        match={match}
      />
      <div className="container-fluid ml-n3 mr-n3">
        <div className="row vp-cs5610-course-editor-division">
          <CourseModuleComponent
            match={match}
          />
          <CourseModuleDetails />
        </div>
      </div>
    </div>
  </Provider>

export default CourseEditorComponent