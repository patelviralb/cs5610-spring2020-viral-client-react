import React, {useState} from "react"
import ContentTitle from "../ContentTitleComponent"
import WidgetSubSelector from "../WidgetSubSelectorComponent"
import WidgetName from "../WidgetNameComponent"

const ParagraphWidget = ({widgetDetails}) => {
  const [widget, setWidget] = useState(widgetDetails);

  return (
      <span>
        <div className="row">
          <div className="col-12 d-flex justify-content-start pt-3">
            <h2>Paragraph Widget</h2>
          </div>

          <div className="col-12 d-flex justify-content-start pt-3">
            <input
                className="form-control"
                type="text"
                placeholder="Widget Name"
                /*value={widget.name}*/
                onChange={(event) =>
                    setWidget({
                      ...widget,
                      name: event.target.value
                    })
                }
            />
          </div>

          <div className="col-12 d-flex justify-content-start pt-3">
            <textarea
                className="form-control"
                type="text"
                placeholder="Paragraph Text"
                /*value={widget.text}*/
                onChange={(event) =>
                    setWidget({
                      ...widget,
                      text: event.target.value
                    })
                }
            />
          </div>

          <div className="col-12 d-flex justify-content-start pt-4">
            <h3>Preview</h3>
          </div>

          <div className="col-12 d-flex justify-content-start pt-4">
            {/*{widget.text}*/}
          </div>

          <div className="col-12 pb-3">
            {/*For Padding*/}
          </div>
        </div>
      </span>
  );
};

export default ParagraphWidget