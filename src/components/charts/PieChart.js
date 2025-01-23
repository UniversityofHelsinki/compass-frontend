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

const getIcon = (entry, t) => {
    const style = HyColors.white;

    switch (parseInt(entry)) {
        case 0:
            return { icon: <Level0Icon fill={style} />, text: t('level_0') };
        case 1:
            return { icon: <Level1Icon fill={style} />, text: t('level_1') };
        case 2:
            return { icon: <Level2Icon fill={style} />, text: t('level_2') };
        case 3:
            return { icon: <Level3Icon fill={style} />, text: t('level_3') };
        case 4:
            return { icon: <Level4Icon fill={style} />, text: t('level_4') };
        default:
            return { icon: <Level0Icon fill={style} />, text: '' };
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

const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, name, percent, t }) => {
    // Position the icon slightly inside the edge of the pie slice
    const iconRadius = outerRadius - 20; // Slightly inside the outer edge
    const iconX = cx + iconRadius * Math.cos(-midAngle * RADIAN);
    const iconY = cy + iconRadius * Math.sin(-midAngle * RADIAN);

    // Position the percent text outside the pie slice
    const textRadius = outerRadius + 30; // Distance the text will be from the outer radius
    const textX = cx + textRadius * Math.cos(-midAngle * RADIAN);
    const textY = cy + textRadius * Math.sin(-midAngle * RADIAN);

    const percentage = `${(percent * 100).toFixed(0)}%`;
    const { icon, text } = getIcon(name, t);

    return (
        <g>
            <foreignObject x={iconX - 10} y={iconY - 10} width={30} height={30} aria-label={text}>
                {icon}
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

const renderPieChart = (data, index, t) => {
    if (!data || !Array.isArray(data)) {
        return null;
    }

    const customizedLabel = (props) => renderCustomizedLabel({ ...props, t });

    return (
        <div className="pie-chart-description" aria-description={t('pie_chart_aria_description')}>
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
                        label={customizedLabel}
                        labelLine={renderCustomLabelLine}
                    >
                        {data.map((entry, idx) => {
                            const { text } = getIcon(entry.name, t);

                            return (
                                <Cell
                                    key={`cell-${index}-${idx}`}
                                    fill={getColorForValue(entry.name)}
                                    //aria-label={text}
                                />
                            );
                        })}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

const PieCharts = ({ data, selectedChartIds, courseTitle, answersFeedbacks, reload }) => {
    const { t } = useTranslation();

    if (!data || !Array.isArray(data) || data.length === 0) {
        return null;
    }
    if (!answersFeedbacks || !Array.isArray(answersFeedbacks) || answersFeedbacks.length === 0) {
        return null;
    }

    const filteredData = data.filter((assignment) =>
        selectedChartIds.includes(assignment.assignmentId),
    );

    let feedbacksMap = new Map();

    answersFeedbacks.forEach((outerArray) => {
        outerArray.forEach((innerObject) => {
            const assignmentExists = filteredData.some(
                (assignment) => assignment.assignmentId === innerObject.assignment_id,
            );
            if (assignmentExists) {
                let mapData = feedbacksMap.get(innerObject.assignment_id) || new Set();
                // Converting object to a JSON string prevents duplicates based on assignment_id.
                mapData.add(JSON.stringify(innerObject));
                feedbacksMap.set(innerObject.assignment_id, mapData);
            }
        });
    });

    // Convert back to object form from JSON string.
    for (let [key, value] of feedbacksMap) {
        feedbacksMap.set(
            key,
            Array.from(value).map((entry) => JSON.parse(entry)),
        );
    }

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
                    {renderPieChart(assignment.data, index, t)}
                    <TableData
                        reload={reload}
                        assignmentId={assignment.assignmentId}
                        courseTitle={courseTitle}
                        assignmentTopic={assignment.assignmentTopic}
                        answersAndFeedbacks={feedbacksMap.get(assignment.assignmentId) || []}
                    />
                </div>
            ))}
        </div>
    );
};

export default PieCharts;
