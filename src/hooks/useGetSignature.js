import { useGET } from './useHttp';
import { useEffect, useState } from 'react';

const useGetSignature = (id) => {
    //const [signature, setSignature] = useState(null);
    //const [shouldFetch, setShouldFetch] = useState(false);

    const [value, fetchError, reload] = useGET({
        path: `/api/getUrlSignature/${id}`,
        tag: `signature-${id}`,
    });

    return [value];

    /*const [value, fetchError, reload] = useGET({
        path: `/api/getUrlSignature/${id}`,
        tag: `signature-${id}`,
    });

    useEffect(() => {
        if (shouldFetch) {
            reload();
            setShouldFetch(false);
        }
    }, [shouldFetch]);

    useEffect(() => {
        if (value) {
            setSignature(value);
        } else {
            setShouldFetch(true);
        }
    }, [value]);

    return [signature];*/
};

export default useGetSignature;
