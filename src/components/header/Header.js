import React from 'react';
import Languages from './Languages';
import Logo from './Logo';
import User from './User';
import './Header.css';
import Navigation from './navigation/Navigation';
import { useAuth } from '../../AuthContext';
import { Col, Container, Row } from 'react-bootstrap';

const Header = () => {
    const {
        user: { isTeacher },
    } = useAuth();

    return (
        <div className="header">
            <div className="header-left">
                <Logo isTeacher={isTeacher} />
            </div>
            <div className="header-center">
                <Navigation isTeacher={isTeacher} />
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
