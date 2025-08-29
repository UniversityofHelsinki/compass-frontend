import React from 'react';
import { useTranslation } from 'react-i18next';
import HyColors from '../utilities/HyColors';
import HyLogo from '../utilities/HyLogo';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = ({ isTeacher }) => {
    const { t } = useTranslation();

    const targets = {
        true: '/teacher/forms',
        false: '/student/courses',
    };

    return (
        <div className="logo">
            <HyLogo width={48} height={48} fill={HyColors.black} />
            <Link to={targets[Boolean(isTeacher)]}>
                <h1>{t('reflection_compass_hy_logo')}</h1>
            </Link>
        </div>
    );
};

Logo.propTypes = {};

export default Logo;
