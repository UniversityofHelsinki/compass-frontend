import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackForEvaluationFooter.css';
import { useTranslation } from 'react-i18next';
import HyButton from '../utilities/HyButton';
import Notification from "../notes/Notification";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const FeedbackForEvaluationFooter = ({disabled, message, msgStyle, assignment}) => {
    const { t } = useTranslation();

    const submitButtonDisabled = false;

    return (
        <Container>
        <div className="feedback-for-evaluation-footer">
            <Notification msg={t(message)} type={msgStyle}/>
            <div className="feedback-for-evaluation-footer-buttons">
                <Link to={`/student/assignments/${assignment}`} >
                    <HyButton variant="primary" onClick={null} type="submit" disabled={disabled}>
                        {t('assignment_feedback_edit')}
                    </HyButton>
                </Link>
                <HyButton variant="primary" type="submit" disabled={disabled}>
                    {t('assignment_feedback_remove')}
                </HyButton>
                <HyButton variant="primary" type="submit" disabled={false}>
                    {t('assignment_feedback_back')}
                </HyButton>
            </div>
        </div>
        </Container>
    );
};

FeedbackForEvaluationFooter.propTypes = {
    disabled: PropTypes.bool,
    message: PropTypes.string,
    msgStyle: PropTypes.string,
    assignment: PropTypes.string,
};

export default FeedbackForEvaluationFooter;
