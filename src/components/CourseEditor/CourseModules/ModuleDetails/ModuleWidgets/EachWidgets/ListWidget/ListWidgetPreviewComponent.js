import React, {Component} from "react"
import "../../../../../../../styles/paragraph-widget-preview-style-client.css"
import {connect} from "react-redux";

const ListWidgetPreview = ({currentIndex, widgetList}) => {
  return (
      <div
          className="col-12 d-flex justify-content-start pt-4"
      >
        {
          widgetList[currentIndex].style === "unordered"
          &&
          <ul>
            {
              widgetList[currentIndex].text.split('\n').map((eachItem, itemIndex) => {
                return <li key={itemIndex}>
                  {eachItem}
                </li>
              })
            }
          </ul>
        }
        {
          widgetList[currentIndex].style === "ordered"
          &&
          <ol>
            {
              widgetList[currentIndex].text.split('\n').map((eachItem, itemIndex) => {
                return <li key={itemIndex}>
                  {eachItem}
                </li>
              })
            }
          </ol>
        }
        {
          widgetList[currentIndex].style === ""
          &&
          <p className="vp-cs5610-paragraph-widget-preview">
            {widgetList[currentIndex].text}
          </p>
        }
      </div>
  )
};

const stateToPropertyMapper = (state) => {
  return {
    widgetList: state.widgetReducer.widgets
  }
};

export default connect(stateToPropertyMapper)(ListWidgetPreview)