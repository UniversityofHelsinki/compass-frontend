import { useDispatch, useSelector } from "react-redux";

const COMPASS_BACKEND_SERVER = process.env.REACT_APP_COMPASS_BACKEND_SERVER || '';

const getUser = async () => {
    const URL = `${COMPASS_BACKEND_SERVER}/api/user`;
    try {
        const response = await fetch(URL);
        if (response.ok) {
            return await response.json();
        } else if (response.status === 401) {
            console.log('401 Unauthorized: Returning null user.');
            return null; // Handle 401 by returning null user
        } else if (response.status === 403) {
            console.log('403 Forbidden: Access denied.');
            return null; // Handle 403 by returning null user
        } else {
            throw new Error(`Unexpected status code ${response.status} from ${URL}`);
        }
    } catch (error) {
        console.error(`Error occurred while fetching user from ${URL}`, error);
        throw new Error(`Error occurred while fetching user from ${URL}`, {
            cause: error
        });
    }
};

const logout = (url = "/Shibboleth.sso/Logout") => {
    window.location.replace(url);
};

const useUser = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.users.user);

    const loadUser = async () => {
        dispatch({ type: 'SET_LOADING_USER', payload: true });
        try {
            const userData = await getUser();
            dispatch({ type: 'SET_USER', payload: userData });
        } catch (error) {
            console.error("Failed to load user:", error);
        } finally {
            dispatch({ type: 'SET_LOADING_USER', payload: false });
        }
    };

    return [user, loadUser, logout];
};

export default useUser;
