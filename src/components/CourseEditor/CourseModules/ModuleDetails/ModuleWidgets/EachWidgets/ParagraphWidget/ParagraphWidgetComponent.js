import React, {Component} from "react"
import {
  updateWidgetName,
  updateWidgetText, updateWidgetTextSize
} from "../../../../../../../actions/WidgetActions";
import {connect} from "react-redux";
import ParagraphWidgetPreview
  from "../ParagraphWidget/ParagraphWidgetPreviewComponent";

class ParagraphWidget extends Component {
  render() {
    return (
        <span>
        <div className="row">
          <div className="col-12 d-flex justify-content-start pt-3">
            <h2>Paragraph Widget</h2>
          </div>

          <div className="col-12 d-flex justify-content-start pt-3">
            <input
                className="form-control"
                type="text"
                placeholder="Widget Name"
                value={this.props.widgetList[this.props.currentIndex].name}
                onChange={(event) =>
                    this.props.updateWidgetName(event.target.value, this.props.currentIndex)
                }
            />
          </div>

          <div className="col-12 d-flex justify-content-start pt-3">
            <textarea
                className="form-control"
                type="text"
                placeholder="Paragraph Text"
                value={this.props.widgetList[this.props.currentIndex].text}
                rows="4"
                onChange={(event) => {
                  this.props.updateWidgetText(event.target.value,
                      this.props.currentIndex);
                }}
            />
          </div>

          <div className="col-12 d-flex justify-content-start pt-4">
            <h3>Preview</h3>
          </div>

          <ParagraphWidgetPreview
              currentIndex={this.props.currentIndex}
          />

          <div className="col-12 pb-3">
            {/*For Padding*/}
          </div>
        </div>
      </span>
    );
  }
}

const stateToPropertyMapper = (state) => {
  return {
    widgetList: state.widgetReducer.widgets
  }
};

const dispatchToPropertyMapper = (dispatch) => {
  return {
    updateWidgetText: (widgetText, widgetIndex) => {
      dispatch(updateWidgetText(widgetText, widgetIndex))
    },
    updateWidgetName: (widgetName, widgetIndex) => {
      dispatch(updateWidgetName(widgetName, widgetIndex))
    }
  }
};

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)
  (ParagraphWidget)