import React from "react"
import GridImage from  "./folder-icon.png"
import {getDate} from "../../common/constants";
import "./course-grid-view.css"

class GridViewEachIcon extends React.Component {
  state = {
    isEdit: false,
    course: this.props.course
  };

  editCourseTitle = () => {
    this.setState((previousState) => {
      if(this.state.isEdit) {
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
          <div className={`border border-light rounded pb-2 ${this.state.isEdit ? "vp-cs5610-highlight-grid" : ""}`}>
            <div className={`d-flex justify-content-center ${this.state.isEdit ? "vp-cs5610-highlight-grid" : ""}`}>
              <button
                  className="btn btn-link"
                  onClick={this.props.showCourseEditorPage}
              >
                <img className={`img-fluid img-thumbnail ${this.state.isEdit ? "vp-cs5610-highlight-grid" : ""}`}
                     src={GridImage} alt="400 X 300 Image" />
              </button>
            </div>
            <div className="d-flex justify-content-center mt-2">
              {
                  !this.state.isEdit &&
                  <div className="vp-cs5610-grid-overflow w-75">
                    <button
                        className="btn btn-link vp-cs5610-grid-text-overflow"
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
                         className="form-control mr-sm-2 w-100 ml-1"
                         placeholder="New Course Title"
                         onChange={this.updateCourseTitle}
                         value={this.state.course.courseTitle} />
                }
            </div>
            <div className="d-flex justify-content-center">
              Last Modified Date : {this.state.course.dateModified}
            </div>
            <div className="d-flex justify-content-center">
              Owner : Me
            </div>
            <div className="d-flex justify-content-center">
              <button className="mt-2 btn btn-danger"
                      onClick={() => this.props.deleteCourse(this.state.course._id)}>
                <i className="fas fa-trash-alt"></i>
              </button>
              {
                !this.state.isEdit &&
                <button className="ml-4 mt-2 btn btn-warning" onClick={this.editCourseTitle}>
                  <i className="fas fa-edit"></i>
                </button>
              }
              {
                this.state.isEdit &&
                <button className="ml-4 ml-2 mt-2 btn btn-success" onClick={this.updateCourse}>
                  <i className="fas fa-check"></i>
                </button>
              }
            </div>
          </div>
        </div>
    );
  }
}

export default GridViewEachIcon