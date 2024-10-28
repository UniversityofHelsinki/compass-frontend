import React from 'react';
import { useParams } from 'react-router-dom';
import useCourseStatistics from '../../hooks/teacher/useCourseStatistics'; // Adjust the path as needed
import PieCharts from '../charts/PieChart'; // Adjust the path as needed

const CourseStatistics = () => {
    const { courseId } = useParams();
    const { courses, loading, error } = useCourseStatistics(courseId);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error loading data: {error.message}</p>;
    }

    if (!Array.isArray(courses) || courses.length === 0) {
        return <p>No data available.</p>;
    }

    const groupedData = courses.reduce((acc, curr) => {
        const { assignment_id, assignment_topic, order_nbr, order_nbr_percentage } = curr;

        if (!acc[assignment_id]) {
            acc[assignment_id] = {
                assignmentId: assignment_id,
                assignmentTopic: assignment_topic,
                data: [],
            };
        }

        acc[assignment_id].data.push({
            name: `${order_nbr}`,
            value: parseFloat(order_nbr_percentage),
            orderNbr: order_nbr,
        });

        return acc;
    }, {});

    const chartData = Object.values(groupedData);

    return (
        <div>
            <h1>Course Statistics for Course ID: {courseId}</h1>
            {Array.isArray(chartData) && chartData.length > 0 ? (
                chartData.map((chartDataItem) => (
                    <div key={chartDataItem.assignmentId}>
                        <h2>{chartDataItem.assignmentTopic}</h2>
                        <PieCharts data={[chartDataItem]} /> {/* Passing each item as an array */}
                    </div>
                ))
            ) : (
                <p>No assignment data available.</p>
            )}
        </div>
    );
};

export default CourseStatistics;
