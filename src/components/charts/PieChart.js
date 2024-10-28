import React from 'react';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384'];

const renderPieChart = (data, index) => {
    // Debug logging the data
    console.log('Rendering Pie Chart - Index:', index);
    console.log('Data:', data);

    if (!data || !Array.isArray(data)) {
        return null; // Return nothing if data is undefined or not an array
    }

    return (
        <PieChart key={`pie-${index}`} width={400} height={400}>
            <Pie
                data={data}
                cx={200}
                cy={200}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
                label={({ name, value }) => `${name}: ${Math.round(value)}%`} // Display name and value together
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
    if (!data || !Array.isArray(data)) {
        return null; // Return nothing if data is undefined or not an array
    }

    return (
        <div>
            {data.map((assignment, index) => (
                <div key={`assignment-${assignment.name}-${index}`}>
                    <h3>{assignment.name}</h3>
                    {renderPieChart(assignment.data, index)}
                </div>
            ))}
        </div>
    );
};

export default PieCharts;
