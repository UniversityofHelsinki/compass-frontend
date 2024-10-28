import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useCourseStatistics from '../../hooks/teacher/useCourseStatistics'; // Adjust the path as needed
import PieChart from '../charts/PieChart'; // Adjust the path as needed

const CourseStatistics = () => {
    const { courseId } = useParams(); // Ensure `id` is extracted correctly (string)
    const [loading, error] = useCourseStatistics(courseId); // Fetch statistics directly
    const statistics = useSelector((state) => state.courses.statistics);

    // Use transformation if needed for the chart component
    const chartData = statistics
        ? statistics.map((stat) => ({
              assignment_id: stat.assignment_id,
              assignment_topic: stat.assignment_topic,
              average_score: parseFloat(stat.average_score),
              answer_count: parseInt(stat.answer_count, 10),
          }))
        : [];

    return (
        <div>
            <h1>Course Statistics for Course ID: {courseId}</h1>
            {statistics && <PieChart data={chartData} />}
        </div>
    );
};

export default CourseStatistics;
