import { Col, Container, Row } from 'react-bootstrap';
import Header from './components/header/Header';
import CourseList from './components/CourseList';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Footer from './components/footer/Footer';
import { useAuth } from './AuthContext';

const Compass = () => {
    const { user, loading } = useAuth();
    const { i18n } = useTranslation();

    useEffect(() => {
        if (loading) {
            console.log('Loading user data...');
        } else if (!user) {
            console.log('User not authenticated');
        }
    }, [user, loading]);

    if (loading) {
        return <div>Loading...</div>; // Render a loading spinner or similar component
    }

    if (!user) {
        return <div>User not authenticated</div>; // Development mode fallback
    }

    return (
        <Container className="root mx-0">
            <Row className="header-row mb-2">
                <Col as="header" role="banner" className="px-0">
                    <Header />
                </Col>
            </Row>
            <Row className="root-main-row">
                <CourseList />
            </Row>
            <Row>
                <Col as="footer" role="contentinfo" className="px-0">
                    <Footer />
                </Col>
            </Row>
        </Container>
    );
};

export default Compass;
