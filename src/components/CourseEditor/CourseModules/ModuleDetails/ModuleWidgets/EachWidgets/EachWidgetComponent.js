import React, {Component} from "react"
import HeadingWidget from "./HeadingWidget/HeadingWidgetComponent";
import ParagraphWidget from "./ParagraphWidget/ParagraphWidgetComponent";
import WidgetService from "../../../../../../service/WidgetService";
import {
  deleteWidget,
  updateWidget,
  updateWidgetType
} from "../../../../../../actions/WidgetActions";
import {connect} from "react-redux";

class EachWidget extends Component {
  state = {
    currentWidget: this.props.widgetList[this.props.index]
  };

  render() {
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
                    value={this.state.currentWidget.type}
                    onChange={(event) => {
                      this.setState({
                        currentWidget: {
                          ...this.state.currentWidget,
                          "type": event.target.value
                        }
                      })
                      this.props.updateWidgetType(event.target.value, this.props.index)
                    }}
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
                    onClick={() => this.props.saveWidget(
                        this.props.widgetList[this.props.index].id,
                        this.props.widgetList[this.props.index])}
                >
                  <i className="fas fa-save"></i>
                </button>

                <button
                    className="btn btn-outline-danger ml-2"
                    onClick={() => this.props.deleteWidget(
                        this.state.currentWidget.id)}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
          </div>
          {
            this.props.widgetList[this.props.index].type === "heading"
            &&
            <HeadingWidget
                currentIndex={this.props.index}
            />
          }
          {/*{
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
    },

    updateWidgetType: (widgetType, widgetIndex) => {
      dispatch(updateWidgetType(widgetType, widgetIndex))
    }
  }
};

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)
(EachWidget)