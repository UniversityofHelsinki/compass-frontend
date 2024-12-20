import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import './SummaryTable.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import AssignmentAnswersDialog from '../dialog/AssignmentAnswersDialog';
import { ReactComponent as Level0Icon } from '../utilities/icons/circle.svg';
import { ReactComponent as Level1Icon } from '../utilities/icons/circle-fill.svg';
import { ReactComponent as Level2Icon } from '../utilities/icons/three-dots-vertical.svg';
import { ReactComponent as Level3Icon } from '../utilities/icons/bounding-box-circles.svg';
import { ReactComponent as Level4Icon } from '../utilities/icons/diagram-3.svg';
//import useTeacherFeedback from "../../hooks/teacher/useTeacherFeedback";

let assignment_feedback_level = 'assignment_feedback_level_';

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

const SummaryRow = ({ course, reload, assignment }) => {
    const { t } = useTranslation();
    const date = new Date(assignment?.answer_created);
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0'); //Months are zero based
    let year = date.getFullYear();
    return (
        <tr>
            <td>{`${day}.${month}.${year}`}</td>
            <td>{assignment?.assignment_topic}</td>
            <td>
                <Level level={assignment?.answer_order_nbr} />
                <span className="feedback-for-evaluation-order">
                    {t(assignment_feedback_level + assignment?.answer_order_nbr)}
                </span>
            </td>
            <td>
                {assignment?.feedback_order_nbr ? (
                    <>
                        <Level level={assignment.feedback_order_nbr} />
                        <span className="feedback-for-evaluation-order">
                            {t(`${assignment_feedback_level}${assignment.feedback_order_nbr}`)}
                        </span>
                    </>
                ) : (
                    t('summary_no_feedback')
                )}
            </td>
            <td>
                <AssignmentAnswersDialog
                    reload={reload}
                    id={course}
                    assignmentTopic={assignment?.assignment_topic}
                    value={assignment?.answer_value}
                    userName={assignment?.answer_user_name}
                    order_nbr={assignment?.answer_order_nbr}
                    courseTitle={assignment?.course_title}
                    course_id={assignment?.course_id}
                    assignment_id={assignment?.assignment_id}
                    feedback_value={assignment?.feedback_value}
                    feedback_order_nbr={assignment?.feedback_order_nbr}
                    feedback_id={assignment?.feedbackid}
                />
            </td>
        </tr>
    );
};

SummaryRow.propTypes = {
    assignment: PropTypes.shape({
        assignmentId: PropTypes.number.isRequired,
        assignment_topic: PropTypes.string.isRequired,
        answer_created: PropTypes.string,
        answer_order_nbr: PropTypes.number,
        answer_value: PropTypes.string,
        answer_user_name: PropTypes.string,
        course_title: PropTypes.string,
        /*answer: PropTypes.shape({
            created: PropTypes.string,
            order_nbr: PropTypes.number,
            value: PropTypes.string,
            user_name: PropTypes.string,
            title: PropTypes.string,
        }),*/
    }).isRequired,
};

const SummaryTable = ({ course, reload, assignments }) => {
    const { t } = useTranslation();

    return (
        <div className="summary-responsive-margins">
            <Container className="table-container">
                <Row className="table-row">
                    <Col className="table-col">
                        <Table aria-description={t('summary_table_aria_description')}>
                            <thead>
                                <tr>
                                    <th>{t('summary_time')}</th>
                                    <th>{t('summary_topic')}</th>
                                    <th>{t('summary_level')}</th>
                                    <th>{t('summary_feedback_header')}</th>
                                    <th>{t('summary_answers_header')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(assignments || []).map((assignment) => (
                                    <SummaryRow
                                        course={course}
                                        reload={reload}
                                        assignment={assignment}
                                        key={assignment.assignmentId}
                                    />
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

SummaryTable.propTypes = {
    assignments: PropTypes.arrayOf(
        PropTypes.shape({
            assignmentId: PropTypes.number.isRequired,
            assignment_topic: PropTypes.string.isRequired,
            answer_created: PropTypes.string,
            answer_order_nbr: PropTypes.number,
            answer_value: PropTypes.string,
            answer_user_name: PropTypes.string,
            course_title: PropTypes.string,
            /*answer: PropTypes.shape({
                created: PropTypes.string,
                order_nbr: PropTypes.number,
                value: PropTypes.string,
                user_name: PropTypes.string,
                title: PropTypes.string,
            }),*/
        }),
    ).isRequired,
};

export default SummaryTable;
