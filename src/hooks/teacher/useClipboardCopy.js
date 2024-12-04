import { useState, useEffect } from 'react';
import { get, useGET } from '../useHttp';
import { useNotification } from '../../NotificationContext';
import { useTranslation } from 'react-i18next';

const useClipboardCopy = (id, courseId) => {
    const { t } = useTranslation();
    const { setNotification } = useNotification();

    const clipboardCopy = async () => {
        const signature = await get({
            path: `/api/getUrlSignature/${id}`,
            tag: `signature-${id}`,
        });

        if (signature.ok) {
            try {
                const target = `${window.location.origin}/student/assignments/${id}?signature=${signature.body}`;
                await navigator.clipboard.writeText(target);
                setNotification(t('teacher_forms_table_share_copy_to_clipboard'), 'success', true);
            } catch (error) {
                setError(error.message);
                setNotification(t('error_copying_to_clipboard'), 'error', true);
            }
        } else {
            setNotification(t('error_generating_signed_url'), 'error', true);
        }
    };

    return { clipboardCopy };
};

export default useClipboardCopy;
