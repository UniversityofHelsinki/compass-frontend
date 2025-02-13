import { usePUT } from '../useHttp';
import message from '../../form/Message';

const useUserCourseUpdate = () => {
    let style = '';
    let message = '';

    const put = usePUT({
        path: `/api/student/updateResearchAuthorization`,
        invalidates: ['USER_COURSE'],
    });

    const updateUserCourse = async (userCourse) => {
        const response = await put({ userCourse });
        if (response.status === 200) {
            style = 'neutral';
            const data = await response.json();
            if (data.message) {
                message = data.message;
            } else {
                message = 'student_user_course_message';
            }
        } else {
            style = 'warning';
            message = 'student_user_course_err_message';
        }
        return [message, style];
    };

    return [updateUserCourse];
};

export default useUserCourseUpdate;
