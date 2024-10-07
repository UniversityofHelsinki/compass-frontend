import React from 'react';
import { useTranslation } from 'react-i18next';
import HyColors from '../utilities/HyColors';
import HyLogo from '../utilities/HyLogo';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => {
    const { t } = useTranslation();

    return (
        <div className="logo">
            <HyLogo width={48} height={48} fill={HyColors.black} />
            <Link to="/">
                <h1>
                    {t('Reflection Compass')}
                </h1>
            </Link>
        </div>
    );
};

Logo.propTypes = {
};

export default Logo;
