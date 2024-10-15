import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGET } from "./useHttp";
import useUser from "./useUser";

const useTeacherCourse = (id) => {
  const [user] = useUser();
  const dispatch = useDispatch();
  const course = useSelector(state => state.teacher.course);
  const [response, error] = useGET({
    path: `/api/teacher/courses/${user.eppn}/${id}`,
    tag: `TEACHER_COURSE_${id}`
  });

  useEffect(() => {
    if (response !== course) {
      dispatch({
        type: 'SET_TEACHER_COURSE',
        payload: response
      });
    }
  }, [response, course]);

  return [course, error];
  
};

export default useTeacherCourse;
