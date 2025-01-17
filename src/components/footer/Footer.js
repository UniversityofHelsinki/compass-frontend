import React from 'react';
import './Footer.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HyLogo from '../utilities/HyLogo';
import ContactDetails from './ContactDetails';
import FooterLinks from './FooterLinks';
import Colors from '../utilities/HyColors';

const Footer = () => {
    return (
        <Container>
            <Row>
                <Col className="text-start footer-hy-logo col-md-1">
                    <HyLogo fill={Colors.white} />
                </Col>
                <Col className="col-md-3">
                    <ContactDetails />
                </Col>
                <Col className="col-md-3">
                    <FooterLinks />
                </Col>
            </Row>
        </Container>
    );
};

Footer.propTypes = {};

export default Footer;
