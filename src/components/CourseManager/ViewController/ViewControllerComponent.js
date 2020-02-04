import React from "react";

const ViewControllerComponent = ({listView, toggleView}) =>
    <div className="mr-3 pt-3 pb-3">
      <div className="col-12 d-flex justify-content-end">
        {
          !listView
          &&
          <button className="btn btn-md" onClick={toggleView}>
            <i className="fas fa-list"
               title="List View"></i>
          </button>
        }
        {
          listView
          &&
          <button className="btn btn-md" onClick={toggleView}>
            <i className="fas fa-th"
               title="Grid View"></i>
          </button>
        }
      </div>
    </div>

export default ViewControllerComponent