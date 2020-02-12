import React from "react";
import "../../../../../styles/course-editor-style-client.css";
import TabEachPill from "./LessonEachTopicComponent";
import TopicService from "../../../../../service/TopicService";
import {
  createNewTopic,
  updateTopicSelection
} from "../../../../../actions/TopicActions";
import { connect } from "react-redux"
import {Router} from "react-router"
import {Route} from "react-router-dom"

class LessonTopics extends React.Component {
  render() {
    return (
      <div>
        <Router history={this.props.history}>
          <Route
              path="/course/:courseID/modules/:moduleID/lessons/:lessonID/topics/:topicID"
              render={(props) => {
                this.props.updateTopicSelection(props.match.params.topicID);
              }}
          />
        </Router>
        {
          (this.props.topicList.length === 0 && this.props.selectedLessonID)
          &&
          <div className="alert alert-warning mt-2" role="alert">
            <div className="d-flex justify-content-center">
              <i className="fas fa-2x fa-exclamation-triangle"></i>
            </div>
            <label className="d-flex justify-content-center">
              No Topics found for selected lesson.
            </label>
            <label className="d-flex justify-content-center">
              Start adding topics to proceed.
            </label>
          </div>
        }
        {
          (this.props.topicList && this.props.selectedLessonID !== null)
          &&
          <div className="nav nav-pills pt-3">
            {
              this.props.topicList.map((topicPill) => {
                return <TabEachPill
                  topicPill={topicPill}
                  key={topicPill._id}
                  history={this.props.history}
                  match={this.props.match}
                />
              })
            }
            {
              (this.props.topicList && this.props.selectedLessonID)
              &&
              <div className="nav-item mb-2 vp-cs5610-nav-item ml-2">
                <button
                  className="nav-link btn btn-outline-primary"
                  onClick={() => this.props.createNewTopic(this.props.selectedLessonID)}
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            }
          </div>
        }
        {
          !this.props.selectedLessonID
          &&
          <div className="alert alert-secondary mt-2" role="alert">
            <div className="d-flex justify-content-center">
              <i className="fas fa-2x fa-exclamation-triangle"></i>
            </div>
            <label className="d-flex justify-content-center">
              No Lesson selected. Please select a lesson to view topics.
            </label>
          </div>
        }
      </div>
    );
  }
}

const stateToPropertyMapper = (state) => {
  return {
    selectedLessonID: state.lessonReducer.selectedLessonID,
    topicList: state.topicReducer.topics
  }
};

const dispatcherToPropertyMapper = (dispatch) => {
  return {
    createNewTopic: (lessonID) => {
      const newTopic = {
        "topicName": "New Topic"
      };
      TopicService.createTopic(lessonID, newTopic)
        .then(newAddedTopic => dispatch(createNewTopic(newAddedTopic)))
    },

    updateTopicSelection: (topicID) => {
      dispatch(updateTopicSelection(topicID))
      /* TopicService.findTopicsForLesson(topicID)
        .then(allFoundTopics => dispatch(findLessonTopics(allFoundTopics))) */
    }
  }
};

export default connect(stateToPropertyMapper, dispatcherToPropertyMapper)(LessonTopics)