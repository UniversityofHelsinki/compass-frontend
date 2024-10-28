import React from 'react';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384'];

const renderPieChart = (data, index) => (
    <PieChart key={index} width={400} height={400}>
        <Pie
            data={data}
            cx={200}
            cy={200}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
            label
        >
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
        <Tooltip />
        <Legend />
    </PieChart>
);

const PieCharts = ({ data }) => {
    // Process data to create chart for each assignment
    const groupedData = data.reduce((acc, curr) => {
        const { assignment_id, assignment_topic, average_score, answer_count } = curr;
        if (!acc[assignment_id]) {
            acc[assignment_id] = {
                id: assignment_id,
                name: assignment_topic,
                data: [],
            };
        }
        acc[assignment_id].data.push({
            name: `Assignment ${assignment_id}`,
            value: parseFloat(average_score),
            answerCount: parseInt(answer_count, 10),
        });

        return acc;
    }, {});

    // Convert grouped data object to an array for easier rendering
    const assignmentArray = Object.values(groupedData);

    return (
        <div>
            {assignmentArray.map((assignment, index) => (
                <div key={assignment.id}>
                    <h3>{assignment.name}</h3>
                    {renderPieChart(assignment.data, index)}
                </div>
            ))}
        </div>
    );
};

export default PieCharts;
