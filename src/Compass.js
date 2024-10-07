import { Col, Container, Row } from 'react-bootstrap';
import Header from './components/header/Header';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Footer from './components/footer/Footer';
import { useAuth } from './AuthContext';
import { Outlet } from 'react-router-dom';
import './Compass.css';

const Compass = () => {
    const { user, loading } = useAuth();
    const { i18n } = useTranslation();
    const assignment_number = "Assignment 1";
    const course = "Ohjelmoinnin perusteet 2024"
    const backBtnLabels={
        primary: 'Back',
        secondary: ''
    };

    if (loading) {
        return <div>Loading...</div>; // Render a loading spinner or similar component
    }

    return (
      <Container className="root mx-0">
        <Row className="header-row mb-2">
          <Col as="header" role="banner" className="px-0">
            <Header />
          </Col>
        </Row>
        <Row>
          <Col role="main">
            <Outlet />
          </Col>
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
