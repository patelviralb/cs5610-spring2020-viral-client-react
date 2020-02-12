import React from "react";
import "../../../../../styles/course-editor-style-client.css";
import ModuleEachLesson from "./ModuleEachLessonComponent";
import LessonService from "../../../../../service/LessonService";
import {
  createNewLesson,
  updateLessonSelection
} from "../../../../../actions/LessonActions";
import {connect} from "react-redux";
import TopicService from "../../../../../service/TopicService";
import {findLessonTopics} from "../../../../../actions/TopicActions";
import {Route} from "react-router-dom";
import {Router} from "react-router";

class ModuleLessons extends React.Component {
  render() {
    return (
        <div>
          <Router history={this.props.history}>
            <Route
                path="/course/:courseID/modules/:moduleID/lessons/:lessonID"
                render={(props) => {
                  this.props.updateLessonSelection(props.match.params.lessonID);
                }}
            />
          </Router>
          {
            (this.props.lessonList.length === 0 && this.props.selectedModuleID)
            &&
            <div className="alert alert-warning mt-2" role="alert">
              <div className="d-flex justify-content-center">
                <i className="fas fa-2x fa-exclamation-triangle"></i>
              </div>
              <label className="d-flex justify-content-center">
                No Lessons found for selected module.
              </label>
              <label className="d-flex justify-content-center">
                Start adding lessons to proceed.
              </label>
            </div>
          }
          {
            this.props.selectedModuleID
            &&
            <div className="nav nav-tabs pt-3 border-dark">
              {
                this.props.lessonList
                &&
                this.props.lessonList.map((eachLesson) => {
                  return <ModuleEachLesson
                      eachLesson={eachLesson}
                      key={eachLesson._id}
                      history={this.props.history}
                      match={this.props.match}

                  />
                })
              }
              {
                (this.props.lessonList && this.props.selectedModuleID)
                &&
                <div className="nav-item mt-3 mb-2 vp-cs5610-nav-item ml-2">
                  <button
                      className="nav-link btn btn-primary"
                      onClick={() => this.props.createNewLesson(
                          this.props.selectedModuleID)}
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              }
            </div>
          }
          {
            !this.props.selectedModuleID
            &&
            <div className="alert alert-secondary mt-2" role="alert">
              <div className="d-flex justify-content-center">
                <i className="fas fa-2x fa-exclamation-triangle"></i>
              </div>
              <label className="d-flex justify-content-center">
                No Module selected. Please select a module to view lessons.
              </label>
            </div>
          }
        </div>
    );
  }
}

const stateToPropertyMapper = (state) => {
  return {
    selectedModuleID: state.moduleReducer.selectedModuleID,
    lessonList: state.lessonReducer.lessons
  }
};

const dispatcherToPropertyMapper = (dispatch) => {
  return {
    createNewLesson: (moduleID) => {
      const newLesson = {
        "lessonName": "New Lesson"
      };
      LessonService.createLesson(moduleID, newLesson)
      .then(newAddedLesson => dispatch(createNewLesson(newAddedLesson)))
    },

    updateLessonSelection: (lessonID) => {
      dispatch(updateLessonSelection(lessonID));
      TopicService.findTopicsForLesson(lessonID)
      .then(allFoundTopics => dispatch(findLessonTopics(allFoundTopics)))
    }
  }
};

export default connect(stateToPropertyMapper, dispatcherToPropertyMapper)(
    ModuleLessons)