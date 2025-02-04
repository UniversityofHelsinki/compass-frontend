import './TopBar.css';
import BackButton, { propTypes as BackButtonPropTypes } from './BackButton';
import * as React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

const TopBar = ({ showBackBtn = false, backBtnLabels, backBtnHref = '', heading, children }) => {
    return (
        <Row className="top-bar">
            <Col className="top-bar-back-btn">
                {showBackBtn && <BackButton labels={backBtnLabels} href={backBtnHref} />}
            </Col>
            <Col as="h2" className="top-bar-heading">
                {heading}
            </Col>
            <Col className="top-bar-children">{children}</Col>
        </Row>
    );
};

export const propTypes = {
    children: PropTypes.node,
    showBackBtn: PropTypes.bool,
    backBtnLabels: BackButtonPropTypes.labels,
    heading: PropTypes.string,
};

TopBar.propTypes = propTypes;

export default TopBar;
