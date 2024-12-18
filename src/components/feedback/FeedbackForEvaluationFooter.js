import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackForEvaluationFooter.css';
import { useTranslation } from 'react-i18next';
import HyButton from '../utilities/HyButton';
import Notification from '../notes/Notification';
import { Link } from 'react-router-dom';

const FeedbackForEvaluationFooter = ({
    disabled,
    message,
    msgStyle,
    answer,
    course,
    id,
    studentAnswer,
}) => {
    const { t } = useTranslation();

    return (
        <div className="feedback-for-evaluation-footer">
            <Notification msg={t(message)} type={msgStyle} />
            <div className="feedback-for-evaluation-footer-buttons">
                <Link to={`/student/assignment/${answer}/${id}`}>
                    <HyButton
                        variant="primary"
                        onClick={null}
                        type="submit"
                        disabled={disabled !== 'valid'}
                    >
                        {t('assignment_feedback_edit')}
                    </HyButton>
                </Link>
                <Link
                    to={`/student/delete/${answer}/${id}`}
                    state={{ studentAnswer: { ...studentAnswer } }}
                >
                    <HyButton variant="primary" type="submit" disabled={disabled !== 'valid'}>
                        {t('assignment_feedback_remove')}
                    </HyButton>
                </Link>
                <Link to={`/student/courses/${course}/summary`}>
                    {t('assignment_feedback_reflection_summary')}
                </Link>
            </div>
        </div>
    );
};

FeedbackForEvaluationFooter.propTypes = {
    disabled: PropTypes.bool,
    course: PropTypes.string,
    message: PropTypes.string,
    msgStyle: PropTypes.string,
    answer: PropTypes.number,
    id: PropTypes.number,
    studentAnswer: PropTypes.object,
};

export default FeedbackForEvaluationFooter;
