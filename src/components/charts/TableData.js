import React, { useState, useMemo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import useAssignmentAnswers from '../../hooks/teacher/useAssignmentAnswers';
import { ReactComponent as AscendingIcon } from '../utilities/icons/arrow-up.svg';
import { ReactComponent as DescendingIcon } from '../utilities/icons/arrow-down.svg';
import './TableData.css';
import AssignmentAnswersDialog from '../dialog/AssignmentAnswersDialog';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const TableData = ({ assignmentId, courseTitle, assignmentTopic }) => {
    const { courseId } = useParams();
    const { answers, loading, error } = useAssignmentAnswers(assignmentId);
    const [sortConfig, setSortConfig] = useState({ key: 'user_name', direction: 'asc' });
    const { t } = useTranslation();

    const sortedAnswers = useMemo(() => {
        if (!sortConfig.key || !answers) return answers;

        return [...answers].sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key])
                return sortConfig.direction === 'asc' ? -1 : 1;
            if (a[sortConfig.key] > b[sortConfig.key])
                return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }, [answers, sortConfig]);

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

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (!answers || !Array.isArray(answers)) {
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
                                        onClick={() => handleSort('user_name')}
                                        className="sortable"
                                    >
                                        Name {getIndicator('user_name')}
                                    </th>
                                    <th
                                        onClick={() => handleSort('order_nbr')}
                                        className="sortable"
                                    >
                                        Number {getIndicator('order_nbr')}
                                    </th>
                                    <th>{t('statistics_table_header_answers')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedAnswers.map((entry, index) => (
                                    <tr key={`row-${index}`}>
                                        <td>{entry.user_name}</td>
                                        <td>{entry.order_nbr}</td>
                                        <td>
                                            <AssignmentAnswersDialog
                                                value={entry.value}
                                                userName={entry.user_name}
                                                courseTitle={courseTitle}
                                                assignmentTopic={assignmentTopic}
                                                order_nbr={entry.order_nbr}
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

export default TableData;
