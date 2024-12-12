import React from 'react';
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

const SummaryRow = ({ assignment }) => {
    const { t } = useTranslation();
    const date = new Date(assignment.answer?.created);
    const formattedTime = date.toLocaleTimeString(['fi-FI'], {
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        <tr>
            <td>{formattedTime}</td>
            <td>{assignment?.topic}</td>
            <td>
                <Level level={assignment?.answer.order_nbr} />
                <span className="feedback-for-evaluation-order">
                    {t(assignment_feedback_level + assignment?.answer.order_nbr)}
                </span>
            </td>
            <td>
                <AssignmentAnswersDialog
                    assignmentTopic={assignment?.topic}
                    value={assignment?.answer?.value}
                    userName={assignment?.answer?.user_name}
                    order_nbr={assignment?.answer?.order_nbr}
                    courseTitle={assignment?.answer.title}
                />
            </td>
        </tr>
    );
};

SummaryRow.propTypes = {
    assignment: PropTypes.shape({
        id: PropTypes.number.isRequired,
        topic: PropTypes.string.isRequired,
        answer: PropTypes.shape({
            created: PropTypes.string,
            order_nbr: PropTypes.number,
            value: PropTypes.string,
            user_name: PropTypes.string,
            title: PropTypes.string,
        }),
    }).isRequired,
};

const SummaryTable = ({ assignments }) => {
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
                                    <th>{t('summary_answers_header')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(assignments || []).map((assignment) => (
                                    <SummaryRow assignment={assignment} key={assignment.id} />
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
            id: PropTypes.number.isRequired,
            topic: PropTypes.string.isRequired,
            answer: PropTypes.shape({
                created: PropTypes.string,
                order_nbr: PropTypes.number,
                value: PropTypes.string,
                user_name: PropTypes.string,
                title: PropTypes.string,
            }),
        }),
    ).isRequired,
};

export default SummaryTable;
