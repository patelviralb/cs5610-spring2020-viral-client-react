import React from "react"
import "./course-editor-style-client.css"

const CourseEditorNavigationBar = ({showCourseEditorPage}) =>
    <nav className="navbar navbar-dark bg-dark">
      <div
          className="d-flex flex-row my-0 justify-content-start pt-sm-3 pt-md-0">
        <button
            className="btn btn-sm btn-dark close vp-cs5610-close-course-editor"
            onClick={showCourseEditorPage}
        >
          <span className="p-3 text-white">&#10005;</span>
        </button>
        <span
            className="p-2 vp-cs5610-course-editor-span ml-2">CS5610 - Web Development
        </span>
      </div>
    </nav>

export default CourseEditorNavigationBar