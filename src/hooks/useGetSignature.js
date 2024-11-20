import { useGET } from './useHttp';

const useGetSignature = (course) => {
    const [value, fetchError, reload] = useGET({
        path: `/api/getUrlSignature/${course.id}`,
        tag: `signature-${course.id}`,
    });

    return [value];
};

export default useGetSignature;
