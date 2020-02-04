import React from "react"
import "../../../../../styles/course-editor-style-client.css"

const TabEachPill = ({eachPill}) =>
    <div className="nav-item pr-3 vp-cs5610-nav-item">
      <label
          className="form-control nav-link d-flex justify-content-center bg-secondary text-white"
      >
        {eachPill.tabPillName}
      </label>
    </div>

export default TabEachPill