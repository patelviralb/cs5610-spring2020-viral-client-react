import React from "react"
import "../../../../../styles/course-editor-style-client.css"

const ModuleEachTab = ({eachTab}) =>
    <div className="nav-item pr-3 vp-cs5610-nav-item">
      <label
          className="nav-link d-flex justify-content-center"
      >
        {eachTab.moduleTabName}
      </label>
    </div>

export default ModuleEachTab