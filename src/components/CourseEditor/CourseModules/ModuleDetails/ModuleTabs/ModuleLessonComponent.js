import React from "react";
import "../../../../../styles/course-editor-style-client.css";
import ModuleEachLesson from "./ModuleEachLessonComponent";
import LessonService from "../../../../../service/LessonService";
import { createNewLesson } from "../../../../../actions/LessonActions";
import { connect } from "react-redux";

class CourseModuleTabs extends React.Component {
  render() {
    return (
      <div>
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
                />
              })
            }
            {
              this.props.lessonList
              &&
              <div className="nav-item mt-3 mb-2 vp-cs5610-nav-item btn-group ml-2">
                <button
                  className="nav-link btn btn-primary"
                  onClick={() => this.props.createNewLesson(this.props.selectedModuleID)}
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            }
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
}

const dispatcherToPropertyMapper = (dispatch) => {
  return {
    createNewLesson: (moduleID) => {
      const newLesson = {
        "lessonName": "New Lesson"
      }
      LessonService.createLesson(moduleID, newLesson)
        .then(newAddedLesson => dispatch(createNewLesson(newAddedLesson)))
    }
  }
}

export default connect(stateToPropertyMapper, dispatcherToPropertyMapper)(CourseModuleTabs)