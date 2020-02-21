import React, {Component} from "react"
import HeadingWidget from "./HeadingWidget/HeadingWidgetComponent";
import ParagraphWidget from "./ParagraphWidget/ParagraphWidgetComponent";
import WidgetService from "../../../../../../service/WidgetService";
import {
  deleteWidget,
  updateWidget,
  updateWidgetType,
  moveUp,
  moveDown
} from "../../../../../../actions/WidgetActions";
import {connect} from "react-redux";

class EachWidget extends Component {
  state = {
    currentWidget: this.props.widgetList[this.props.index]
  };

  render() {
    return (
        <span>
          {
            !this.props.isPreviewActive
            &&
            <div className="border border-warning rounded mb-2 mt-2 pl-3 pr-2">
              <div className="col-12 d-flex justify-content-end pt-3">
                <div className="row">
                  <div className="col-12 d-flex justify-content-end">
                    {
                      this.props.index === 0
                      &&
                      <button
                        className="btn btn-secondary"
                        disabled={true}
                      >
                        <i className="fas fa-arrow-up"></i>
                      </button>
                    }
                    {
                      this.props.index !== 0
                      &&
                      <button
                          className="btn btn-dark"
                          onClick={() => this.props.moveUp(this.props.index)}
                      >
                        <i className="fas fa-arrow-up"></i>
                      </button>
                    }
                    {
                      this.props.index === (this.props.widgetList.length - 1)
                      &&
                      <button
                          className="btn btn-secondary ml-2"
                          disabled={true}
                      >
                        <i className="fas fa-arrow-down"></i>
                      </button>
                    }
                    {
                      this.props.index !== (this.props.widgetList.length - 1)
                      &&
                      <button
                          className="btn btn-dark ml-2"
                          onClick={() => this.props.moveDown(this.props.index)}
                      >
                        <i className="fas fa-arrow-down"></i>
                      </button>
                    }
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
                          });
                          this.props.updateWidgetType(event.target.value,
                              this.props.index)
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

                    {/*<button
                        className="btn btn-outline-success ml-2"
                        onClick={() => this.props.saveWidget(
                            this.props.widgetList[this.props.index].id,
                            this.props.widgetList[this.props.index])}
                    >
                      <i className="fas fa-save"></i>
                    </button>*/}

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
                {
                  this.props.widgetList[this.props.index].type === "paragraph"
                  &&
                  <ParagraphWidget
                      currentIndex={this.props.index}
                  />
                }
                <div className="col-12 pb-3">
                {/*For Padding*/}
              </div>
            </div>
          }
          {

          }
        </span>
    );
  }
};

const stateToPropertyMapper = (state) => {
  return {
    widgetList: state.widgetReducer.widgets,
    isPreviewActive: state.widgetReducer.isPreviewActive
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
    },

    moveUp: (currentIndex) => {
      dispatch(moveUp(currentIndex))
    },

    moveDown: (currentIndex) => {
      dispatch(moveDown(currentIndex))
    }
  }
};

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)
(EachWidget)