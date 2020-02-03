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
        <div className="col-12 ml-2 ml-lg-0">
          <div className="nav nav-tabs pt-3 border-dark">
            {
              this.state.moduleTabs.map( (eachTab) => {
                return <ModuleEachTab
                    eachTab={eachTab}
                    key={eachTab._id}
                    allTabs={this.state.moduleTabs}
                />
              })
            }
          </div>
        </div>
    );
  }
}

export default CourseModuleTabs