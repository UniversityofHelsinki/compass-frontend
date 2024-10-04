import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const getUserAnswersForCourse = async (course_id) => {
    const URL = `${process.env.REACT_APP_COMPASS_BACKEND_SERVER}/api/getUserAnswersForCourseId/${course_id}`;
    try {
        const response = await fetch(URL);
        if (response.ok) {
            return await response.json();
        }
        throw new Error(`Unexpected status code from ${URL}`, {
            cause: { status: response.status }
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const useUserAnswersForCourse = (load = false) => {
    const dispatch = useDispatch();
    const userCourseAnswers = useSelector(
        (state) => {
            return state.userCourseAnswers.userCourseAnswers
        }
    );

    useEffect(() => {
        if (load) {
            (async () => {
                const getUserCourseAnswers = await getUserAnswersForCourse();
                if (getUserCourseAnswers) {
                    dispatch({
                        type: 'GET_USER_ANSWERS_SUCCESS',
                        payload: getUserCourseAnswers,
                    });
                }
            })();
        }
    }, [load, dispatch]);

    const reload = () => {
        dispatch({type: 'GET_USER_ANSWERS_SUCCESS'});
    };

    const loading = !userCourseAnswers;
    return [userCourseAnswers, loading, reload];
};

export default useUserAnswersForCourse;