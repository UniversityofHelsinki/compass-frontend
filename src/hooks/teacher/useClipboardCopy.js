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

    console.log(`/api/getUrlSignature/${courseId}`);

    // Use your custom useGET hook to fetch the signature
    const [value, fetchError, reload] = useGET({
        path: `/api/getUrlSignature/${courseId}`,
        tag: `signature-${courseId}`,
    });

    useEffect(() => {
        if (shouldFetch) {
            reload();
            setShouldFetch(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shouldFetch]);

    useEffect(() => {
        if (value) {
            setSignature(value); // Assuming backend returns signature as plain string
        }
        if (fetchError) {
            setError(fetchError);
        }
    }, [value, fetchError]);

    const clipboardCopy = async () => {
        setError(null); // Clear previous error messages
        setLoading(true);
        setShouldFetch(true); // Trigger data fetching

        if (signature) {
            try {
                const target = `${window.location.origin}/student/assignments/${id}?signature=${signature}`;
                // Copy the URL with the signature to the clipboard
                await navigator.clipboard.writeText(target);
                setNotification(t('teacher_forms_table_share_copy_to_clipboard'), 'success', true);
            } catch (error) {
                console.error('Error copying to clipboard:', error);
                setError(error.message);
                setNotification(t('error_copying_to_clipboard'), 'error', true);
            }
        } else {
            setError('Signature not available');
            setNotification(t('error_generating_signed_url'), 'error', true);
        }
        setLoading(false);
    };

    return { clipboardCopy, loading, error };
};

export default useClipboardCopy;
