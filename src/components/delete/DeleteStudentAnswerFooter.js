import React from 'react';
import PropTypes from 'prop-types';
import './DeleteStudentAnswerFooter.css';
import { useTranslation } from 'react-i18next';
import HyButton from '../utilities/HyButton';
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const DeleteStudentAnswerFooter = ({disabled, assignment, course, deleteAnswer}) => {
    const { t } = useTranslation();
    let answer = assignment;

    return (
        <Container>
            <div className="delete-student-answer-footer">
                <div className="delete-student-answer-footer-buttons">
                    <Link to={`/student/feedback/${answer}/${course}`} >
                        <HyButton variant="primary" onClick={null} type="submit" disabled={disabled}>
                            {t('assignment_answer_do_not_remove')}
                        </HyButton>
                    </Link>
                    <Link to={`/student/assignments/${assignment}`} >
                        <HyButton variant="primary" type="submit" onClick={deleteAnswer} disabled={disabled}>
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
    assignment: PropTypes.string,
    deleteAnswer: PropTypes.func
};

export default DeleteStudentAnswerFooter;
