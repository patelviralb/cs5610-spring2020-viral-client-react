import React from "react"
import CourseManagerHeader from "../Header/CourseManagerNavbarComponent";
import CourseGridComponent from "./CourseGridComponent";
import { Link } from "react-router-dom"

const CourseGridView = ({ addCourse, newCourseTitle, courses, deleteCourse, updateCourse, history }) =>
    <div>
        <CourseManagerHeader addCourse={addCourse}
            newCourseTitle={newCourseTitle} />
        <div className="col-12 d-flex justify-content-end">
            <Link
                className="btn btn-md"
                to="/table"
            >
                <i className="fas fa-list" title="List View"></i>
            </Link>
        </div>

        <CourseGridComponent courses={courses}
            deleteCourse={deleteCourse}
            updateCourse={updateCourse}
        />
    </div>

export default CourseGridView