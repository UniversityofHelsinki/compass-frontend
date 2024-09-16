import React from 'react';
import PropTypes from 'prop-types';
import './CourseEveluationFooter.css';
import { useTranslation } from 'react-i18next';
import HyButton from '../utilities/HyButton';
import Notification from "../notes/Notification";

const CourseEveluationFooter = ({message, msgStyle}) => {
    const { t } = useTranslation();

    const submitButtonDisabled = false;

    return (
        <div className="cource-evaluation-footer">
            <Notification msg={t(message)} type={msgStyle}/>
            <div className="cource-evaluation-footer-buttons">
                <HyButton variant="secondary" onClick={null} type="submit" disabled={submitButtonDisabled}>
                    {t('answer_evaluation_form_footer_report')}
                </HyButton>
                <HyButton variant="primary" type="submit" disabled={submitButtonDisabled}>
                    {t('answer_evaluation_form_footer_close')}
                </HyButton>
            </div>
        </div>
    );
};

CourseEveluationFooter.propTypes = {
};

export default CourseEveluationFooter;
