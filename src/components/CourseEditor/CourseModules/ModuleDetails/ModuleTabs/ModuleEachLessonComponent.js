import React from "react"
import "../../../../../styles/course-editor-style-client.css"
import { connect } from "react-redux"
import LessonService from "../../../../../service/LessonService";
import TopicService from "../../../../../service/TopicService";
import { deleteLesson, updateLesson, updateLessonSelection } from "../../../../../actions/LessonActions";
import {findLessonTopics} from "../../../../../actions/TopicActions";
import { updateTopicSelection, removeTopicsAfterLessonDelete } from "../../../../../actions/TopicActions"

class ModuleEachLesson extends React.Component {
  state = {
    isEdit: false,
    lesson: this.props.eachLesson

  }

  editLessonTitle = () => {
    this.setState((previousState) => {
      if (this.state.isEdit) {
        return {
          isEdit: false
        }
      } else {
        return {
          isEdit: true
        }
      }
    });
  };

  updateLessonTitle = (event) => {
    this.setState({
      lesson: {
        ...this.state.lesson,
        lessonName: event.target.value
      }
    });
  };

  updateLesson = (event) => {
    this.editLessonTitle();
    this.props.updateLesson(this.state.lesson._id, this.state.lesson)
  };

  editLessonSelection = () => {
    this.props.updateLessonSelection(this.state.lesson._id)
  };

  render() {
    return (
      <div>
        <div
          className={`${this.props.selectedLessonID === this.state.lesson._id ?
            "nav-item mt-3 mb-2 vp-cs5610-nav-item btn-group ml-2 rounded-top border border-bottom-0 border-primary .bg-secondary" : "nav-item mt-3 mb-2 vp-cs5610-nav-item btn-group ml-2"}`}
        >
          {
            !this.state.isEdit
            &&
            <span
              className="nav-link text-left btn"
              title={this.state.lesson.lessonName}
              onClick={this.editLessonSelection}
            >
              {this.state.lesson.lessonName}
            </span>
          }
          {
            !this.state.isEdit
            &&
            <button
              className="nav-link btn"
              title="Edit Lesson Title"
              onClick={this.editLessonTitle}
            >
              <i className="fas fa-edit"></i>
            </button>
          }

          {
            this.state.isEdit
            &&
            <input
              className="form-control"
              title={this.state.lesson.lessonName}
              value={this.state.lesson.lessonName}
              onChange={this.updateLessonTitle}
            />
          }
          {
            this.state.isEdit
            &&
            <button
              className="btn btn-outline-danger"
              title="Delete Lesson"
              onClick={() => this.props.deleteLesson(this.state.lesson._id, this.props.selectedLessonID)}
            >
              <i className="fas fa-trash"></i>
            </button>
          }
          {
            this.state.isEdit
            &&
            <button
              className="btn btn-outline-success"
              title="Edit Lesson Title"
              onClick={this.updateLesson}
            >
              <i className="fas fa-check"></i>
            </button>
          }
        </div>
      </div>
    )
  }
}

const stateToPropertyMapper = (state) => {
  return {
    selectedLessonID: state.lessonReducer.selectedLessonID
  }
}

const dispatcherToPropertyMapper = (dispatch) => {
  return {
    deleteLesson: (lessonID, selectedLessonID) => {
      LessonService.deleteLesson(lessonID)
        .then(status =>
          dispatch(deleteLesson(lessonID))
        )
        if (lessonID === selectedLessonID) {
          dispatch(removeTopicsAfterLessonDelete())
          dispatch(updateTopicSelection(null))
        }
    },

    updateLesson: (lessonID, updatedLesson) => {
      LessonService.updateLesson(lessonID, updatedLesson)
        .then(status =>
          dispatch(updateLesson(lessonID, updatedLesson))
        )
    },

    updateLessonSelection: (lessonID) => {
      dispatch(updateLessonSelection(lessonID))
      TopicService.findTopicsForLesson(lessonID)
        .then(allFoundTopics => dispatch(findLessonTopics(allFoundTopics)))
    }
  }
}

export default connect(stateToPropertyMapper, dispatcherToPropertyMapper)(ModuleEachLesson)