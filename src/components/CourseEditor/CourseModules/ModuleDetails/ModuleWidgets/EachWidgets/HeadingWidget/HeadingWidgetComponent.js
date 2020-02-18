import React from "react"
import WidgetTitle from "../WidgetTitleComponent"
import ContentTitle from "../ContentTitleComponent"
import WidgetSubSelector from "../WidgetSubSelectorComponent"
import WidgetName from "../WidgetNameComponent"

const HeadingWidget = () =>
    <div className="row">
      {/*<WidgetTitle/>*/}
      <div className="col-12 d-flex justify-content-start pt-3">
        <h2>Heading Widget</h2>
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

export default HeadingWidget