import { useGET } from '../useHttp';

const useStudentAssignmentsForStudent = (courseId, studentId) => {
    const [assignments, error, reload] = useGET({
        path: `/api/teacher/courses/${courseId}/student/${studentId}/assignments`,
        tag: `COURSE_STATISTICS_OR_ASSIGNMENTS_${courseId}_FOR_STUDENT_${studentId}`,
    });

    return [assignments || [], error, reload];
};
export default useStudentAssignmentsForStudent;
