import React from "react"
import CourseManagerHeader from "./Header/CourseManagerNavbarComponent";
import CourseTableComponent
  from "./ListView/CourseTableComponent";
import CourseGridComponent
  from "./GridView/CourseGridComponent";
import ViewControllerComponent from "./ViewController/ViewControllerComponent";

const CourseListView = ({addCourse, listView, toggleView, newCourseTitle, courses, deleteCourse, updateCourse}) =>
    <div>
        <CourseManagerHeader addCourse={addCourse} />
        <ViewControllerComponent listView={listView}
            toggleView={toggleView}
            newCourseTitle={newCourseTitle} />
        {listView &&
            <CourseTableComponent courses={courses}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
            />
        }
        {!listView &&
            <CourseGridComponent courses={courses}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
            />
        }
    </div>

export default CourseListView