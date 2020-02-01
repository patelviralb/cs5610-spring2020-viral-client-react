import React from "react";
import '../course-manager-navbar.css';

class AddCourse extends React.Component {
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
                   className="form-control mr-sm-2 w-75"
                   placeholder="New Course Title"
                   onChange={this.updateTextField}
                   value={this.state.courseTitle}
            />
            <button className="btn btn-md btn-secondary"
                    onClick={() => {
                      this.props.addCourse(
                          this.state.courseTitle
                      );
                      this.setState({
                        courseTitle: ""
                      });
                    }}>
              <i className="fa fa-1x fa-plus vp-cs5610-add-course-button"></i>
            </button>
          </div>
        </div>
    )
  }
}

export default AddCourse