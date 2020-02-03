import React from "react"
import CourseEditorNavigationBar from "./CourseEditorNavigationBarComponent";
import CourseModuleComponent from "./CourseModules/CourseModuleComponent";

const CourseEditorComponent = () =>
    <div>
      <CourseEditorNavigationBar/>
      <div className="container-fluid ml-n3 mr-n3 h-100">
        <div className="row vp-cs5610-course-editor-division h-100">
          <CourseModuleComponent />
        </div>
      </div>
    </div>

export default CourseEditorComponent