import React from "react"
import "../../styles/course-editor-style-client.css"
import { findCourseById } from "../../service/CourseService"

class CourseEditorNavigationBar extends React.Component {
  state = {
    course: []
  }

  componentDidMount = async () => {
    const selectedCourseID = this.props.match.params.courseID
    const selectedCourse = await findCourseById(selectedCourseID);
    this.setState({
      course: selectedCourse
    });
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
            {this.state.course.courseTitle}
          </span>
        </div>
      </nav>
    )
  }
}

export default CourseEditorNavigationBar