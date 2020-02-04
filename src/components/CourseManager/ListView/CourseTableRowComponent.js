import React from "react"
import "../../../styles/course-table-style-client.css"
import {getDate} from "../../../common/constants";

class CourseTableRowComponent extends React.Component {
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
        <tr className={`${this.state.isEdit ? "vp-cs5610-highlight-row" : ""}`}>
          <td className="vp-cs5610-title-column-width pl-5 pt-4">
            {
              !this.state.isEdit &&
              <div className="d-flex justify-content-start w-75">
                <i className="fas fa-book mt-1"></i>
                <button
                    className="btn btn-link mt-n2"
                    title={this.state.course.courseTitle}
                    onClick={this.props.showCourseEditorPage}
                >
                  {this.state.course.courseTitle}
                </button>
              </div>
            }
            {
              this.state.isEdit &&
              <input type="text" id="vp-cs5610-course-name-to-add"
                     className="form-control mr-sm-2 w-100 mt-n2"
                     placeholder="New Course Title"
                     maxLength="30"
                     onChange={this.updateCourseTitle}
                     value={this.state.course.courseTitle}/>
            }
          </td>
          <td className="d-sm-table-cell d-none vp-cs5610-owner-column-width pt-4">Me</td>
          <td className="d-md-table-cell d-none pt-4 vp-cs5610-modified-column-width">
            {this.state.course.dateModified}
          </td>
          <td className="vp-cs5610-extra-column-width">
            <div className="float-right float-md-none">
              <button className="ml-2 mt-2 btn btn-danger"
                      onClick={() => this.props.deleteCourse(
                          this.state.course._id)}>
                <i className="fas fa-trash-alt"></i>
              </button>
              {
                !this.state.isEdit &&
                <button className="ml-2 mt-2 btn btn-warning"
                        onClick={this.editCourseTitle}>
                  <i className="fas fa-edit"></i>
                </button>
              }
              {
                this.state.isEdit &&
                <button className="ml-2 mt-2 btn btn-success"
                        onClick={this.updateCourse}>
                  <i className="fas fa-check"></i>
                </button>
              }
            </div>
          </td>
        </tr>
    )
  }
}

export default CourseTableRowComponent