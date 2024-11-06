import { Col, Container, Row } from 'react-bootstrap';
import Header from './components/header/Header';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Footer from './components/footer/Footer';
import { useAuth } from './AuthContext';
import { Outlet } from 'react-router-dom';
import './Compass.css';
import NotificationProvider from './NotificationContext';
import NotificationArea from './components/utilities/NotificationArea';

const Compass = () => {
    const { user, loading } = useAuth();
    const { i18n } = useTranslation();

    if (loading) {
        return <div>Loading...</div>; // Render a loading spinner or similar component
    }

    return (
        <NotificationProvider>
            <Container className="root mx-0">
                <Row className="header-row mb-2">
                    <Col as="header" role="banner" className="px-0">
                        <Header />
                    </Col>
                </Row>
                <Row className="root-main-row">
                    <Col role="main">
                        <div className="main-content">
                            <Outlet />
                            <div className="main-content-notification-area" aria-live="assertive">
                                <NotificationArea />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col as="footer" role="contentinfo" className="px-0">
                        <Footer />
                    </Col>
                </Row>
            </Container>
        </NotificationProvider>
    );
};

export default Compass;
