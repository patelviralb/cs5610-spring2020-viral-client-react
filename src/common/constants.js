export const COURSE_API_URL = "https://wbdv-generic-server.herokuapp.com/api/001374158/courses"
export const MODULE_API_URL = "https://wbdv-generic-server.herokuapp.com/api/001374158/modules"
export const LESSON_API_URL = "https://wbdv-generic-server.herokuapp.com/api/001374158/lessons"
export const TOPIC_API_URL = "https://wbdv-generic-server.herokuapp.com/api/001374158/topics"

export const getDate = () => {
  const currentDateObject = new Date();
  let currentMonth = currentDateObject.getMonth() + 1;
  let currentDate = currentDateObject.getDate();
  let currentYear = currentDateObject.getFullYear();

  if(currentMonth <= 9) {
    currentMonth = "0" + currentMonth;
  }

  if(currentDate <= 9) {
    currentDate = "0" + currentDate;
  }

  return currentYear + "-" + currentMonth + "-" + currentDate;
};