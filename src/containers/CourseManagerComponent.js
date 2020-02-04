import React from "react";
import {getDate} from "../common/constants"

import {
  createCourse,
  deleteCourse,
  findAllCourses,
  updateCourse
} from "../service/CourseService"

import CourseManagerHeader from "../components/CourseManager/Header/CourseManagerNavbarComponent";
import CourseTableComponent
  from "../components/CourseManager/ListView/CourseTableComponent";
import CourseGridComponent
  from "../components/CourseManager/GridView/CourseGridComponent";
import ViewControllerComponent from "../components/CourseManager/ViewController/ViewControllerComponent";
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
    await updateCourse(courseToUpdate._id, courseToUpdate);

    const allCourses = await findAllCourses();
    this.setState({
      courses: allCourses
    });
  };

  showCourseEditorPage = () => {
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
              <ViewControllerComponent listView={this.state.listView}
                                       toggleView={this.toggleView}
                                       newCourseTitle={this.state.newCourseTitle}/>
              {this.state.listView &&
              <CourseTableComponent courses={this.state.courses}
                                    deleteCourse={this.deleteCourse}
                                    updateCourse={this.updateCourse}
                                    showCourseEditorPage={this.showCourseEditorPage}
              />
              }
              {!this.state.listView &&
              <CourseGridComponent courses={this.state.courses}
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