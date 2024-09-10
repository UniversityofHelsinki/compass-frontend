import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './ButtonRow.css';
import { Col } from 'react-bootstrap';

const ButtonRow = ({ children }) => {

    return (
        <Container>
            <Row>
                <Col className="px-0">
                    {children}
                </Col>
            </Row>
        </Container>
    );
};

ButtonRow.propTypes = {
    children: PropTypes.node
};

export default ButtonRow;
