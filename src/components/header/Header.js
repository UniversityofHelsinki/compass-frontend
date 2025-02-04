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
                    <Col md={4} xs={12} className="header-left">
                        <Logo />
                    </Col>
                    <Col md={4} xs={6} className="header-center mx-auto text-center">
                        <Navigation isTeacher={isTeacher} />
                    </Col>
                    <Col md={4} xs={6} className="header-right text-md-end text-center">
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
