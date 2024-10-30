import React from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import './PieChart.css';
import TableData from './TableData';

const COLORS = ['#FF8042', '#FFBB28', '#00A8E8', '#0088FE', '#00C49F'];

const getColorForValue = (value) => {
    if (value < 0 || value > 4) {
        throw new Error('Value must be between 0 and 4');
    }
    return COLORS[value];
};

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const renderCustomLegend = (value, entry) => {
    const { color } = entry;
    return (
        <div
            style={{
                backgroundColor: '#FFFFFF',
                color: '#000000',
                padding: '5px 10px',
                borderRadius: '3px',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '5px',
            }}
        >
            <span>{value}</span>
        </div>
    );
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
                        cx="50%"
                        cy="50%"
                        dataKey="value"
                        nameKey="name"
                        label={renderCustomizedLabel}
                        labelLine={false}
                    >
                        {data.map((entry, idx) => (
                            <Cell
                                key={`cell-${index}-${idx}`}
                                fill={getColorForValue(entry.name)}
                            />
                        ))}
                    </Pie>
                    <Legend formatter={renderCustomLegend} />
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
