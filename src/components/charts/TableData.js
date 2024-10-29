import React from 'react';
import useAssignmentAnswers from '../../hooks/teacher/useAssignmentAnswers';

const TableData = ({ assignmentId }) => {
    const { answers, loading, error } = useAssignmentAnswers(assignmentId);

    console.log(`Rendering TableData for assignmentId: ${assignmentId}`);
    console.log(`Answers for assignmentId ${assignmentId}:`, answers);

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
        <table className="pie-chart-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {answers.map((entry, index) => (
                    <tr key={`row-${index}`}>
                        <td>{entry.user_name}</td>
                        <td>{entry.order_nbr}</td>
                        <td>{entry.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableData;
