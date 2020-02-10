import React from "react";
import '../../../styles/course-manager-header-style-client.css';
import AddCourse from './CourseAdder/AddCourseComponent.js'

const CourseManagerNavbarComponent = ({addCourse, newCourseTitle}) =>

    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="d-flex flex-row my-0 justify-content-start">
          <button className="btn btn-lg btn-dark" type="button">
            <i className="fas fa-bars"></i>
          </button>
          <label
              className="p-2 d-none d-lg-block vp-cs5610-course-list-span my-0">
            Course Manager
          </label>
        </div>
        <AddCourse addCourse={addCourse} newCourseTitle={newCourseTitle} />
      </nav>
    </div>

export default CourseManagerNavbarComponent