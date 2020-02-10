import React from "react";
import { getDate } from "../common/constants"

import {
  createCourse,
  deleteCourse,
  findAllCourses,
  updateCourse
} from "../service/CourseService"

import CourseEditor
  from "../components/CourseEditor/CourseEditorComponent";
import CourseListView from "../components/CourseManager/ListView/CourseListViewComponent";
import CourseGridView from "../components/CourseManager/GridView/CourseGridViewComponent";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"

class CourseManager extends React.Component {

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
        <Router>
          <Route
            path="/table"
            exact={true}
            render={() =>
              <CourseListView
                addCourse={this.addCourse}
                newCourseTitle={this.state.newCourseTitle}
                courses={this.state.courses}
                deleteCourse={this.deleteCourse}
                updateCourse={this.updateCourse}
              />
            }
          />

          <Route
            path="/"
            exact={true}
            render={() =>
              <Redirect to="/table">
              </Redirect>
            }
          />

          <Route
            path="/grid"
            exact={true}
            render={() =>
              <CourseGridView
                addCourse={this.addCourse}
                newCourseTitle={this.state.newCourseTitle}
                courses={this.state.courses}
                deleteCourse={this.deleteCourse}
                updateCourse={this.updateCourse}
              />
            }
          />

          <Route
            path="/course/:courseID"
            exact={true}
            render={(props) =>
              <CourseEditor
                {...props}
              />
            }
          />
        </Router>
      </div>
    )
  }
}

export default CourseManager