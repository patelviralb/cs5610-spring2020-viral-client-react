import React from "react"
import "../../../../../styles/course-editor-style-client.css";
import TopicService from "../../../../../service/TopicService";
import {
  deleteTopic,
  updateTopic,
  updateTopicSelection
} from "../../../../../actions/TopicActions";
import { connect } from "react-redux"

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
        topicName: event.target.value
      }
    });
  };

  updateTopic = (event) => {
    this.editTopicTitle();
    this.props.updateTopic(this.state.topic._id, this.state.topic)
  };

  editTopicSelection = () => {
    this.props.updateTopicSelection(this.state.topic._id)
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
              className={`${this.props.selectedTopicID === this.state.topic._id ?
                "nav-link text-left btn active" : "nav-link text-left btn"}`}
              title={this.props.topicPill.topicName}
              onClick={this.editTopicSelection}
            >
              {this.props.topicPill.topicName}
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
              title={this.state.topic.topicName}
              value={this.state.topic.topicName}
              onChange={this.updateTopicTitle}
            />
          }
          {
            this.state.isEdit
            &&
            <button
              className="btn btn-outline-danger"
              title="Delete Topic"
              onClick={() => this.props.deleteTopic(this.state.topic._id,this.props.selectedTopicID)}
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
    selectedTopicID: state.topicReducer.selectedTopicID
  }
};

const dispatcherToPropertyMapper = (dispatch) => {
  return {
    deleteTopic: (topicID,selectedTopicID) => {
      TopicService.deleteTopic(topicID)
        .then(status =>
          dispatch(deleteTopic(topicID))
        );
      if (topicID === selectedTopicID) {
        dispatch(updateTopicSelection(null))
      }
    },

    updateTopic: (topicID, updatedTopic) => {
      TopicService.updateTopic(topicID, updatedTopic)
        .then(status =>
          dispatch(updateTopic(topicID, updatedTopic))
        )
    },

    updateTopicSelection: (topicID) => {
      dispatch(updateTopicSelection(topicID))
      /* TopicService.findTopicsForLesson(topicID)
        .then(allFoundTopics => dispatch(findLessonTopics(allFoundTopics))) */
    }
  }
};

export default connect(stateToPropertyMapper, dispatcherToPropertyMapper)(LessonEachTopic)