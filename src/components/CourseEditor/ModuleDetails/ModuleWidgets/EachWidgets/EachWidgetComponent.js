import React from "react"
import WidgetSelector from "./WidgetSelectorComponent"
import WidgetTitle from "./WidgetTitleComponent"
import ContentTitle from "./ContentTitleComponent"
import WidgetSubSelector from "./WidgetSubSelectorComponent"
import WidgetNameComponent from "./WidgetNameComponent"

const EachWidget = () =>
    <div className="row border border-warning rounded">
      <WidgetSelector/>

      <WidgetTitle/>
      <ContentTitle/>
      <WidgetSubSelector/>
      <WidgetNameComponent/>

      <div className="col-12 d-flex justify-content-start pt-4">
        <h3>Preview</h3>
      </div>

      <div className="col-12 pb-3">
        {/*For Padding*/}
      </div>
    </div>

export default EachWidget