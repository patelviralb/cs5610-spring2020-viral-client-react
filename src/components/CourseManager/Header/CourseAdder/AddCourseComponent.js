import React from "react";
import '../../../../styles/course-manager-header-style-client.css';

class AddCourseComponent extends React.Component {
  state = {
    courseTitle: ""
  };

  updateTextField = (event) => {
    this.setState({
      courseTitle: event.target.value
    });
  };

  render() {
    return (
        <div className="form-inline my-2 my-lg-0 justify-content-end w-75">
          <div className="form-inline my-2 my-lg-0 justify-content-end w-100">
            <input type="text" id="vp-cs5610-course-name-to-add"
                   className="form-control mr-sm-2 w-75 mt-1"
                   placeholder="New Course Title"
                   maxLength="30"
                   onChange={this.updateTextField}
                   value={this.state.courseTitle}
            />
            <button className="mt-1 ml-2 btn btn-md btn-success"
                    title="Add New Course"
                    onClick={() => {
                      this.props.addCourse(
                          this.state.courseTitle
                      );
                      this.setState({
                        courseTitle: ""
                      });
                    }}>
              <i className="fa fa-1x fa-plus"></i>
            </button>
          </div>
        </div>
    )
  }
}

export default AddCourseComponent