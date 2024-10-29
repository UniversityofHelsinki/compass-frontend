import React from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import './PieChart.css';
import TableData from './TableData';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384'];

const renderLabel = ({ name, value }) => {
    const formattedValue = Math.round(value) === 100 ? '100%' : `${Math.round(value)}%`;
    return `${name}: ${formattedValue}`;
};

const renderPieChart = (data, index) => {
    if (!data || !Array.isArray(data)) {
        return null; // Return nothing if data is undefined or not an array
    }

    return (
        <div style={{ width: '100%', height: 500 }}>
            <ResponsiveContainer>
                <PieChart key={`pie-${index}`}>
                    <Pie
                        data={data}
                        cx="50%" // Center the Pie horizontally
                        cy="50%" // Center the Pie vertically
                        outerRadius={150} // Keep the outer radius as per design
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={renderLabel}
                        labelLine={false}
                    >
                        {data.map((entry, idx) => (
                            <Cell key={`cell-${index}-${idx}`} fill={COLORS[idx % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value, name) => `${name}: ${Math.round(value)}%`} />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

const PieCharts = ({ data, selectedChartIds }) => {
    if (!data || !Array.isArray(data) || data.length === 0) {
        return null; // Return nothing if data is undefined, not an array, or empty
    }

    const filteredData = data.filter((assignment) =>
        selectedChartIds.includes(assignment.assignmentId),
    );

    return (
        <div className="pie-charts-container">
            {filteredData.map((assignment, index) => (
                <div
                    className="pie-chart-item"
                    key={`assignment-${assignment.assignmentId}-${index}`}
                >
                    <h3>
                        {assignment.assignmentTopic} (Answers: {assignment.answerCount})
                    </h3>
                    {renderPieChart(assignment.data, index)}
                    <TableData assignmentId={assignment.assignmentId} />
                </div>
            ))}
        </div>
    );
};

export default PieCharts;
