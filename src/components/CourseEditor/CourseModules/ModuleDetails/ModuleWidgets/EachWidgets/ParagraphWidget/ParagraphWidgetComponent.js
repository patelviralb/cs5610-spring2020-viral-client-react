import React from "react"
import ContentTitle from "../ContentTitleComponent"
import WidgetSubSelector from "../WidgetSubSelectorComponent"
import WidgetName from "../WidgetNameComponent"

const ParagraphWidget = () =>
    <div className="row">
      <h1>Paragraph</h1>
      <div className="col-12 d-flex justify-content-start pt-3">
        <h2>Paragraph Widget</h2>
      </div>
      <WidgetName/>
      <ContentTitle/>
      <WidgetSubSelector/>

      <div className="col-12 d-flex justify-content-start pt-4">
        <h3>Preview</h3>
      </div>

      <div className="col-12 pb-3">
        {/*For Padding*/}
      </div>
    </div>

export default ParagraphWidget