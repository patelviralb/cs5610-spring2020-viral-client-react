import React, {Component} from "react"
import {connect} from "react-redux";

class HeadingWidgetPreview extends Component {
  render() {
    return (
        <div className="col-12 d-flex justify-content-start pt-4">
          {
            this.props.widgetList[this.props.currentIndex].size === 1
            &&
            <h1>{this.props.widgetList[this.props.currentIndex].text}</h1>
          }
          {
            this.props.widgetList[this.props.currentIndex].size === 2
            &&
            <h2>{this.props.widgetList[this.props.currentIndex].text}</h2>
          }
          {
            this.props.widgetList[this.props.currentIndex].size === 3
            &&
            <h3>{this.props.widgetList[this.props.currentIndex].text}</h3>
          }
          {
            this.props.widgetList[this.props.currentIndex].size === 4
            &&
            <h4>{this.props.widgetList[this.props.currentIndex].text}</h4>
          }
          {
            this.props.widgetList[this.props.currentIndex].size === 5
            &&
            <h5>{this.props.widgetList[this.props.currentIndex].text}</h5>
          }
          {
            this.props.widgetList[this.props.currentIndex].size === 6
            &&
            <h6>{this.props.widgetList[this.props.currentIndex].text}</h6>
          }
          {
            (this.props.widgetList[this.props.currentIndex].size !== 1
                &&
                this.props.widgetList[this.props.currentIndex].size !== 2
                &&
                this.props.widgetList[this.props.currentIndex].size !== 3
                &&
                this.props.widgetList[this.props.currentIndex].size !== 4
                &&
                this.props.widgetList[this.props.currentIndex].size !== 5
                &&
                this.props.widgetList[this.props.currentIndex].size !== 6)
            &&
            <h1>{this.props.widgetList[this.props.currentIndex].text}</h1>
          }
        </div>
    )
  }
};

const stateToPropertyMapper = (state) => {
  return {
    widgetList: state.widgetReducer.widgets
  }
};

export default connect(stateToPropertyMapper)(HeadingWidgetPreview)