import React from "react"
import {
  updateWidgetName,
  updateWidgetText,
  updateWidgetStyle
} from "../../../../../../../actions/WidgetActions";
import {connect} from "react-redux";
import ListWidgetPreview from "./ListWidgetPreviewComponent";

const ListWidget = ({currentIndex, widgetList, updateWidgetText, updateWidgetName, updateWidgetStyle}) => {
  return (
      <span>
        <div className="row">
          <div className="col-12 d-flex justify-content-start pt-3">
            <h2>List Widget</h2>
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
            <select
                name="list-type-selector"
                className="form-control"
                id="list-type-selector"
                value={widgetList[currentIndex].style}
                onChange={(event) =>
                    updateWidgetStyle(event.target.value,
                        currentIndex)
                }
            >
              <option hidden
                      value="">Select List Type</option>
              <option value="ordered">Ordered list</option>
              <option value="unordered">Unordered list</option>
            </select>
          </div>

          <div className="col-12 d-flex justify-content-start pt-3">
            <textarea
                className="form-control"
                type="text"
                placeholder="List Items"
                value={widgetList[currentIndex].text}
                rows="4"
                onChange={(event) => {
                  updateWidgetText(event.target.value,
                      currentIndex);
                }}
            />
          </div>

          <div className="col-12 d-flex justify-content-start pt-4">
            <h3>Preview</h3>
          </div>
          <ListWidgetPreview
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
    updateWidgetText: (widgetText, widgetIndex) => {
      dispatch(updateWidgetText(widgetText, widgetIndex))
    },
    updateWidgetName: (widgetName, widgetIndex) => {
      dispatch(updateWidgetName(widgetName, widgetIndex))
    },
    updateWidgetStyle: (listType, widgetIndex) => {
      dispatch(updateWidgetStyle(listType, widgetIndex))
    }
  }
};

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)
(ListWidget)