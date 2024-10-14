import {useEffect, useState} from "react";

const COMPASS_BACKEND_SERVER = process.env.REACT_APP_COMPASS_BACKEND_SERVER || '';

const getReleaseNotes = async () => {
    const URL = `${COMPASS_BACKEND_SERVER}/api/releaseNotes`;
    try {
        const response = await fetch(URL);
        if (response.ok) {
            return await response.json();
        }
        throw new Error(`Unexpected status code from ${URL}`);
    } catch (error) {
        console.error(error);
        throw new Error(`Error occurred while getting records ${URL}`, {
            cause: error
        });
    }
};

const useReleaseNotes = () => {
    const [releaseNotes, setReleaseNotes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getReleaseNotes();
            setReleaseNotes(data);
        };

        fetchData();
    }, []);

    return releaseNotes;
};

export default useReleaseNotes;
