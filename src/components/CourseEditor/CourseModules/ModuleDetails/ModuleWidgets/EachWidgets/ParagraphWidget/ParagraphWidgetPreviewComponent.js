import React, {Component} from "react"
import {connect} from "react-redux";

class HeadingWidgetPreview extends Component {
  render() {
    return (
        <div className="col-12 d-flex justify-content-start pt-4">
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

export default connect(stateToPropertyMapper)(HeadingWidgetPreview)