import React from 'react';
import PropTypes from 'prop-types';
import './CourseEvaluationFooter.css';
import { useTranslation } from 'react-i18next';
import HyButton from '../utilities/HyButton';
import Notification from "../notes/Notification";
import { useNavigate } from 'react-router-dom';

const CourseEvaluationFooter = ({message, msgStyle}) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const submitButtonDisabled = false;

    const handleNavigation = () => {
        navigate('/reflectionSummary')
    }

    return (
        <div className="course-evaluation-footer">
            <Notification msg={t(message)} type={msgStyle}/>
            <div className="course-evaluation-footer-buttons">
                <HyButton variant="secondary" onClick={handleNavigation} type="submit" disabled={submitButtonDisabled}>
                    {t('answer_evaluation_form_footer_report')}
                </HyButton>
                <HyButton variant="primary" type="submit" disabled={submitButtonDisabled}>
                    {t('answer_evaluation_form_footer_close')}
                </HyButton>
            </div>
        </div>
    );
};

CourseEvaluationFooter.propTypes = {
};

export default CourseEvaluationFooter;
