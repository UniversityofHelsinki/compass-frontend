import React from 'react';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';
import './PieChart.css'; // Ensure CSS path is correct

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384'];

const renderPieChart = (data, index) => {
    console.log('Rendering Pie Chart - Index:', index);
    console.log('Data:', data);

    if (!data || !Array.isArray(data)) {
        return null; // Return nothing if data is undefined or not an array
    }

    return (
        <PieChart key={`pie-${index}`} width={450} height={450}>
            {' '}
            {/* Increased width and height */}
            <Pie
                data={data}
                cx={200}
                cy={200}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
                label={({ name, value }) => `${Math.round(value)}%`} // Display name and value together
            >
                {data.map((entry, idx) => (
                    <Cell key={`cell-${index}-${idx}`} fill={COLORS[idx % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip formatter={(value, name) => `${name}: ${Math.round(value)}%`} /> // Tooltip to
            show name and value
            <Legend />
        </PieChart>
    );
};

const PieCharts = ({ data }) => {
    console.log('PieCharts Component Data:', data);

    if (!data || !Array.isArray(data) || data.length === 0) {
        return null; // Return nothing if data is undefined, not an array, or empty
    }

    return (
        <div className="pie-charts-container">
            {' '}
            {/* Flex container to align items horizontally */}
            {data.map((assignment, index) => (
                <div
                    className="pie-chart-item"
                    key={`assignment-${assignment.assignmentId}-${index}`}
                >
                    <h3>
                        {assignment.assignmentTopic} (Answers: {assignment.answerCount})
                    </h3>{' '}
                    {/* Display topic and answer count */}
                    {renderPieChart(assignment.data, index)}
                </div>
            ))}
        </div>
    );
};

export default PieCharts;
