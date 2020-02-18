import React, {useState} from "react";

const HeadingWidget = ({widgetDetails}) => {
  const [widget, setWidget] = useState(widgetDetails);

  return (
      <div className="row">
        <div className="col-12 d-flex justify-content-start pt-3">
          <h2>Heading Widget</h2>
        </div>

        <div className="col-12 d-flex justify-content-start pt-3">
          <input
              className="form-control"
              type="text"
              placeholder="Widget Name"
              value={widget.name}
              onChange={(event) =>
                  setWidget({
                    ...widget,
                    name: event.target.value
                  })
              }
          />
        </div>

        <div className="col-12 d-flex justify-content-start pt-3">
          <input
              className="form-control"
              type="text"
              placeholder="Heading Text"
              value={widget.text}
              onChange={(event) =>
                  setWidget({
                    ...widget,
                    text: event.target.value
                  })
              }
          />
        </div>

        <div className="col-12 d-flex justify-content-start pt-3">
          <select
              className="form-control"
              name="heading-selector"
              defaultValue={widget.size}
              onChange={(event) => {
                setWidget({
                  ...widget,
                  size: parseInt(event.target.value)
                })
              }
              }
          >
            <option value="none" disabled hidden>Select Heading Size</option>
            <option value="1">Heading 1</option>
            <option value="2">Heading 2</option>
            <option value="3">Heading 3</option>
            <option value="4">Heading 4</option>
            <option value="5">Heading 5</option>
            <option value="6">Heading 6</option>
            <option value="7">Heading 7</option>
          </select>
        </div>
        {/*<WidgetName/>
      <ContentTitle/>
      <WidgetSubSelector/>*/}

        <div className="col-12 d-flex justify-content-start pt-4">
          <h3>Preview</h3>
        </div>

        <div className="col-12 d-flex justify-content-start pt-4">
          {
            widget.size === 1
            &&
            <h1>{widget.text}</h1>
          }
          {
            widget.size === 2
            &&
            <h2>{widget.text}</h2>
          }
          {
            widget.size === 3
            &&
            <h3>{widget.text}</h3>
          }
          {
            widget.size === 4
            &&
            <h4>{widget.text}</h4>
          }
          {
            widget.size === 5
            &&
            <h5>{widget.text}</h5>
          }
          {
            widget.size === 6
            &&
            <h6>{widget.text}</h6>
          }
          {
            widget.size === 7
            &&
            <h7>{widget.text}</h7>
          }
          {
            (widget.size !== 1
                &&
                widget.size !== 2
                &&
                widget.size !== 3
                &&
                widget.size !== 4
                &&
                widget.size !== 5
                &&
                widget.size !== 6
                &&
                widget.size !== 7)
            &&
            <h4>{widget.text}</h4>
          }
        </div>

        <div className="col-12 pb-3">
          {/*For Padding*/}
        </div>
      </div>
  )
};

export default HeadingWidget