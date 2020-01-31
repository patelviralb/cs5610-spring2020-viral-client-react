function CourseServiceClient() {
  this.createCourse = createCourse;
  this.findAllCourses = findAllCourses;
  this.findCourseById = findCourseById;
  this.updateCourse = updateCourse;
  this.deleteCourse = deleteCourse;

  this.url = 'https://wbdv-generic-server.herokuapp.com/api/001374158/courses';

  const self = this;

  function createCourse(course) {
    return fetch(self.url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(course)
    }).then(response => response.json())
  }

  function findAllCourses() {
    return fetch(self.url).then(response => response.json())
  }

  function findCourseById(id) {
    return fetch(`${self.url}/${id}`).then(response => response.json())
  }

  function updateCourse(id, course) {
    return fetch(`${self.url}/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(course)
    }).then(response => response.json())
  }

  function deleteCourse(id) {
    return fetch(`${self.url}/${id}`, {
      method: 'DELETE'
    }).then(response => response.json())
  }
}