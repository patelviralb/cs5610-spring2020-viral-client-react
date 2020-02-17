import React from "react";
import { connect } from "react-redux";

class WidgetPreviewSave extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.selectedTopicID
          &&
          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <div className="custom-control custom-switch pt-2">
                <input type="checkbox" className="custom-control-input"
                  id="vp-cs5610-preview-switch" />
                <label className="custom-control-label"
                  htmlFor="vp-cs5610-preview-switch">Preview</label>
              </div>
              {/*<label
                  className="form-control btn btn-success ml-4 w-auto d-flex justify-content-center vp-cs5610-save-topic">
                Save
              </label>*/}
            </div>
          </div>
        }
        {
          !this.props.selectedTopicID
          &&
          <div className="alert alert-secondary mt-2" role="alert">
            <div className="d-flex justify-content-center">
              <i className="fas fa-2x fa-exclamation-triangle"></i>
            </div>
            <label className="d-flex justify-content-center">
              No Topic selected. Please select a topic to view widgets.
            </label>
          </div>
        }
      </div>
    )
  }
}

const stateToPropertyMapper = (state) => {
  return {
    selectedTopicID: state.topicReducer.selectedTopicID
  }
}

export default connect(stateToPropertyMapper)(WidgetPreviewSave)