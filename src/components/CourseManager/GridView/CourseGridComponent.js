import React from "react";
import CourseCard from "./CourseCardComponent"

const CourseGrid = ({courses, deleteCourse, updateCourse}) =>
    <div className="container-fluid">
      <div className="row w-100 pl-4">
        {
          courses.map(function (course) {
            return <CourseCard key={course._id}
                               course={course}
                               deleteCourse={deleteCourse}
                               updateCourse={updateCourse}
            />
          })
        }
      </div>
    </div>

export default CourseGrid