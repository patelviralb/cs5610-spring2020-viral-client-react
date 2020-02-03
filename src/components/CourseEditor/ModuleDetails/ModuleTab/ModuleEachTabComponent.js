import React from "react"
import "../../course-editor-style-client.css"

const ModuleEachTab = ({eachTab, key}) =>
    <div className="nav-item pr-3 vp-cs5610-nav-item">
      <label
          className="nav-link d-flex justify-content-center active border-dark border-bottom-0"
          htmlFor={`vp-cs5610-build-lesson-${eachTab._id}`}>
        <button id={`vp-cs5610-build-lesson-${eachTab._id}`}
                className="text-dark btn btn-link">
          {eachTab.moduleTabName}
        </button>
      </label>
    </div>

export default ModuleEachTab