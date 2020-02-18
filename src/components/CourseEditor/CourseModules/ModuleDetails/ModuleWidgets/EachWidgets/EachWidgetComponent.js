import React, {useState} from "react"
import HeadingWidget from "./HeadingWidget/HeadingWidgetComponent";
import ParagraphWidget from "./ParagraphWidget/ParagraphWidgetComponent";
import WidgetService from "../../../../../../service/WidgetService";
import {
  createNewWidget,
  deleteWidget
} from "../../../../../../actions/WidgetActions";
import {connect} from "react-redux";

const EachWidget = ({eachWidget, key, history, match, deleteWidget}) => {
  const [widget, setWidget] = useState(eachWidget);
  /*const [widgetType, setWidgetType] = useState(eachWidget.type);*/
  const [isDataChanged, setIsDataChanged] = useState(false);

  return (
      <div className="border border-warning rounded mb-2 mt-2 pl-3 pr-2">
        <div className="col-12 d-flex justify-content-end pt-3">
          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <button
                  className="btn btn-secondary"
                  onClick={() =>
                      setIsDataChanged(true)
                  }
              >
                <i className="fas fa-arrow-up"></i>
              </button>
              <button
                  className="btn btn-secondary ml-2"
                  onClick={() =>
                      setIsDataChanged(true)
                  }
              >
                <i className="fas fa-arrow-down"></i>
              </button>
              <select
                  name="widget-selector"
                  className="form-control ml-2"
                  id="widget-selector"
                  value={widget.type}
                  onChange={(event) =>
                      setWidget({"type":event.target.value})
                  }
              >
                <option hidden
                        value="none">Select Widget Type
                </option>
                <option value="heading">Heading</option>
                <option value="paragraph">Paragraph</option>
                {/*<option value="list">List</option>
                        <option value="image">Image</option>*/}
              </select>
              <button className="btn btn-outline-success ml-2">
                <i className="fas fa-save"></i>
              </button>
              <button
                  className="btn btn-outline-danger ml-2"
                  onClick={() => deleteWidget(widget.id)}
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>
        {
          widget.type === "heading"
          &&
          <HeadingWidget
              widgetDetails={widget}
          />
        }
        {
          widget.type === "paragraph"
          &&
          <ParagraphWidget/>
        }
        <div className="col-12 pb-3">
          {/*For Padding*/}
        </div>
      </div>
  )
      ;
}
/*}*/

const stateToPropertyMapper = (state) => {
  return {
    widgetList: state.widgetReducer.widgets
  }
};

const dispatchToPropertyMapper = (dispatch) => {
  return {
    deleteWidget: (widgetID) => {
      WidgetService.deleteTopic(widgetID)
      .then(
          status => dispatch(deleteWidget(widgetID))
      );
    }
  }
};

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)
(EachWidget)