import { usePUT } from '../useHttp';

const useUserCourseUpdate = (course) => {
    const course_id = course?.course_id;

    const put = usePUT({
        path: `/api/student/updateResearchAuthorization`,
        invalidates: [`USER_COURSE_${course_id}`],
    });

    const updateUserCourse = async (userCourse) => {
        const response = await put({ userCourse });
        if (!response.ok) {
            const resp = response;
            console.log('resp:', resp);
        }
        return response;
    };

    return [updateUserCourse];
};

export default useUserCourseUpdate;
