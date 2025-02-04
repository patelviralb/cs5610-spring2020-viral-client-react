import React from "react"
import "../../../styles/course-editor-style-client.css";
import {connect} from "react-redux";
import CourseModuleItem from "./CourseModuleItemComponent";
import ModuleService from "../../../service/ModuleService";
import {
  createNewModule,
  findCourseModules,
  updateModuleSelection
} from "../../../actions/ModuleActions";
import {updateLessonSelection} from "../../../actions/LessonActions";
import {updateTopicSelection} from "../../../actions/TopicActions";
import {Router} from "react-router"
import {Route} from "react-router-dom"
import LessonService from "../../../service/LessonService";
import {findModuleLessons} from "../../../actions/LessonActions";
import {removeTopicsAfterLessonDelete} from "../../../actions/TopicActions"
import {removeAllWidgetsAfterTopicDelete} from "../../../actions/WidgetActions";

class CourseModule extends React.Component {
  componentDidMount = () => {
    this.props.findModulesForCourse(this.props.match.params.courseID);
    this.props.updateModuleSelection(null);
  };

  render() {
    return (
        <div className="col-lg-3 col-12 vp-cs5610-module-list">
          <Router history={this.props.history}>
            <Route
                path="/course/:courseID/modules/:moduleID"
                render={(props) => {
                  this.props.updateModuleSelection(props.match.params.moduleID);
                }}
            />
          </Router>
          {
            this.props.moduleList
            &&
            this.props.moduleList.map((module) => {
              return <CourseModuleItem
                  key={module._id}
                  module={module}
                  history={this.props.history}
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
            <div
                className="row w-100 vp-cs5610-each-module d-flex justify-content-center">
              <button
                  className="btn btn-dark col-2"
                  onClick={() => this.props.createNewModule(
                      this.props.match.params.courseID)}
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
      dispatch(updateModuleSelection(moduleID));
      LessonService.findLessonsForModule(moduleID)
      .then(
          allFoundLessons => dispatch(findModuleLessons(allFoundLessons)),
          dispatch(updateLessonSelection(null)),
          dispatch(updateTopicSelection(null)),
          dispatch(removeTopicsAfterLessonDelete()),
          dispatch(removeAllWidgetsAfterTopicDelete())
      )
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