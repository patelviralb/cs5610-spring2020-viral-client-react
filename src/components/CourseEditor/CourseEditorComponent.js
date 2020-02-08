import React from "react"
import CourseEditorNavigationBar from "./CourseEditorNavigationBarComponent";
import CourseModuleComponent from "./CourseModules/CourseModuleComponent";
import CourseModuleDetails from "./CourseModules/ModuleDetails/ModuleDetailsComponent";

const CourseEditorComponent = ({ history, match }) =>
  <div>
    <CourseEditorNavigationBar
      history={history}
      match={match}
    />
    <div className="container-fluid ml-n3 mr-n3 h-100">
      <div className="row vp-cs5610-course-editor-division h-100">
        <CourseModuleComponent />
        <CourseModuleDetails />
      </div>
    </div>
  </div>

export default CourseEditorComponent