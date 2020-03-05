import React from "react"
import {
  updateWidgetName,
  updateWidgetSource
} from "../../../../../../../actions/WidgetActions";
import {connect} from "react-redux";
import ImageWidgetPreview from "./ImageWidgetPreviewComponent";

const ImageWidget = ({currentIndex, widgetList, updateWidgetName, updateWidgetSource}) => {
  return (
      <span>
        <div className="row">
          <div className="col-12 d-flex justify-content-start pt-3">
            <h2>Image Widget</h2>
          </div>

          <div className="col-12 d-flex justify-content-start pt-3">
            <input
                className="form-control"
                type="text"
                placeholder="Widget Name"
                value={widgetList[currentIndex].name}
                onChange={(event) =>
                    updateWidgetName(event.target.value,
                        currentIndex)
                }
            />
          </div>

          <div className="col-12 d-flex justify-content-start pt-3">
            <input
                className="form-control"
                type="text"
                placeholder="Image Path"
                value={widgetList[currentIndex].source}
                onChange={(event) =>
                    updateWidgetSource(event.target.value,
                        currentIndex)
                }
            />
          </div>

          <div className="col-12 d-flex justify-content-start pt-4">
            <h3>Preview</h3>
          </div>
          <ImageWidgetPreview
              currentIndex={currentIndex}
          />

          <div className="col-12 pb-3">
            {/*For Padding*/}
          </div>
        </div>
      </span>
  );
};

const stateToPropertyMapper = (state) => {
  return {
    widgetList: state.widgetReducer.widgets
  }
};

const dispatchToPropertyMapper = (dispatch) => {
  return {
    updateWidgetName: (widgetName, widgetIndex) => {
      dispatch(updateWidgetName(widgetName, widgetIndex))
    },
    updateWidgetSource: (imageSource, widgetIndex) => {
      dispatch(updateWidgetSource(imageSource, widgetIndex))
    }
  }
};

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)
(ImageWidget)