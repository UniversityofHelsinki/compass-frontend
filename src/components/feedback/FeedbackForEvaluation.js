import React from 'react';
import { useTranslation } from 'react-i18next';
import FeedbackForEvaluationFooter from './FeedbackForEvaluationFooter';
import './FeedbackForEvaluation.css';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import useStudentFeedback from '../../hooks/useStudentFeedback';
import useAssignment from '../../hooks/useAssignment';
import TopBar from '../utilities/TopBar';
import { ReactComponent as Level0Icon } from '../utilities/icons/circle.svg';
import { ReactComponent as Level1Icon } from '../utilities/icons/circle-fill.svg';
import { ReactComponent as Level2Icon } from '../utilities/icons/three-dots-vertical.svg';
import { ReactComponent as Level3Icon } from '../utilities/icons/bounding-box-circles.svg';
import { ReactComponent as Level4Icon } from '../utilities/icons/diagram-3.svg';
import useGetSignature from '../../hooks/useGetSignature';

const Level = ({ level = 4 }) => {
    let IconComponent;

    switch (level) {
        case 0:
            IconComponent = Level0Icon;
            break;
        case 1:
            IconComponent = Level1Icon;
            break;
        case 2:
            IconComponent = Level2Icon;
            break;
        case 3:
            IconComponent = Level3Icon;
            break;
        case 4:
            IconComponent = Level4Icon;
            break;
        default:
            IconComponent = null;
            break;
    }
    return IconComponent ? <IconComponent /> : null;
};

const FeedbackForEvaluation = () => {
    const { answer, course, id } = useParams();
    const [signature] = useGetSignature(id);
    const backBtnHref = `/student/assignments/${id}?signature=${signature}`;
    const studentAnswer = useStudentFeedback(answer, course);
    const editable = useAssignment(answer);

    const { t } = useTranslation();
    let answer_evaluation_form_header = 'answer_evaluation_form_header_';
    let answer_evaluation_form_text = 'answer_evaluation_form_text_';
    let assignment_feedback_level = 'assignment_feedback_level_';
    const backBtnLabels = {
        primary: t('assignment_feedback_back_to_course'),
        secondary: t('assignment_feedback_back_to_course_secondary'),
    };

    if (
        studentAnswer === undefined ||
        studentAnswer === null ||
        studentAnswer.value === undefined
    ) {
        return <></>;
    }

    return (
        <div>
            <TopBar
                heading={studentAnswer.topic}
                showBackBtn={true}
                backBtnHref={backBtnHref}
                backBtnLabels={backBtnLabels}
            />
            <div className="m-3"></div>
            <div className="responsive-margins">
                <div className="feedback-for-evaluation-rows">
                    <div>{studentAnswer.title}</div>
                    <div className="m-2"></div>
                    <div>
                        <h4 className="feedback-for-evaluation-header">
                            {t(answer_evaluation_form_header + studentAnswer.order_nbr)}
                        </h4>
                    </div>
                    <div className="feedback-for-evaluation-info">
                        {t('answer_evaluation_form_info')}
                    </div>
                    <div>{t(answer_evaluation_form_text + studentAnswer.order_nbr)}</div>
                    <div className="feedback-for-evaluation">
                        <div>
                            <h5 className="student-response-header">
                                {t('assignment_feedback_answer')}
                            </h5>
                        </div>
                        <div className="feedback-for-evaluation-answer">{studentAnswer.value}</div>
                        <div>
                            <h5 className="feedback-for-evaluation-choice-header">
                                {t('assignment_feedback_choice')}
                            </h5>
                        </div>
                        <div className="feedback-for-evaluation-answer">
                            <Level level={studentAnswer.order_nbr} />
                            <span className="feedback-for-evaluation-order">
                                {t(assignment_feedback_level + studentAnswer.order_nbr)}
                            </span>
                        </div>
                    </div>
                    <FeedbackForEvaluationFooter
                        disabled={editable}
                        message={''}
                        assignment={studentAnswer.assignment_id}
                        answer={answer}
                        course={course}
                        id={id}
                        msgStyle={'assignment.msgStyle'}
                        studentAnswer={studentAnswer}
                    ></FeedbackForEvaluationFooter>
                </div>
            </div>
        </div>
    );
};

FeedbackForEvaluation.propTypes = {
    showBackBtn: PropTypes.bool,
};

export default FeedbackForEvaluation;
