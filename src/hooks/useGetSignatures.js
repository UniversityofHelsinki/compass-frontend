import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGET } from './useHttp';

const useGetSignatures = (courses) => {
    const dispatch = useDispatch();
    const signatures = useSelector((state) => state.signatures.signatures);
    const courseParam = courses?.join(',') || '';
    const [response, error, reload] = useGET({
        path: `/api/signatures/${encodeURIComponent(courseParam)}`,
        tag: `signatures`,
        fetchOnlyIf: courses?.length > 0,
    });

    useEffect(() => {
        if (response !== signatures) {
            dispatch({
                type: 'SET_SIGNATURES',
                payload: response,
            });
        }
    }, [response, signatures]);

    return [signatures, error];
};

export default useGetSignatures;
