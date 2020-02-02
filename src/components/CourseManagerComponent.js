import React from "react";
import {getDate} from "../common/constants"

import {
  createCourse,
  deleteCourse,
  findAllCourses, updateCourse
} from "../service/CourseService"

import CourseManagerHeader from "./Header/CourseManagerNavbar";
import CourseListViewComponent from "./ListView/CourseListViewComponent";
import CourseGridComponent from "./CourseGridComponent";
import ViewController from "./ViewController/ViewController";

class CourseManagerComponent extends React.Component {

  state = {
    listView: true,
    newCourseTitle: "",
    courses: []
  };

  componentDidMount = async() => {
    const allCourses = await findAllCourses();
    this.setState({
      courses: allCourses
    });
  };

  toggleView = () => {
    this.setState((previousState) => {
      if(this.state.listView) {
        return {
          listView: false
        }
      } else {
        return {
          listView: true
        }
      }
    });
  };

  addCourse = async(courseTitle) => {
    console.log(getDate())
    const newCourse = {
      "courseTitle": courseTitle,
      "dateModified": getDate()
    };
    await createCourse(newCourse);

    const allCourses = await findAllCourses();
    this.setState({
      courses: allCourses
    });
  };

  deleteCourse = async(courseToDeleteId) => {
    await deleteCourse(courseToDeleteId);

    const allCourses = await findAllCourses();
    this.setState({
      courses: allCourses
    });
  };

  updateCourse = async(courseToUpdate) => {
    console.log(courseToUpdate);
    await updateCourse(courseToUpdate._id,courseToUpdate);

    const allCourses = await findAllCourses();
    this.setState({
      courses: allCourses
    });
  };

  render() {
    return (
        <div>
          <CourseManagerHeader addCourse={this.addCourse} />
          <ViewController listView={this.state.listView} toggleView={this.toggleView} newCourseTitle={this.state.newCourseTitle} />
          {this.state.listView &&
              <CourseListViewComponent courses={this.state.courses}
                                       deleteCourse={this.deleteCourse}
                                       updateCourse={this.updateCourse}
              />
          }
          {!this.state.listView &&
            <CourseGridComponent deleteCourse={this.deleteCourse} />
          }
        </div>
    )
  }
}

export default CourseManagerComponent