import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGET } from "../useHttp";
import useUser from "../useUser";

const useTeacherForms = () => {
  const [response, error] = useGET({
    path: `/api/teacher/courses`,
    tag: 'TEACHER_COURSES'
  });
  const teacherForms = useSelector(state => state.teacher.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    if (teacherForms !== response) {
      dispatch({
        type: 'SET_TEACHER_COURSES',
        payload: response
      });
    }
  }, [response]);

  return teacherForms;
};

export default useTeacherForms;
