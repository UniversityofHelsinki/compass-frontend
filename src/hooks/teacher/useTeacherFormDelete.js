import { useDELETE } from '../useHttp';

const useTeacherFormDelete = (id) => {
    const deleteFn = useDELETE({
        path: `/api/teacher/courses`,
        invalidates: ['TEACHER_COURSES', `TEACHER_COURSE_${id}`],
    });

    return deleteFn;
};

export default useTeacherFormDelete;
