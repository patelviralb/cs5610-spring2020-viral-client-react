import React from "react"
import "../../course-editor-style-client.css"
import TabEachPill from "./TabEachPillComponent";

class TabPills extends React.Component {
  state = {
    tabPills: [
      {
        "tabPillName": "Pill 1",
        "_id": "1"
      },
      {
        "tabPillName": "Pill 2",
        "_id": "2"
      },
      {
        "tabPillName": "Pill 3",
        "_id": "3"
      },
      {
        "tabPillName": "Pill 4",
        "_id": "4"
      },
      {
        "tabPillName": "Pill 5",
        "_id": "5"
      },
      {
        "tabPillName": "Pill 6",
        "_id": "6"
      }
    ]
  };

  render() {
    return (
        <div className="nav nav-pills pt-3">
          {
            this.state.tabPills.map((eachPill) => {
              return <TabEachPill
                  eachPill={eachPill}
                  key={eachPill._id}
              />
            })
          }
          <div className="nav-item pr-3 vp-cs5610-nav-item">
            <label
                className="form-control btn btn-outline-primary wbdv-topic-add-btn">
              <i className="fas fa-plus"></i>
            </label>
          </div>
        </div>
    );
  }
}

export default TabPills