import React from "react";
import GridViewEachIcon from "./GridViewEachIcon"

const CourseGridViewComponent = ({courses, deleteCourse, updateCourse}) =>
    <div className="container-fluid">
      <div className="row w-100 pl-4">
        {
          courses.map(function (course) {
            return <GridViewEachIcon key={course._id}
                                     course={course}
                                     deleteCourse={deleteCourse}
                                     updateCourse={updateCourse}
            />
          })
        }
      </div>
    </div>

export default CourseGridViewComponent