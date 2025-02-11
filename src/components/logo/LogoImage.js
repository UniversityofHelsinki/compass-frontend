import React from 'react';
import './LogoImage.css';
import { useTranslation } from 'react-i18next';

const LogoImage = () => {
    const { t } = useTranslation();
    return (
        <div className="logo-image">
            <img
                src="/compass-logo.png"
                alt={t('reflection_compass_logo_alt_text')}
                className="compass-logo"
            />
        </div>
    );
};
export default LogoImage;
