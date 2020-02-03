import React from "react"
import "../../course-editor-style-client.css"

const TabEachPill = ({eachPill, key}) =>
    <div className="nav-item pr-3 vp-cs5610-nav-item">
      <label
          class="form-control nav-link d-flex justify-content-center bg-secondary text-white"
      >
        {eachPill.tabPillName}
      </label>
    </div>

export default TabEachPill