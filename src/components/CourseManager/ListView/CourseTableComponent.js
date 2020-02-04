import React from "react";
import "../../../styles/course-table-style-client.css"
import CourseTableHeaderComponent from "./CourseTableHeaderComponent"
import CourseTableRowComponent from "./CourseTableRowComponent";

const CourseTableComponent = ({courses, deleteCourse, updateCourse, showCourseEditorPage}) =>
    <div>
      <table className="table table-striped vp-cs5610-table-layout">
        <CourseTableHeaderComponent/>
        <tbody>
        {
          courses.map(function (course) {
            return <CourseTableRowComponent key={course._id}
                                            course={course}
                                            deleteCourse={deleteCourse}
                                            updateCourse={updateCourse}
                                            showCourseEditorPage={showCourseEditorPage}
            />
          })
        }
        </tbody>
      </table>
    </div>

export default CourseTableComponent