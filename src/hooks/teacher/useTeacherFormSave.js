import { usePOST } from "../useHttp";

const useTeacherFormSave = () => {
  const post = usePOST({
    path: `/api/teacher/courses`,
    invalidates: ['TEACHER_COURSES']
  });

  return post;
};

export default useTeacherFormSave;
