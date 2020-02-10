const FIND_COURSE_FROM_COURSE_ID = "FIND_COURSE_FROM_COURSE_ID"

export const findCourseDetails = (course) => ({
  type: FIND_COURSE_FROM_COURSE_ID,
  course: course
});

export default {
  FIND_COURSE_FROM_COURSE_ID
}