import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const getUserAnswersForCourse = async (course_id) => {
    return []
};

const useUserAnswersForCourse = (load = false) => {
    const dispatch = useDispatch();
    const userCourseAnswers = useSelector(
        (state) => {
            return state.addedAnswer.studentAnswers
        }
    );

    useEffect(() => {
        if (load) {
            (async () => {
                const getUserCourseAnswers = await getUserAnswersForCourse();
                if (getUserCourseAnswers) {
                    dispatch({
                        type: 'SET_STUDENT_ANSWERS',
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