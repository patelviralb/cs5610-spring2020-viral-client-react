import React from "react"
import "../../course-editor-style-client.css"

const ModuleEachTab = ({eachTab, key}) =>
    <div className="nav-item pr-3 vp-cs5610-nav-item">
      <label
          className="nav-link d-flex justify-content-center"
      >
        {eachTab.moduleTabName}
      </label>
    </div>

export default ModuleEachTab