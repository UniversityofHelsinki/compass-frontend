import { usePUT } from '../useHttp';

const useUserCourseUpdate = (course) => {
    const course_id = course?.course_id;

    const put = usePUT({
        path: `/api/student/updateResearchAuthorization`,
        invalidates: [`USER_COURSE_${course_id}`],
    });

    const updateUserCourse = async (userCourse) => {
        const response = await put({ userCourse });
        return response;
    };

    return [updateUserCourse];
};

export default useUserCourseUpdate;
