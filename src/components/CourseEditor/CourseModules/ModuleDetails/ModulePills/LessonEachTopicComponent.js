import React from "react"
import "../../../../../styles/course-editor-style-client.css";
import TopicService from "../../../../../service/TopicService";
import {
  deleteTopic,
  updateTopic,
  updateTopicSelection
} from "../../../../../actions/TopicActions";
import {connect} from "react-redux"
import {removeAllWidgetsAfterTopicDelete} from "../../../../../actions/WidgetActions"

class LessonEachTopic extends React.Component {
  state = {
    isEdit: false,
    topic: this.props.topicPill

  };

  editTopicTitle = () => {
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

  updateTopicTitle = (event) => {
    this.setState({
      topic: {
        ...this.state.topic,
        title: event.target.value
      }
    });
  };

  updateTopic = (event) => {
    this.editTopicTitle();
    this.props.updateTopic(this.state.topic.id, this.state.topic)
  };

  editTopicSelection = () => {
    this.props.history.push(`/course/${this.props.selectedCourse._id}/modules/${this.props.selectedModuleID}/lessons/${this.props.selectedLessonID}/topics/${this.state.topic.id}`)
  };

  render() {
    return (
        <div>
          <div
              className="nav-item pr-3 vp-cs5610-nav-item btn-group ml-2"
          >
            {
              !this.state.isEdit
              &&
              <span
                  className={`${this.props.selectedTopicID
                  === this.state.topic.id ?
                      "nav-link text-left btn active"
                      : "nav-link text-left btn"}`}
                  title={this.props.topicPill.title}
                  onClick={this.editTopicSelection}
              >
              {this.props.topicPill.title}
            </span>
            }
            {
              !this.state.isEdit
              &&
              <button
                  className="nav-link btn"
                  title="Edit Topic Title"
                  onClick={this.editTopicTitle}
              >
                <i className="fas fa-edit"></i>
              </button>
            }

            {
              this.state.isEdit
              &&
              <input
                  className="form-control"
                  title={this.state.topic.title}
                  value={this.state.topic.title}
                  onChange={this.updateTopicTitle}
              />
            }
            {
              this.state.isEdit
              &&
              <button
                  className="btn btn-outline-danger"
                  title="Delete Topic"
                  onClick={() => this.props.deleteTopic(this.state.topic.id,
                      this.props.selectedTopicID, this.props.history,
                      this.props.selectedCourse._id,
                      this.props.selectedModuleID, this.props.selectedLessonID)}
              >
                <i className="fas fa-trash"></i>
              </button>
            }
            {
              this.state.isEdit
              &&
              <button
                  className="btn btn-outline-success"
                  title="Edit Topic Title"
                  onClick={this.updateTopic}
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
    selectedTopicID: state.topicReducer.selectedTopicID,
    selectedLessonID: state.lessonReducer.selectedLessonID,
    selectedCourse: state.courseReducer.course,
    selectedModuleID: state.moduleReducer.selectedModuleID
  }
};

const dispatcherToPropertyMapper = (dispatch) => {
  return {
    deleteTopic: (topicID, selectedTopicID, history, courseID, moduleID, lessonID) => {
      TopicService.deleteTopic(topicID)
      .then(status =>
          dispatch(deleteTopic(topicID))
      );
      if (topicID === selectedTopicID) {
        dispatch(updateTopicSelection(null));
        dispatch(removeAllWidgetsAfterTopicDelete());
        history.push(`/course/${courseID}/modules/${moduleID}/lessons/${lessonID}`)
      }
    },

    updateTopic: (topicID, updatedTopic) => {
      TopicService.updateTopic(topicID, updatedTopic)
      .then(status =>
          dispatch(updateTopic(topicID, updatedTopic))
      )
    }
  }
};

export default connect(stateToPropertyMapper, dispatcherToPropertyMapper)(
    LessonEachTopic)