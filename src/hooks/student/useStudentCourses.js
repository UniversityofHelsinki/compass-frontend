import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGET } from "../useHttp";
import useUser from "../useUser";

const useStudentCourses = () => {
  const [response, error] = useGET({
    path: `/api/student/studentCourses`,
    tag: 'STUDENT_COURSES'
  });
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.student.courses);

  useEffect(() => {
    if (courses !== response) {
      dispatch({
        type: 'SET_STUDENT_COURSES',
        payload: response
      });
    }
  }, [response]);

  return [courses, error];
};

export default useStudentCourses;
