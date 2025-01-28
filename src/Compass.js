import { Col, Container, Row } from 'react-bootstrap';
import Header from './components/header/Header';
import React from 'react';
import Footer from './components/footer/Footer';
import { useAuth } from './AuthContext';
import { Outlet } from 'react-router-dom';
import './Compass.css';
import NotificationProvider from './NotificationContext';
import NotificationArea from './components/utilities/NotificationArea';
import LogoImage from './components/logo/LogoImage';

const Compass = () => {
    const { loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>; // Render a loading spinner or similar component
    }

    return (
        <NotificationProvider>
            <Container className="root mx-0">
                <Row className="header-row mb-2">
                    <Col as="header">
                        <Header />
                    </Col>
                </Row>
                <Row className="root-main-row">
                    <Col as="main">
                        <div className="main-content">
                            <LogoImage />
                            <Outlet />
                            <div className="main-content-notification-area" aria-live="assertive">
                                <NotificationArea />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col as="footer" className="px-0">
                        <Footer />
                    </Col>
                </Row>
            </Container>
        </NotificationProvider>
    );
};

export default Compass;
