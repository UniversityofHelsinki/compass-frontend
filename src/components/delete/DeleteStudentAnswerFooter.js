import React from 'react';
import PropTypes from 'prop-types';
import './DeleteStudentAnswerFooter.css';
import { useTranslation } from 'react-i18next';
import HyButton from '../utilities/HyButton';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DeleteStudentAnswerFooter = ({ disabled, answer, course, id, deleteAnswer }) => {
    const { t } = useTranslation();

    return (
        <Container>
            <div className="delete-student-answer-footer">
                <div className="delete-student-answer-footer-buttons">
                    <Link to={`/student/feedback/${answer}/${course}/${id}`}>
                        <HyButton variant="primary" type="submit" disabled={disabled}>
                            {t('assignment_answer_do_not_remove')}
                        </HyButton>
                    </Link>
                    <Link to={`/student/assignments/${answer}/${course}/${id}`}>
                        <HyButton
                            variant="danger"
                            type="submit"
                            onClick={deleteAnswer}
                            disabled={disabled}
                        >
                            {t('assignment_answer_remove')}
                        </HyButton>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

DeleteStudentAnswerFooter.propTypes = {
    disabled: PropTypes.bool,
    answer: PropTypes.number,
    course: PropTypes.string,
    id: PropTypes.number,
    deleteAnswer: PropTypes.func,
};

export default DeleteStudentAnswerFooter;
