import React from 'react';
import PropTypes from 'prop-types';
import './DeleteStudentAnswerFooter.css';
import { useTranslation } from 'react-i18next';
import HyButton from '../utilities/HyButton';
import Notification from "../notes/Notification";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const DeleteStudentAnswerFooter = ({disabled, message, msgStyle, assignment}) => {
    const { t } = useTranslation();

    return (
        <Container>
            <div className="feedback-for-evaluation-footer">
                <Notification msg={t(message)} type={msgStyle}/>
                <div className="feedback-for-evaluation-footer-buttons">
                    <Link to={`/student/feedback/${assignment}`} >
                        <HyButton variant="primary" onClick={null} type="submit" disabled={disabled}>
                            {t('assignment_answer_do_not_remove')}
                        </HyButton>
                    </Link>
                    <Link to={`/student/assignments/${assignment}`} >
                        <HyButton variant="primary" type="submit" disabled={disabled}>
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
    message: PropTypes.string,
    msgStyle: PropTypes.string,
    assignment: PropTypes.string,
};

export default DeleteStudentAnswerFooter;
