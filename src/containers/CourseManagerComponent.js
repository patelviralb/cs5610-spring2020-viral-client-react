import React from "react";
import {getDate} from "../common/constants"

import {
  createCourse,
  deleteCourse,
  findAllCourses,
  updateCourse
} from "../service/CourseService"

import CourseManagerHeader from "../components/Header/CourseManagerNavbar";
import CourseListViewComponent
  from "../components/ListView/CourseListViewComponent";
import CourseGridViewComponent
  from "../components/GridView/CourseGridViewComponent";
import ViewController from "../components/ViewController/ViewController";
import CourseEditorComponent
  from "../components/CourseEditor/CourseEditorComponent";

class CourseManagerComponent extends React.Component {

  state = {
    listView: true,
    newCourseTitle: "",
    courses: [],
    showCourseEditor: false
  };

  componentDidMount = async () => {
    console.log(this.state.showCourseEditor)
    const allCourses = await findAllCourses();
    this.setState({
      courses: allCourses
    });
  };

  toggleView = () => {
    this.setState((previousState) => {
      if (this.state.listView) {
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

  addCourse = async (courseTitle) => {
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

  deleteCourse = async (courseToDeleteId) => {
    await deleteCourse(courseToDeleteId);

    const allCourses = await findAllCourses();
    this.setState({
      courses: allCourses
    });
  };

  updateCourse = async (courseToUpdate) => {
    console.log(courseToUpdate);
    await updateCourse(courseToUpdate._id, courseToUpdate);

    const allCourses = await findAllCourses();
    this.setState({
      courses: allCourses
    });
  };

  showCourseEditorPage = () => {
    console.log("I am Here");
    this.setState((previousState) => {
      if (this.state.showCourseEditor) {
        return {
          showCourseEditor: false
        }
      } else {
        return {
          showCourseEditor: true
        }
      }
    });
  };

  render() {
    return (
        <div>
          {
            !this.state.showCourseEditor
            &&
            <div>
              <CourseManagerHeader addCourse={this.addCourse}/>
              <ViewController listView={this.state.listView}
                              toggleView={this.toggleView}
                              newCourseTitle={this.state.newCourseTitle}/>
              {this.state.listView &&
              <CourseListViewComponent courses={this.state.courses}
                                       deleteCourse={this.deleteCourse}
                                       updateCourse={this.updateCourse}
                                       showCourseEditorPage={this.showCourseEditorPage}
              />
              }
              {!this.state.listView &&
              <CourseGridViewComponent courses={this.state.courses}
                                       deleteCourse={this.deleteCourse}
                                       updateCourse={this.updateCourse}
                                       showCourseEditorPage={this.showCourseEditorPage}
              />
              }
            </div>
          }
          {
            this.state.showCourseEditor
            &&
            <CourseEditorComponent
                showCourseEditorPage={this.showCourseEditorPage}
            />
          }
        </div>
    )
  }
}

export default CourseManagerComponent