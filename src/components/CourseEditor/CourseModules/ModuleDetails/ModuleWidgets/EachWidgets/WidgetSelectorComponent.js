import React from "react"

const WidgetSelector = () =>
    <div className="col-12 d-flex justify-content-end pt-3">
      <div className="row">
        <div className="col-12 d-flex justify-content-end">
          <button className="btn btn-secondary">
            <i className="fas fa-arrow-up"></i>
          </button>
          <button className="btn btn-secondary ml-2">
            <i className="fas fa-arrow-down"></i>
          </button>
          <select name="widget-selector" className="form-control ml-2"
                  id="widget-selector">
            <option value="heading-widget">Heading</option>
            <option value="paragraph">Paragraph</option>
            <option value="list">List</option>
            <option value="image">Image</option>
          </select>
          <button className="btn btn-outline-success ml-2">
            <i className="fas fa-save"></i>
          </button>
          <button className="btn btn-outline-danger ml-2">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>

export default WidgetSelector