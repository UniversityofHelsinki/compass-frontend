import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import './PieChart.css';
import TableData from './TableData';
import { useTranslation } from 'react-i18next';
import HyColors from '../utilities/HyColors';

import { ReactComponent as Level0Icon } from '../utilities/icons/circle.svg';
import { ReactComponent as Level1Icon } from '../utilities/icons/circle-fill.svg';
import { ReactComponent as Level2Icon } from '../utilities/icons/three-dots-vertical.svg';
import { ReactComponent as Level3Icon } from '../utilities/icons/bounding-box-circles.svg';
import { ReactComponent as Level4Icon } from '../utilities/icons/diagram-3.svg';

const COLORS = ['#8B0000', '#8B4513', '#00008B', '#4B0082', '#006400'];

const getIcon = (entry) => {
    const style = { fill: HyColors.white };

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

const getColorForValue = (value) => {
    if (value < 0 || value > 4) {
        throw new Error('Value must be between 0 and 4');
    }
    return COLORS[value];
};

const RADIAN = Math.PI / 180;

const renderCustomLabelLine = () => {
    return <line stroke={HyColors.white} />;
};

const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, name, percent }) => {
    // Position the icon slightly inside the edge of the pie slice
    const iconRadius = outerRadius - 20; // Slightly inside the outer edge
    const iconX = cx + iconRadius * Math.cos(-midAngle * RADIAN);
    const iconY = cy + iconRadius * Math.sin(-midAngle * RADIAN);

    // Position the percent text outside the pie slice
    const textRadius = outerRadius + 30; // Distance the text will be from the outer radius
    const textX = cx + textRadius * Math.cos(-midAngle * RADIAN);
    const textY = cy + textRadius * Math.sin(-midAngle * RADIAN);

    return (
        <g>
            <foreignObject x={iconX - 10} y={iconY - 10} width={30} height={30}>
                {getIcon(name)}
            </foreignObject>
            <text
                x={textX}
                y={textY}
                fill={HyColors.black}
                textAnchor={'middle'}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        </g>
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
                        startAngle={90}
                        endAngle={-270}
                        dataKey="value"
                        nameKey="name"
                        label={renderCustomizedLabel}
                        labelLine={renderCustomLabelLine}
                    >
                        {data.map((entry, idx) => (
                            <Cell
                                key={`cell-${index}-${idx}`}
                                fill={getColorForValue(entry.name)}
                            />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

const PieCharts = ({ data, selectedChartIds, courseTitle }) => {
    const { t } = useTranslation();

    if (!data || !Array.isArray(data) || data.length === 0) {
        return null;
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
                        {assignment.assignmentTopic} ({assignment.answerCount})
                    </h3>
                    {renderPieChart(assignment.data, index)}
                    <TableData
                        assignmentId={assignment.assignmentId}
                        courseTitle={courseTitle}
                        assignmentTopic={assignment.assignmentTopic}
                    />
                </div>
            ))}
        </div>
    );
};

export default PieCharts;
