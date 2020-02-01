import React from "react"
import "./course-table-view.css"

const TableViewEachRow = ({key, course, deleteCourse}) =>
    <tr>
      <td className="vp-cs5610-title-column-width">
        <i className="fas fa-book mr-2"></i>
        <a href="#" className="">
          {course.courseTitle}
        </a>
      </td>
      <td className="d-sm-table-cell d-none vp-cs5610-owner-column-width">Me</td>
      <td className="d-md-table-cell d-none">
        {course.dateModified}
      </td>
      <td className="vp-cs5610-modified-column-width">
        <button className="ml-2 mt-2 btn btn-danger"
                onClick={() => deleteCourse(course._id)}>
          <i className="fas fa-trash-alt"></i>
        </button>
        <button className="ml-2 mt-2 btn btn-warning">
          <i className="fas fa-edit"></i>
        </button>
      </td>
    </tr>

export default TableViewEachRow