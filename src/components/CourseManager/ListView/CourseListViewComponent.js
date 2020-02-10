import React from "react"
import CourseManagerHeader from "../Header/CourseManagerNavbarComponent";
import CourseTableComponent
    from "./CourseTableComponent";
import { Link } from "react-router-dom";

const CourseListView = ({ addCourse, newCourseTitle, courses, deleteCourse, updateCourse }) =>
    <div>
        <CourseManagerHeader addCourse={addCourse}
            newCourseTitle={newCourseTitle} />
        <div className="col-12 d-flex justify-content-end">
            <Link
                className="btn btn-md"
                to="/grid"
            >
                <i className="fas fa-th" title="Grid View"></i>
            </Link>
        </div>
        <CourseTableComponent courses={courses}
            deleteCourse={deleteCourse}
            updateCourse={updateCourse}
        />
    </div>

export default CourseListView