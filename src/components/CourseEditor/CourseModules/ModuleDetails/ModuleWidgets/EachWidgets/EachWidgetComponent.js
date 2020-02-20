import React, {Component} from "react"
import HeadingWidget from "./HeadingWidget/HeadingWidgetComponent";
import ParagraphWidget from "./ParagraphWidget/ParagraphWidgetComponent";
import WidgetService from "../../../../../../service/WidgetService";
import {
  deleteWidget,
  updateWidget
} from "../../../../../../actions/WidgetActions";
import {connect} from "react-redux";

class EachWidget extends Component {
  render() {
    console.log("DEBUG: Inside Each Widget ",this.props.index,"|",this.props.widgetList,"|",this.props.widgetList[this.props.index],"|",this.props.widgetList[this.props.index].id);
    return (
        <div className="border border-warning rounded mb-2 mt-2 pl-3 pr-2">
          <div className="col-12 d-flex justify-content-end pt-3">
            <div className="row">
              <div className="col-12 d-flex justify-content-end">
                <button
                    className="btn btn-secondary"
                >
                  <i className="fas fa-arrow-up"></i>
                </button>
                <button
                    className="btn btn-secondary ml-2"
                >
                  <i className="fas fa-arrow-down"></i>
                </button>
                <select
                    name="widget-selector"
                    className="form-control ml-2"
                    id="widget-selector"
                    /*value={widget.type}
                    onChange={(event) =>
                        setWidget({
                              ...widget,
                              "type": event.target.value
                            }
                        )
                    }*/
                >
                  <option hidden
                          value="none">Select Widget Type
                  </option>
                  <option value="heading">Heading</option>
                  <option value="paragraph">Paragraph</option>
                  {/*<option value="list">List</option>
                        <option value="image">Image</option>*/}
                </select>

                <button
                    className="btn btn-outline-success ml-2"
                    onClick={() => this.props.saveWidget(this.props.widgetList[this.props.index].id, this.props.widgetList[this.props.index], this.props.widgetList[this.props.index].order)}
                >
                  <i className="fas fa-save"></i>
                </button>

                <button
                    className="btn btn-outline-danger ml-2"
                    onClick={() => this.props.deleteWidget(this.props.widgetList[this.props.index].id)}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
          </div>
          {/*{
            this.props.widgetList[this.props.index].type === "heading"
            &&
            <HeadingWidget
                currentIndex={this.props.index}
            />
          }
          {
            this.props.widgetList[this.props.index].type === "paragraph"
            &&
            <ParagraphWidget
                currentIndex={this.props.index}
            />
          }*/}
          <div className="col-12 pb-3">
            {/*For Padding*/}
          </div>
        </div>
    );
  }
};

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
    },
    saveWidget: (widgetID, widget) => {
      WidgetService.updateWidget(widgetID, widget)
      .then(
          status => dispatch(updateWidget(widgetID, widget))
      )
    }
  }
};

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)
(EachWidget)