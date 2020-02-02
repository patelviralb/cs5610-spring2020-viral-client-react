export const API_URL = "https://wbdv-generic-server.herokuapp.com/api/001374158/courses"

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