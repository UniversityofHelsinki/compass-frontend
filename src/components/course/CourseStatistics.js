import React from 'react';
import { useParams } from 'react-router-dom';
import useCourseStatistics from '../../hooks/teacher/useCourseStatistics';
import PieCharts from '../charts/PieChart';

const CourseStatistics = () => {
    const { courseId } = useParams();
    const { courseStatistics, loading, error } = useCourseStatistics(courseId);

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
        const { assignment_id, assignment_topic, order_nbr, order_nbr_percentage, answer_count } =
            curr;

        if (!acc[assignment_id]) {
            acc[assignment_id] = {
                assignmentId: assignment_id,
                assignmentTopic: assignment_topic,
                data: [],
                answerCount: answer_count,
            };
        }

        acc[assignment_id].data.push({
            name: `${order_nbr}`,
            value: parseFloat(order_nbr_percentage),
        });

        return acc;
    }, {});

    const chartData = Object.values(groupedData);

    console.log('Chart Data:', chartData); // Debug log for chart data

    return (
        <div>
            <h1>Course Statistics for Course ID: {courseId}</h1>
            {Array.isArray(chartData) && chartData.length > 0 ? (
                <PieCharts data={chartData} />
            ) : (
                <p>No assignment data available.</p>
            )}
        </div>
    );
};

export default CourseStatistics;
