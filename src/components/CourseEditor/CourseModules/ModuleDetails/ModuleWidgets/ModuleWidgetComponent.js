import React from "react";
import EachWidget from "./EachWidgets/EachWidgetComponent";
import { connect } from "react-redux";

class ModuleWidget extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.selectedTopicID
          &&
          <div className="container-fluid" >
            <EachWidget />
            {
              this.props.selectedTopicID
              &&
              <div className="row">
                <div className="col-12 d-flex justify-content-end pt-4">
                  <button className="btn btn-warning ml-2">
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
    selectedTopicID: state.topicReducer.selectedTopicID
  }
}

export default connect(stateToPropertyMapper)(ModuleWidget)