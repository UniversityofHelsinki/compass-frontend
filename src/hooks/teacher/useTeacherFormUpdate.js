import { usePUT } from "../useHttp";

const useTeacherFormUpdate = (id) => {
  const put = usePUT({
    path: `/api/teacher/courses`,
    invalidates: ['TEACHER_COURSES', `TEACHER_COURSE_${id}`]
  });

  return put;
};

export default useTeacherFormUpdate;
