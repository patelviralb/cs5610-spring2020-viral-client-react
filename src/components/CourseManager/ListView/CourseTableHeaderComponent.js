import React from "react";
import "../../../styles/course-table-style-client.css"

const CourseTableHeader = () =>
    <thead>
      <tr>
        <th scope="col"
            className="vp-cs5610-title-column-width pl-5">Title
        </th>
        <th scope="col"
            className="d-sm-table-cell d-none vp-cs5610-owner-column-width">Owned
          By <i className="fas fa-fw fa-sort"></i></th>
        <th scope="col"
            className="d-md-table-cell d-none vp-cs5610-modified-column-width">
          Last Modified date
        </th>
        <th scope="col" className="">

        </th>
      </tr>
    </thead>

export default CourseTableHeader