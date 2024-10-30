import React, { useState, useMemo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import useAssignmentAnswers from '../../hooks/teacher/useAssignmentAnswers';
import { ReactComponent as AscendingIcon } from '../utilities/icons/arrow-up.svg'; // Adjust the path as necessary
import { ReactComponent as DescendingIcon } from '../utilities/icons/arrow-down.svg';
import './TableData.css'; // Ensure this CSS file is correctly referenced

const TableData = ({ assignmentId }) => {
    // Default sorting by 'user_name' in ascending order
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

    const getSortedClass = (key, direction) => {
        return sortConfig.key === key && sortConfig.direction === direction ? 'sorted' : '';
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
                                        Name
                                        <AscendingIcon
                                            className={`sort-icon ${getSortedClass('user_name', 'asc')}`}
                                        />
                                        <DescendingIcon
                                            className={`sort-icon ${getSortedClass('user_name', 'desc')}`}
                                        />
                                    </th>
                                    <th
                                        onClick={() => handleSort('order_nbr')}
                                        className="sortable"
                                    >
                                        Number
                                        <AscendingIcon
                                            className={`sort-icon ${getSortedClass('order_nbr', 'asc')}`}
                                        />
                                        <DescendingIcon
                                            className={`sort-icon ${getSortedClass('order_nbr', 'desc')}`}
                                        />
                                    </th>
                                    <th onClick={() => handleSort('value')} className="sortable">
                                        Value
                                        <AscendingIcon
                                            className={`sort-icon ${getSortedClass('value', 'asc')}`}
                                        />
                                        <DescendingIcon
                                            className={`sort-icon ${getSortedClass('value', 'desc')}`}
                                        />
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
