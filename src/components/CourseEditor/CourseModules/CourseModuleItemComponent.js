import React from "react"

const CourseModuleItem = ({moduleName, _id}) =>
    <div className="d-flex justify-content-center mt-4">
      <div className="row w-100 vp-cs5610-each-module">
        <button
            className="btn btn-dark col-10 vp-cs5610-module-title">
          <i className="fas fa-book mr-2"></i>
          <span
            className="wbdv-module-item-title">{moduleName}
          </span>
        </button>
        <button className="btn btn-dark col-2">
          <i className="fas fa-trash-alt vp-cs5610-trash-icon"></i>
        </button>
      </div>
    </div>

export default CourseModuleItem