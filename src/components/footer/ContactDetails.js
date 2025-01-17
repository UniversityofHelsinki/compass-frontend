import React from 'react';
import './ContactDetails.css';
import { useTranslation } from 'react-i18next';

const ContactDetails = () => {
    const { t } = useTranslation();
    return (
        <>
            <p>
                <strong>{t('footer_hy')}</strong>
            </p>
            <p>
                {t('footer_hy_address_line_1')}
                <br />
                {t('footer_hy_address_line_2')}
            </p>
            <p>{t('footer_hy_phone_switchboard')}</p>
        </>
    );
};

ContactDetails.propTypes = {};

export default ContactDetails;
