import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HyLogo from "../utilities/HyLogo";
import ContactDetails from './ContactDetails';
import FooterLinks from './FooterLinks';
import Colors from '../utilities/HyColors';

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col className="text-start footer-hy-logo col-md-1">
          <div>
            <HyLogo fill={Colors.white} />
          </div>
        </Col>
        <Col className="col-md-3">
          <ContactDetails />
        </Col>
        <Col>
          <FooterLinks />
        </Col>
      </Row>
    </Container>
  );
};

Footer.propTypes = {
};

export default Footer;
