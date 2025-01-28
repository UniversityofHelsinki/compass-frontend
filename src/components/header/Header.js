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
        <header className="header">
            <Container>
                <Row className="align-items-center">
                    <Col md={4} sm={12} className="header-left">
                        <Logo />
                    </Col>
                    <Col md={4} sm={6} className="header-center">
                        <Navigation isTeacher={isTeacher} />
                    </Col>
                    <Col md={4} sm={6} className="header-right">
                        <Languages />
                        <User />
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

Header.propTypes = {};

export default Header;
