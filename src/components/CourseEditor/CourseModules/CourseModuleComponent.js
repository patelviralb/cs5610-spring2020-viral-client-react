import React from "react"
import CourseModuleItem from "./CourseModuleItemComponent";

class CourseModuleComponent extends React.Component {
  state = {
    moduleList: [
        {
          "moduleName": "Module 1",
          "_id": "1"
        },
        {
          "moduleName": "Module 2",
          "_id": "2"
        },
        {
          "moduleName": "Module 3",
          "_id": "3"
        },
        {
          "moduleName": "Module 4",
          "_id": "4"
        },
        {
          "moduleName": "Module 5",
          "_id": "5"
        },
        {
          "moduleName": "Module 6",
          "_id": "6"
        },
        {
          "moduleName": "Module 7",
          "_id": "7"
        }
    ]
  };

  render() {
    return (
        <div className="col-lg-3 col-12 vp-cs5610-module-list">
          {
            this.state.moduleList.map((module) => {
              return <CourseModuleItem
                  key={module._id}
                  moduleName={module.moduleName}
              />
            })
          }
          <div className="d-flex justify-content-center mt-4 mb-4">
            <div className="row w-100 vp-cs5610-each-module">
              <input type="text" className="col-10 vp-cs5610-module-title"
                     placeholder="New Course Module"/>
              <button className="btn btn-dark col-2">
                <i className="fas fa-plus vp-cs5610-add-module-button wbdv-module-item-add-btn"></i>
              </button>
            </div>
          </div>
        </div>
    )
  }
}

export default CourseModuleComponent