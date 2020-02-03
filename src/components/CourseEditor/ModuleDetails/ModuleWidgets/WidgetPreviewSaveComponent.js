import React from "react"

const WidgetPreviewSave = () =>
    <div className="row">
      <div className="col-12 d-flex justify-content-end">
        <div className="custom-control custom-switch pt-2">
          <input type="checkbox" className="custom-control-input"
                 id="vp-cs5610-preview-switch" />
            <label className="custom-control-label"
                   htmlFor="vp-cs5610-preview-switch">Preview</label>
        </div>
        <label
            className="form-control btn btn-success ml-4 w-auto d-flex justify-content-center vp-cs5610-save-topic">
          Save
        </label>
      </div>
    </div>

export default WidgetPreviewSave