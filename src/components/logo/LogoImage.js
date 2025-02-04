import React from 'react';
import './LogoImage.css';
import { useTranslation } from 'react-i18next';

const LogoImage = () => {
    const { t } = useTranslation();
    return (
        <img
            src="/compass-logo.png"
            alt={t('reflection_compass_logo_alt_text')}
            className="compass-logo"
        />
    );
};
export default LogoImage;
