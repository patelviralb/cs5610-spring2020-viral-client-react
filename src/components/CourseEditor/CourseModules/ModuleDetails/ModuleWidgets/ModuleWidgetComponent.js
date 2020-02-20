import React from "react";
import EachWidget from "./EachWidgets/EachWidgetComponent";
import {connect} from "react-redux";
import {createNewWidget} from "../../../../../actions/WidgetActions";
import WidgetService from "../../../../../service/WidgetService";

class ModuleWidget extends React.Component {
  render() {
    return (
        <div>
          {
            (this.props.selectedTopicID !== null && this.props.widgetList)
            &&
            <div className="container-fluid">
              {
                this.props.widgetList
                .sort((widgetOne, widgetTwo) =>
                    (widgetOne.order - widgetTwo.order))
                .map((eachWidget, index) => {
                  return <EachWidget
                      eachWidget={eachWidget}
                      key={eachWidget.id}
                      index={index}
                  />
                })
              }
              {
                this.props.selectedTopicID
                &&
                <div className="row">
                  <div className="col-12 d-flex justify-content-end pt-4">
                    <button
                        className="btn btn-warning ml-2"
                        onClick={() => this.props.createNewWidget(
                            this.props.selectedTopicID)}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
              }
              {
                this.props.selectedTopicID
                &&
                <div className="row">
                  <div className="col-12 pb-4">
                    {/*For Padding*/}
                  </div>
                </div>
              }
            </div>
          }
        </div>
    )
  }
}

const stateToPropertyMapper = (state) => {
  return {
    selectedTopicID: state.topicReducer.selectedTopicID,
    widgetList: state.widgetReducer.widgets
  }
};

const dispatchToPropertyMapper = (dispatch) => {
  return {
    createNewWidget: (topicID) => {
      const newAddedWidget = {
        "name": "New Widget",
        "type": "heading",
        "order": 0,
        "text": "New Widget Content",
        "source": "",
        "size": 4,
        "width": 0,
        "height": 0,
        "cssClass": "",
        "style": "",
        "value": "",
        "topicID": `${topicID}`
      };
      WidgetService.createWidget(topicID, newAddedWidget)
      .then(
          newAddedWidget => dispatch(createNewWidget(newAddedWidget))
      );
    }
  }
};

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(
    ModuleWidget)