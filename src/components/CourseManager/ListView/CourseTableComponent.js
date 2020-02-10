import React from "react";
import "../../../styles/course-table-style-client.css"
import CourseTableHeader from "./CourseTableHeaderComponent"
import CourseTableRow from "./CourseTableRowComponent";

const CourseTable = ({courses, deleteCourse, updateCourse}) =>
    <div>
      <table className="table table-striped vp-cs5610-table-layout">
        <CourseTableHeader/>
        <tbody>
        {
          courses.map(function (course) {
            return <CourseTableRow key={course._id}
                                   course={course}
                                   deleteCourse={deleteCourse}
                                   updateCourse={updateCourse}
            />
          })
        }
        </tbody>
      </table>
    </div>

export default CourseTable