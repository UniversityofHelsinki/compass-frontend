import { useGET } from './useHttp';

const useGetSignature = (id) => {
    const [value, fetchError, reload] = useGET({
        path: `/api/getUrlSignature/${id}`,
        tag: `signature-${id}`,
        fetchOnlyIf: Boolean(id),
    });

    return [value, fetchError, reload];
};

export default useGetSignature;
