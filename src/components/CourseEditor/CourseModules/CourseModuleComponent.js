import React from "react"
import "../../../styles/course-editor-style-client.css"
import { connect } from "react-redux"
import CourseModuleItem from "./CourseModuleItemComponent";
import ModuleService from "../../../service/ModuleService"
/* import ModuleActions from "../../../actions/ModuleActions" */
import { findCourseModules, createNewModule } from "../../../actions/ModuleActions"

class CourseModuleComponent extends React.Component {
  componentDidMount = () => {
    this.props.findModulesForCourse(this.props.match.params.courseID);
  };

  render() {
    return (
      <div className="col-lg-3 col-12 vp-cs5610-module-list">
        {
          this.props.moduleList
          &&
          this.props.moduleList.map((module) => {
            return <CourseModuleItem
              key={module._id}
              module={module}
            />
          })
        }
        <div className="d-flex justify-content-center mt-4 mb-4">
          <div className="row w-100 vp-cs5610-each-module d-flex justify-content-center">
            <button
              className="btn btn-dark col-2"
              onClick={() => this.props.createNewModule(this.props.match.params.courseID)}
            >
              <i className="fas fa-plus vp-cs5610-add-module-button wbdv-module-item-add-btn"></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const stateToPropertyMapper = (state) => {
  return {
    moduleList: state.modules
  }
}

const dispatcherToPropertyMapper = (dispatch) => {
  return {
    findModulesForCourse: (courseID) => {
      ModuleService.findModulesForCourse(courseID)
        .then(allFoundModules => dispatch(findCourseModules(allFoundModules)))
    },

    createNewModule: (courseID) => {
      const newModule = {
        "moduleName": "New Module"
      }
      ModuleService.createModule(courseID, newModule)
        .then(newAddedModule => dispatch(createNewModule(newAddedModule)))
    }
  }
}

export default connect(
  stateToPropertyMapper,
  dispatcherToPropertyMapper
)
  (CourseModuleComponent)