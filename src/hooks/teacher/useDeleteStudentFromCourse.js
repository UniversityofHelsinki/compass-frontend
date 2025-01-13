import { useDELETE } from '../useHttp';

const useDeleteStudentFromCourse = (course_id) => {
    const deleteStudent = useDELETE({
        path: `/api/teacher/deleteUserFromCourse`,
        invalidates: [`STUDENTS_IN_COURSE_${course_id}`],
    });

    return deleteStudent;
};

export default useDeleteStudentFromCourse;
