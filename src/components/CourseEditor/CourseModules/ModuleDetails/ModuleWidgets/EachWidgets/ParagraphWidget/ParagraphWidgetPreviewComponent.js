import React, {Component} from "react"
import "../../../../../../../styles/paragraph-widget-preview-style-client.css"
import {connect} from "react-redux";

class ParagraphWidgetPreview extends Component {
  render() {
    return (
        <div
            className="col-12 d-flex justify-content-start pt-4 vp-cs5610-paragraph-widget-preview"
        >
          <p>
            {this.props.widgetList[this.props.currentIndex].text}
          </p>
        </div>
    )
  }
};

const stateToPropertyMapper = (state) => {
  return {
    widgetList: state.widgetReducer.widgets
  }
};

export default connect(stateToPropertyMapper)(ParagraphWidgetPreview)