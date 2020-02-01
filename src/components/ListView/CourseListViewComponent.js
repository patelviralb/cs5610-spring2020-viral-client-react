import React from "react";
import TableViewHeader from "./TableViewHeader"
import TableViewEachRow from "./TableViewEachRow";

const CourseListViewComponent = ({courses, deleteCourse}) =>
    <div>
      <table className="table table-striped">
        <TableViewHeader/>
        <tbody>
        {
          courses.map(function (course) {
            return <TableViewEachRow key={course._id} course={course} deleteCourse={deleteCourse} />
          })
        }
        </tbody>
      </table>
    </div>

export default CourseListViewComponent