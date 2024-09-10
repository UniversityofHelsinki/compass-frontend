import React from 'react';
import PropTypes from 'prop-types';
import './CourseEveluationFooter.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import HyButton from '../utilities/HyButton';

const CourseEveluationFooter = () => {
    const { t } = useTranslation();

    const submitButtonDisabled = false;

    return (
        <div className="new-collection-footer">
            <div className="new-collection-footer-buttons">
                <HyButton variant="secondary" onClick={null}>
                    t('course_evaluation_form_footer_report')
                </HyButton>
                <HyButton variant="primary" type="submit" disabled={submitButtonDisabled}>
                    t('course_evaluation_form_footer_close')
                </HyButton>
            </div>
        </div>
    );
};

CourseEveluationFooter.propTypes = {
    onCancel: PropTypes.func,
    isValid: PropTypes.bool,
};

export default CourseEveluationFooter;
