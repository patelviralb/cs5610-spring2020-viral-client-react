import React from "react";
import {connect} from "react-redux";
import {
  activatePreview,
  deactivatePreview,
  updateAllWidgets
} from "../../../../../actions/WidgetActions";
import WidgetService from "../../../../../service/WidgetService";

class WidgetPreviewSave extends React.Component {
  render() {
    return (
        <div>
          {
            this.props.selectedTopicID
            &&
            <div className="row">
              {/*<div className="col-12 d-flex justify-content-end">
              <div className="custom-control custom-switch pt-2">
                <input
                    type="checkbox"
                    className="custom-control-input"
                    id="vp-cs5610-preview-switch"
                    checked={this.props.isPreviewActive}
                    onChange={(event) =>{
                      if (event.target.checked) {
                        this.props.activatePreview();
                      } else {
                        this.props.deactivatePreview();
                      }
                    }}
                />
                <label className="custom-control-label"
                  htmlFor="vp-cs5610-preview-switch">Preview</label>
              </div>
              <button
                  className="btn btn-success ml-2 w-auto d-flex justify-content-center vp-cs5610-save-topic">
                Save
              </button>
            </div>*/}
              <div className="col-12 d-flex justify-content-end">
                <div className="row">
                  <div className="col-6">
                    <div className="custom-control custom-switch pt-2">
                      <input
                          type="checkbox"
                          className="custom-control-input"
                          id="vp-cs5610-preview-switch"
                          checked={this.props.isPreviewActive}
                          onChange={(event) => {
                            if (event.target.checked) {
                              this.props.activatePreview();
                            } else {
                              this.props.deactivatePreview();
                            }
                          }}
                      />
                      <label className="custom-control-label"
                             htmlFor="vp-cs5610-preview-switch">Preview</label>
                    </div>
                  </div>
                  <div className="col-6">
                    <button
                        className="btn btn-success ml-2 w-auto d-flex justify-content-center vp-cs5610-save-topic"
                        onClick={() =>
                            this.props.saveAllWidgets(this.props.selectedTopicID, this.props.widgetList)
                        }
                    >
                      Save
                    </button>
                  </div>
                </div>
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
          {
            (this.props.selectedTopicID && this.props.widgetList.length
                === 0)
            &&
            <div className="alert alert-warning mt-2" role="alert">
              <div className="d-flex justify-content-center">
                <i className="fas fa-2x fa-exclamation-triangle"></i>
              </div>
              <label className="d-flex justify-content-center">
                No Widgets found for selected topic.
              </label>
              <label className="d-flex justify-content-center">
                Start adding widgets to proceed.
              </label>
            </div>
          }
        </div>
    )
  }
}

const stateToPropertyMapper = (state) => {
  return {
    selectedTopicID: state.topicReducer.selectedTopicID,
    widgetList: state.widgetReducer.widgets,
    isPreviewActive: state.widgetReducer.isPreviewActive
  }
};

const dispatchToPropertyMapper = (dispatch) => {
  return {
    activatePreview: () => {
      dispatch(activatePreview())
    },
    deactivatePreview: () => {
      dispatch(deactivatePreview())
    },
    saveAllWidgets: (topicID, allWidgetsToUpdate) => {
      WidgetService.updateAllWidgets(topicID ,allWidgetsToUpdate).then(
          status => dispatch(updateAllWidgets())
      )
    }
  }
};

export default connect(stateToPropertyMapper,
    dispatchToPropertyMapper)
(WidgetPreviewSave)