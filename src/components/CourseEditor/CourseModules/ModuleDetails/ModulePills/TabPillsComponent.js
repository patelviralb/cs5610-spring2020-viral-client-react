import React from "react";
import "../../../../../styles/course-editor-style-client.css";
import TabEachPill from "./TabEachPillComponent";
import TopicService from "../../../../../service/TopicService";
import { createNewTopic } from "../../../../../actions/TopicActions";
import { connect } from "react-redux"

class TabPills extends React.Component {
  render() {
    return (
      <div>
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
}

const dispatcherToPropertyMapper = (dispatch) => {
  return {
    createNewTopic: (lessonID) => {
      const newTopic = {
        "topicName": "New Topic"
      }
      TopicService.createTopic(lessonID, newTopic)
        .then(newAddedTopic => dispatch(createNewTopic(newAddedTopic)))
    }
  }
}

export default connect(stateToPropertyMapper, dispatcherToPropertyMapper)(TabPills)