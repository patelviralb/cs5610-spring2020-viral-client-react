import React, {Component} from "react";
import {connect} from "react-redux";
import HeadingWidgetPreview
  from "./HeadingWidget/HeadingWidgetPreviewComponent";

class EachWidgetPreview extends Component {
  render() {
    return(
        <div>
          {
            this.props.widgetList[this.props.index].type === "heading"
                &&
                <HeadingWidgetPreview
                    currentIndex={this.props.index}
                />
          }
          {/*{
            this.props.widgetList[this.props.index].type === "paragraph"
            &&
            <HeadingWidgetPreview
                currentIndex={this.props.index}
            />
          }*/}
        </div>
    )
  }
}

const stateToPropertyMapper = (state) => {
  return {
    widgetList: state.widgetReducer.widgets
  }
};

export default connect(stateToPropertyMapper)
  (EachWidgetPreview)