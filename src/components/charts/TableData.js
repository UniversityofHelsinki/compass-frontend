import React, { useState, useMemo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import useAssignmentAnswers from '../../hooks/teacher/useAssignmentAnswers';
import { ReactComponent as AscendingIcon } from '../utilities/icons/arrow-up.svg'; // Adjust the path as necessary
import { ReactComponent as DescendingIcon } from '../utilities/icons/arrow-down.svg';
import './TableData.css';

const TableData = ({ assignmentId }) => {
    const [sortConfig, setSortConfig] = useState({ key: 'user_name', direction: 'asc' });

    const { answers, loading, error } = useAssignmentAnswers(assignmentId);

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
        return <p>Error: {error}</p>;
    }

    if (!answers || !Array.isArray(answers)) {
        return null; // Return nothing if data is undefined or not an array
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
                                    <th onClick={() => handleSort('value')} className="sortable">
                                        Value {getIndicator('value')}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedAnswers.map((entry, index) => (
                                    <tr key={`row-${index}`}>
                                        <td>{entry.user_name}</td>
                                        <td>{entry.order_nbr}</td>
                                        <td>{entry.value}</td>
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
