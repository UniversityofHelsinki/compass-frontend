import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useCourseStatistics from '../../hooks/teacher/useCourseStatistics';
import PieCharts from '../charts/PieChart';
import './CourseStatistics.css'; // Additional CSS for styling buttons, customize as per your needs

const CourseStatistics = () => {
    const { courseId } = useParams();
    const { courseStatistics, loading, error } = useCourseStatistics(courseId);
    const [selectedCharts, setSelectedCharts] = useState([]);

    useEffect(() => {
        if (Array.isArray(courseStatistics) && courseStatistics.length > 0) {
            const allChartIds = courseStatistics.map((stat) => stat.assignment_id);
            setSelectedCharts(allChartIds);
        }
    }, [courseStatistics]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error loading data: {error.message}</p>;
    }

    if (!Array.isArray(courseStatistics) || courseStatistics.length === 0) {
        return <p>No data available.</p>;
    }

    const groupedData = courseStatistics.reduce((acc, curr) => {
        const {
            assignment_id,
            assignment_topic,
            order_nbr,
            order_nbr_percentage,
            answer_count,
            start_date,
            end_date,
        } = curr;

        if (!acc[assignment_id]) {
            acc[assignment_id] = {
                assignmentId: assignment_id,
                assignmentTopic: assignment_topic,
                data: [],
                answerCount: answer_count,
                start_date: start_date,
                end_date: end_date,
            };
        }

        acc[assignment_id].data.push({
            name: `${order_nbr}`,
            value: parseFloat(order_nbr_percentage),
        });

        return acc;
    }, {});

    const chartData = Object.values(groupedData);

    const handleSelectChart = (assignmentId) => {
        setSelectedCharts((prev) =>
            prev.includes(assignmentId)
                ? prev.filter((id) => id !== assignmentId)
                : [...prev, assignmentId],
        );
    };

    return (
        <div>
            <h2>Course statistics for course: {courseId}</h2>
            <div className="chart-selection">
                <h3>Select which assignments to display</h3>
                {chartData.map((assignment) => (
                    <button
                        key={assignment.assignmentId}
                        className={`tag-button ${selectedCharts.includes(assignment.assignmentId) ? 'selected' : ''}`}
                        onClick={() => handleSelectChart(assignment.assignmentId)}
                    >
                        {assignment.assignmentTopic}
                    </button>
                ))}
            </div>
            {Array.isArray(chartData) && chartData.length > 0 ? (
                <PieCharts data={chartData} selectedChartIds={selectedCharts} />
            ) : (
                <p>No assignment data available.</p>
            )}
        </div>
    );
};

export default CourseStatistics;
