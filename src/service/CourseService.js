import {COURSE_API_URL} from "../common/constants"

export const createCourse = (course) => {
  return fetch(COURSE_API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(course)
  }).then(response => response.json())
};

export const findAllCourses = () => {
  return fetch(COURSE_API_URL).then(response => response.json())
};

export const findCourseById = (id) => {
  return fetch(`${COURSE_API_URL}/${id}`).then(response => response.json())
};

export const updateCourse = (id, course) => {
  return fetch(`${COURSE_API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(course)
  }).then(response => response.json())
};

export const deleteCourse = (id) => {
  return fetch(`${COURSE_API_URL}/${id}`, {
    method: 'DELETE'
  }).then(response => response.json())
};