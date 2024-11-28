import { useGET } from './useHttp';

const useGetSignature = (id) => {
    const [value, fetchError, reload] = useGET({
        path: id ? `/api/getUrlSignature/${id}` : null,
        tag: id ? `signature-${id}` : 'signature-invalid',
    });

    if (id && value === null) {
        reload();
    }

    return [id ? value : null, fetchError, reload];
};

export default useGetSignature;
