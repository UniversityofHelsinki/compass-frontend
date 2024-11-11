import React from 'react';
import Languages from './Languages';
import Logo from './Logo';
import User from './User';
import { useTranslation } from 'react-i18next';
import './Header.css';
import Navigation from './navigation/Navigation';
import { useAuth } from '../../AuthContext';

const Header = () => {
    const { t } = useTranslation();
    const {
        user: { isTeacher },
    } = useAuth();

    return (
        <div className="header">
            <div className="header-left">
                <div className="header-logo">
                    <Logo />
                </div>
            </div>
            <div className="header-center">
                <div className="header-navigation">{<Navigation isTeacher={isTeacher} />}</div>
            </div>
            <div className="header-right">
                <Languages />
                <User />
            </div>
        </div>
    );
};

Header.propTypes = {};

export default Header;
