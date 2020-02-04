import React from "react"
import EachWidget from "./EachWidgets/EachWidgetComponent"

const ModuleWidget = () =>
    <div className="container-fluid">
      <EachWidget/>

      <div className="row">
        <div className="col-12 d-flex justify-content-end pt-4">
          <button className="btn btn-warning ml-2">
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-12 pb-4">
          {/*For Padding*/}
        </div>
      </div>
    </div>

export default ModuleWidget