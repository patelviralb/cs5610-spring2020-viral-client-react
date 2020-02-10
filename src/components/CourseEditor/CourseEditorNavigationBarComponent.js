import React from "react"
import "../../styles/course-editor-style-client.css"
import {findCourseById} from "../../service/CourseService"
import {findCourseDetails} from "../../actions/CourseActions"
import {connect} from "react-redux"

class CourseEditorNavigationBar extends React.Component {
  componentDidMount = () => {
    const selectedCourseID = this.props.match.params.courseID;
    this.props.findCourseDetails(selectedCourseID)
  };

  render() {
    return (
        <nav className="navbar navbar-dark bg-dark">
          <div
              className="d-flex flex-row my-0 justify-content-start pt-sm-3 pt-md-0">
            <button
                className="btn btn-sm btn-dark close vp-cs5610-close-course-editor"
                onClick={() => this.props.history.push("/")}
            >
              <span className="p-3 text-white">&#10005;</span>
            </button>
            <span
                className="p-2 vp-cs5610-course-editor-span ml-2"
            >
            {this.props.course.courseTitle}
          </span>
          </div>
        </nav>
    )
  }
}

const stateToPropertyMapper = (state) => {
  return {
    course: state.courseReducer.course
  }
};

const dispatcherToPropertyMapper = (dispatch) => {
  return {
    findCourseDetails: (courseID) => {
      findCourseById(courseID)
      .then(course => dispatch(findCourseDetails(course)))
    }
  }
};

export default connect(stateToPropertyMapper, dispatcherToPropertyMapper)(
    CourseEditorNavigationBar)