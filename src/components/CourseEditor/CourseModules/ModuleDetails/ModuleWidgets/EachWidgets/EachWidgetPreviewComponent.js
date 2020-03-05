import React, {Component} from "react";
import {connect} from "react-redux";
import HeadingWidgetPreview
  from "./HeadingWidget/HeadingWidgetPreviewComponent";
import ParagraphWidgetPreview
  from "./ParagraphWidget/ParagraphWidgetPreviewComponent";
import ListWidgetPreview from "./ListWidget/ListWidgetPreviewComponent";
import ImageWidgetPreview from "./ImageWidget/ImageWidgetPreviewComponent";

class EachWidgetPreview extends Component {
  render() {
    return (
        <div>
          {
            this.props.widgetList[this.props.index].type === "heading"
            &&
            <HeadingWidgetPreview
                currentIndex={this.props.index}
            />
          }
          {
            this.props.widgetList[this.props.index].type === "paragraph"
            &&
            <ParagraphWidgetPreview
                currentIndex={this.props.index}
            />
          }
          {
            this.props.widgetList[this.props.index].type === "list"
            &&
            <ListWidgetPreview
                currentIndex={this.props.index}
            />
          }
          {
            this.props.widgetList[this.props.index].type === "image"
            &&
            <ImageWidgetPreview
                currentIndex={this.props.index}
            />
          }
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