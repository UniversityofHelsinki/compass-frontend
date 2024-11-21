import { useState, useEffect } from 'react';
import { useGET } from '../useHttp';
import { useNotification } from '../../NotificationContext';
import { useTranslation } from 'react-i18next';

const useClipboardCopy = (id, courseId) => {
    const { t } = useTranslation();
    const { setNotification } = useNotification();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [signature, setSignature] = useState(null);
    const [shouldFetch, setShouldFetch] = useState(false);

    const [value, fetchError, reload] = useGET({
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
        }
        if (fetchError) {
            setError(fetchError);
        }
    }, [value, fetchError]);

    const clipboardCopy = async () => {
        setError(null);
        setLoading(true);
        setShouldFetch(true);

        if (signature) {
            try {
                const target = `${window.location.origin}/student/assignments/${id}?signature=${signature}`;
                await navigator.clipboard.writeText(target);
                setNotification(t('teacher_forms_table_share_copy_to_clipboard'), 'success', true);
            } catch (error) {
                setError(error.message);
                setNotification(t('error_copying_to_clipboard'), 'error', true);
            }
        } else {
            setNotification(t('error_generating_signed_url'), 'error', true);
        }
        setLoading(false);
    };

    return { clipboardCopy, loading, error };
};

export default useClipboardCopy;
