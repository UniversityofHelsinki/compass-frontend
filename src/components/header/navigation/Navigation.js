import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navigation.css';
import { useTranslation } from 'react-i18next';

const NavigationLink = ({ to }) => {
    const { t } = useTranslation();

    return (
        <div className="navigation-link">
            <NavLink to={to}>{t(`navigation_${to}`)}</NavLink>
            <div className="mt-1"></div>
            <div className="navigation-link-underline"></div>
        </div>
    );
};

const Navigation = ({ isTeacher }) => {
    const navigate = useNavigate();

    // Using useEffect to handle the redirection logic based on user type
    useEffect(() => {
        const path = window.location.pathname;
        if (!isTeacher && (path.startsWith('/teacher') || path === '/')) {
            navigate('/student/courses');
        } else if (path === '/') {
            navigate('/teacher/forms');
        }
    }, [isTeacher, navigate]);

    const links = isTeacher ? ['teacher/forms', 'student/courses'] : ['student/courses'];

    return (
        <nav className="navigation">
            <ol>
                {links.map((link) => (
                    <li key={link}>
                        <NavigationLink to={link} />
                    </li>
                ))}
            </ol>
        </nav>
    );
};

Navigation.propTypes = {
    isTeacher: PropTypes.bool.isRequired,
};

export default Navigation;
