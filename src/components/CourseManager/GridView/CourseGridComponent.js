import React from "react";
import CourseCardComponent from "./CourseCardComponent"

const CourseGridComponent = ({courses, deleteCourse, updateCourse, showCourseEditorPage}) =>
    <div className="container-fluid">
      <div className="row w-100 pl-4">
        {
          courses.map(function (course) {
            return <CourseCardComponent key={course._id}
                                        course={course}
                                        deleteCourse={deleteCourse}
                                        updateCourse={updateCourse}
                                        showCourseEditorPage={showCourseEditorPage}
            />
          })
        }
      </div>
    </div>

export default CourseGridComponent