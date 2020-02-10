import React from "react"
import CourseEditorNavigationBar from "./CourseEditorNavigationBarComponent";
import CourseModuleComponent from "./CourseModules/CourseModuleComponent";
import CourseModuleDetails from "./CourseModules/ModuleDetails/ModuleDetailsComponent";
import CourseReducer from "../../reducers/CourseReducer";
import ModuleReducer from "../../reducers/ModuleReducer";
import LessonReducer from "../../reducers/LessonReducer";
import TopicReducer from "../../reducers/TopicReducer";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  courseReducer: CourseReducer,
  moduleReducer: ModuleReducer,
  lessonReducer: LessonReducer,
  topicReducer: TopicReducer
});

const store = createStore(rootReducer);

const CourseEditor = ({ history, match }) =>
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

export default CourseEditor