import React from "react"
import GridImage from "./folder-icon.png"
import { getDate } from "../../../common/constants";
import { Link } from "react-router-dom"
import "../../../styles/course-grid-style-client.css"

class CourseCard extends React.Component {
  state = {
    isEdit: false,
    course: this.props.course
  };

  editCourseTitle = () => {
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

  updateCourseTitle = (event) => {
    this.setState({
      course: {
        ...this.state.course,
        courseTitle: event.target.value,
        "dateModified": getDate()
      }
    });
  };

  updateCourse = (event) => {
    this.editCourseTitle();
    this.setState({
      course: {
        ...this.state.course,
        "dateModified": getDate()
      }
    });
    this.props.updateCourse(this.state.course)
  };

  render() {
    return (
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mt-3">
        <div className={`border border-light rounded pb-2 ${this.state.isEdit
          ? "vp-cs5610-highlight-grid" : ""}`}>
          <figure className="figure">
            <Link
              className="btn btn-link mt-n2"
              title={this.state.course.courseTitle}
              to={`/course/${this.state.course._id}`}
            >
              <img
                src={GridImage}
                className="figure-img img-fluid rounded"
                alt="400 X 300"
                title={this.state.course.courseTitle}
              />
            </Link>
          </figure>
          <div className="d-flex justify-content-center w-100">
            {
              !this.state.isEdit &&
              <Link
                className="d-flex justify-content-center vp-cs5610-grid-text-overflow btn btn-link mr-sm-2 w-75 ml-1"
                title={this.state.course.courseTitle}
                to={`/course/${this.state.course._id}`}
              >
                {this.state.course.courseTitle}
              </Link>
            }
            {
              this.state.isEdit &&
              <input type="text" id="vp-cs5610-course-name-to-add"
                className="form-control mr-sm-2 w-100 ml-1"
                placeholder="New Course Title"
                maxLength="30"
                onChange={this.updateCourseTitle}
                value={this.state.course.courseTitle} />
            }
          </div>

          <div className="d-flex justify-content-center border-top rounded">
            Last Modified Date :
            </div>
          <div className="d-flex justify-content-center border-bottom rounded">
            {this.state.course.dateModified}
          </div>
          <div className="d-flex justify-content-center border-top border-bottom rounded">
            Owner : Me
            </div>
          <div className="d-flex justify-content-center border-top rounded">
            <button className="mt-2 btn btn-danger"
              title="Delete Course"
              onClick={() => this.props.deleteCourse(
                this.state.course._id)}>
              <i className="fas fa-trash-alt"></i>
            </button>
            {
              !this.state.isEdit &&
              <button className="ml-4 mt-2 btn btn-warning"
                title="Edit Course Title"
                onClick={this.editCourseTitle}>
                <i className="fas fa-edit"></i>
              </button>
            }
            {
              this.state.isEdit &&
              <button className="ml-4 ml-2 mt-2 btn btn-success"
                title="Update Course Title"
                onClick={this.updateCourse}>
                <i className="fas fa-check"></i>
              </button>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default CourseCard