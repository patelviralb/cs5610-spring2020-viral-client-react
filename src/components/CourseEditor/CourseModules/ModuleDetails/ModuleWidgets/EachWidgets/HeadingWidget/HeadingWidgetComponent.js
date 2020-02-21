import React, {Component} from "react";
import {connect} from "react-redux";
import {
  updateWidgetText,
  updateWidgetName,
  updateWidgetTextSize
} from "../../../../../../../actions/WidgetActions";
import HeadingWidgetPreview from "./HeadingWidgetPreviewComponent";

class HeadingWidget extends Component {
  state = {
    currentWidget: this.props.widgetList[this.props.currentIndex]
  };

  updateWidgetName = (event) => {
    this.setState({
      currentWidget: {
        ...this.state.currentWidget,
        "name": event.target.value
      }
    });
    this.props.updateWidgetName(event.target.value, this.props.currentIndex);
  };

  render() {
    return (
        <div className="row">
          <div className="col-12 d-flex justify-content-start pt-3">
            <h2>Heading Widget</h2>
          </div>

          <div className="col-12 d-flex justify-content-start pt-3">
            <input
                className="form-control"
                type="text"
                placeholder="Widget Name"
                value={this.state.currentWidget.name}
                onChange={this.updateWidgetName}
            />
          </div>

          <div className="col-12 d-flex justify-content-start pt-3">
            <input
                className="form-control"
                type="text"
                placeholder="Heading Text"
                value={this.state.currentWidget.text}
                onChange={(event) => {
                  this.setState({
                    currentWidget: {
                      ...this.state.currentWidget,
                      "text": event.target.value
                    }
                  });
                  this.props.updateWidgetText(event.target.value,
                      this.props.currentIndex);
                }}
            />
          </div>

          <div className="col-12 d-flex justify-content-start pt-3">
            <select
                className="form-control"
                name="heading-selector"
                defaultValue={this.state.currentWidget.size}
                onChange={(event) => {
                    this.setState({
                      currentWidget: {
                        ...this.state.currentWidget,
                        "size": parseInt(event.target.value)
                      }
                    });
                  this.props.updateWidgetTextSize(parseInt(event.target.value),
                  this.props.currentIndex);
                }}
            >
              <option value="none" disabled hidden>Select Heading Size</option>
              <option value="1">Heading 1</option>
              <option value="2">Heading 2</option>
              <option value="3">Heading 3</option>
              <option value="4">Heading 4</option>
              <option value="5">Heading 5</option>
              <option value="6">Heading 6</option>
            </select>
          </div>
          {/*<WidgetName/>
      <ContentTitle/>
      <WidgetSubSelector/>*/}

          <div className="col-12 d-flex justify-content-start pt-4">
            <h3>Preview</h3>
          </div>

          <HeadingWidgetPreview
              currentIndex={this.props.currentIndex}
          />

          <div className="col-12 pb-3">
            {/*For Padding*/}
          </div>
        </div>
    )
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
    },
    updateWidgetTextSize: (widgetTextSize, widgetIndex) => {
      dispatch(updateWidgetTextSize(widgetTextSize, widgetIndex))
    }
  }
};

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(
    HeadingWidget)