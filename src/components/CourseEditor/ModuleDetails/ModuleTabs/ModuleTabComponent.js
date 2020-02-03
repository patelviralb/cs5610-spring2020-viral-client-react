import React from "react"
import "../../course-editor-style-client.css"
import ModuleEachTab from "./ModuleEachTabComponent";

class CourseModuleTabs extends React.Component {
  state = {
    moduleTabs: [
      {
        "moduleTabName": "Tab 1",
        "_id": "1"
      },
      {
        "moduleTabName": "Tab 2",
        "_id": "2"
      },
      {
        "moduleTabName": "Tab 3",
        "_id": "3"
      },
      {
        "moduleTabName": "Tab 4",
        "_id": "4"
      },
      {
        "moduleTabName": "Tab 5",
        "_id": "5"
      },
      {
        "moduleTabName": "Tab 6",
        "_id": "6"
      }
    ]
  };

  render() {
    return (
        <div className="nav nav-tabs pt-3 border-dark">
          {
            this.state.moduleTabs.map((eachTab) => {
              return <ModuleEachTab
                  eachTab={eachTab}
                  key={eachTab._id}
              />
            })
          }

          <div className="nav-item pr-3 vp-cs5610-nav-item mt-2">
            <button className="form-control btn btn-primary">
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
    );
  }
}

export default CourseModuleTabs