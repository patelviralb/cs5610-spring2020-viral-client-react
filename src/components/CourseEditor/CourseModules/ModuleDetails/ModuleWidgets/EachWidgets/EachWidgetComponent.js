import React from "react"
import WidgetSelector from "./WidgetSelectorComponent"
import WidgetTitle from "./WidgetTitleComponent"
import ContentTitle from "./ContentTitleComponent"
import WidgetSubSelector from "./WidgetSubSelectorComponent"
import WidgetName from "./WidgetNameComponent"

const EachWidget = () =>
    <div className="row border border-warning rounded mb-2">
      <WidgetSelector/>

      <WidgetTitle/>
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

export default EachWidget