import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const get = async () => {
    const response = [{
        value: "eka",
        label: "Kurssi1"
    },
    {
        value: "toka",
        label: "Kurssi2",
    },
    {
        value: "kolmas",
        label: "Kurssi3",
    }];
    try {
        return response;
        //}
    } catch (error) {
        return({ type: '', payload: error.message });
    }
    /*const URL = `${process.env.COMPASS_SERVER}/api/courses`;
    //const URL = `http://localhost:3010/api/users`;
    try {
        const response = await fetch(URL);
        if (response.ok) {
            return await response.json();
        }
        throw new Error(`Unexpected status code ${response.status} while fetching all courses from ${URL}`);
    } catch (error) {
        console.error(error.message);
    }*/
};

const useAllCourses = (load = false) => {
    const dispatch = useDispatch();
    const allCourses = useSelector((state) => state.courses.allCourses);

    useEffect(() => {
        if (load && !allCourses) {
            (async () => {
                dispatch({ type: 'SET_ALL_COURSES', payload: await get() })
            })();
        }
    }, [load, allCourses, dispatch]);

    const loading = load && !allCourses;

    const reload = () => dispatch({ type: 'SET_ALL_COURSES' });
    return [allCourses, loading, reload];
};

export default useAllCourses;
