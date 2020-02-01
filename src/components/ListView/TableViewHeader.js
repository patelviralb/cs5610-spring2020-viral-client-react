import React from "react";
import "./course-table-view.css"

const TableViewHeader = () =>
    <thead>
      <tr>
        <th scope="col"
            className="vp-cs5610-title-column-width">Title
        </th>
        <th scope="col"
            className="d-sm-table-cell d-none vp-cs5610-owner-column-width">Owned
          By <i className="fas fa-fw fa-sort"></i></th>
        <th scope="col"
            className="d-md-table-cell d-none vp-cs5610-modified-column-width">
          Last Modified date
        </th>
        <th scope="col">

        </th>
      </tr>
    </thead>

export default TableViewHeader