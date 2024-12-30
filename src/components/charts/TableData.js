import React, { useState, useMemo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { ReactComponent as AscendingIcon } from '../utilities/icons/arrow-up.svg';
import { ReactComponent as DescendingIcon } from '../utilities/icons/arrow-down.svg';
import './TableData.css';
import HyColors from '../utilities/HyColors';
import { ReactComponent as Level0Icon } from '../utilities/icons/circle.svg';
import { ReactComponent as Level1Icon } from '../utilities/icons/circle-fill.svg';
import { ReactComponent as Level2Icon } from '../utilities/icons/three-dots-vertical.svg';
import { ReactComponent as Level3Icon } from '../utilities/icons/bounding-box-circles.svg';
import { ReactComponent as Level4Icon } from '../utilities/icons/diagram-3.svg';
import { t } from 'i18next';
import AssignmentAnswersDialog from '../dialog/AssignmentAnswersDialog';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const TableData = ({ assignmentId, courseTitle, assignmentTopic, answersAndFeedbacks, reload }) => {
    const { courseId } = useParams();

    const [sortConfig, setSortConfig] = useState({ key: 'answer_user_name', direction: 'asc' });
    const { t } = useTranslation();

    const sortedAnswers = useMemo(() => {
        if (!sortConfig.key || !answersAndFeedbacks) return answersAndFeedbacks;

        return [...answersAndFeedbacks].sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key])
                return sortConfig.direction === 'asc' ? -1 : 1;
            if (a[sortConfig.key] > b[sortConfig.key])
                return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }, [answersAndFeedbacks, sortConfig]);

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const getIndicator = (key) => {
        if (sortConfig.key === key) {
            return sortConfig.direction === 'asc' ? (
                <AscendingIcon className="sort-icon sorted" />
            ) : (
                <DescendingIcon className="sort-icon sorted" />
            );
        }
        return null;
    };

    const getIcon = (entry) => {
        const style = { fill: HyColors.black };

        switch (parseInt(entry)) {
            case 0:
                return <Level0Icon style={style} />;
            case 1:
                return <Level1Icon style={style} />;
            case 2:
                return <Level2Icon style={style} />;
            case 3:
                return <Level3Icon style={style} />;
            case 4:
                return <Level4Icon style={style} />;
            default:
                return <Level0Icon style={style} />;
        }
    };

    if (!answersAndFeedbacks || !Array.isArray(answersAndFeedbacks)) {
        return null;
    }

    return (
        <Container>
            <Row>
                <Col>
                    <div className="table-container">
                        <Table striped>
                            <thead>
                                <tr>
                                    <th
                                        onClick={() => handleSort('answer_user_name')}
                                        className="sortable"
                                    >
                                        {t('student')} {getIndicator('answer_user_name')}
                                    </th>
                                    <th
                                        onClick={() => handleSort('answer_order_nbr')}
                                        className="sortable"
                                    >
                                        {t('summary_level')} {getIndicator('answer_order_nbr')}
                                    </th>
                                    <th>{t('statistics_table_header_answers')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedAnswers.map((entry, index) => (
                                    <tr key={`row-${index}`}>
                                        <td>
                                            <Link
                                                to={`/teacher/summaryForStudent/${courseId}/${entry.answer_user_id}`}
                                            >
                                                {entry.name}
                                            </Link>
                                        </td>
                                        <td>{getIcon(entry.answer_order_nbr)}</td>
                                        <td>
                                            <AssignmentAnswersDialog
                                                reload={reload}
                                                id={courseId}
                                                answer_value={entry.answer_value}
                                                userName={entry.answer_user_name}
                                                courseTitle={courseTitle}
                                                assignmentTopic={assignmentTopic}
                                                order_nbr={entry.answer_order_nbr}
                                                course_id={entry?.course_id}
                                                assignment_id={entry?.assignment_id}
                                                feedback_value={entry?.feedback_value}
                                                feedback_order_nbr={entry?.feedback_order_nbr}
                                                feedback_id={entry?.feedbackid}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};
TableData.propTypes = {
    assignmentId: PropTypes.number.isRequired,
    courseTitle: PropTypes.string.isRequired,
    assignmentTopic: PropTypes.string.isRequired,
};

export default TableData;
