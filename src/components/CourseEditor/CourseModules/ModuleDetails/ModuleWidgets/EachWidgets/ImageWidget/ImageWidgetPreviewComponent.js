import React from "react"
import "../../../../../../../styles/image-widget-preview-style-client.css"
import {connect} from "react-redux";

const ImageWidgetPreview = ({currentIndex, widgetList}) => {
  return (
      <div
          className="col-12 d-flex justify-content-start pt-4"
      >
        {console.log(widgetList[currentIndex])}
        <img src={widgetList[currentIndex].source}
             className="rounded vp-cs5610-image-widget-preview"
             alt="Responsive image"/>
      </div>
  )
};

const stateToPropertyMapper = (state) => {
  return {
    widgetList: state.widgetReducer.widgets
  }
};

export default connect(stateToPropertyMapper)(ImageWidgetPreview)