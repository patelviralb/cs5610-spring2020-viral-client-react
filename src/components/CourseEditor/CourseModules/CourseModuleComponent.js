import React from "react"
import "../../../styles/course-editor-style-client.css";
import { connect } from "react-redux";
import CourseModuleItem from "./CourseModuleItemComponent";
import ModuleService from "../../../service/ModuleService";
import { findCourseModules, createNewModule, updateModuleSelection } from "../../../actions/ModuleActions";
import { updateLessonSelection } from "../../../actions/LessonActions";
import { updateTopicSelection } from "../../../actions/TopicActions";

  class CourseModule extends React.Component {
    componentDidMount = () => {
      this.props.findModulesForCourse(this.props.match.params.courseID);
      this.props.updateModuleSelection(null);
      this.props.updateLessonSelection(null);
      this.props.updateTopicSelection(null);
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
                courseID={this.props.match.params.courseID}
              />
            })
          }
          {
            this.props.moduleList.length === 0
            &&
            <div className="alert alert-warning mt-2" role="alert">
              <div className="d-flex justify-content-center">
                <i className="fas fa-2x fa-exclamation-triangle"></i>
              </div>
              <label className="d-flex justify-content-center">
                No Modules found for selected course.
              </label>
              <label className="d-flex justify-content-center">
                Start adding modules to proceed.
              </label>
            </div>
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
    moduleList: state.moduleReducer.modules
  }
};

const dispatcherToPropertyMapper = (dispatch) => {
  return {
    findModulesForCourse: (courseID) => {
      ModuleService.findModulesForCourse(courseID)
        .then(allFoundModules => dispatch(findCourseModules(allFoundModules)))
    },

    createNewModule: (courseID) => {
      const newModule = {
        "moduleName": "New Module"
      };
      ModuleService.createModule(courseID, newModule)
        .then(newAddedModule => dispatch(createNewModule(newAddedModule)))
    },

    updateModuleSelection: (moduleID) => {
      dispatch(updateModuleSelection(moduleID))
    },

    updateLessonSelection: (lessonID) => {
      dispatch(updateLessonSelection(lessonID))
    },

    updateTopicSelection: (topicID) => {
      dispatch(updateTopicSelection(topicID))
    }
  }
};

export default connect(
  stateToPropertyMapper,
  dispatcherToPropertyMapper
)
  (CourseModule)