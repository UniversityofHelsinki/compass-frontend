import { useGET } from './useHttp';

const useGetSignature = (id) => {
    const [value, fetchError, reload] = useGET({
        path: `/api/getUrlSignature/${id}`,
        tag: `signature-${id}`,
    });

    if (value === null) {
        reload();
    }
    return [value];
};
export default useGetSignature;
