import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useCourseStatistics from '../../hooks/teacher/useCourseStatistics';
import PieCharts from '../charts/PieChart';
import './CourseStatistics.css';
import useTeacherCourse from '../../hooks/useTeacherCourse';
import { useTranslation } from 'react-i18next';

const CourseStatistics = () => {
    const { courseId } = useParams();
    const { courseStatistics, loading, error } = useCourseStatistics(courseId);
    const [course] = useTeacherCourse(courseId);
    const [selectedCharts, setSelectedCharts] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        if (Array.isArray(courseStatistics) && courseStatistics.length > 0) {
            const allChartIds = courseStatistics.map((statistic) => statistic.assignment_id);
            setSelectedCharts(allChartIds);
        } else {
            setSelectedCharts([]);
        }
    }, [courseStatistics]);

    if (loading) {
        return <p>{t('loading')}</p>;
    }

    if (error) {
        return (
            <p>
                {t('error_loading_data')}: {error.message}
            </p>
        );
    }

    if (!Array.isArray(courseStatistics) || courseStatistics.length === 0) {
        return <p>{t('no_statistic_data_available')}</p>;
    }

    const groupedData = courseStatistics.reduce((accumulator, current) => {
        const {
            assignment_id,
            assignment_topic,
            order_nbr,
            order_nbr_percentage,
            answer_count,
            start_date,
            end_date,
            avg_answer_level,
        } = current;

        if (!accumulator[assignment_id]) {
            accumulator[assignment_id] = {
                assignmentId: assignment_id,
                assignmentTopic: assignment_topic,
                data: [],
                answerCount: answer_count,
                start_date: start_date,
                end_date: end_date,
                avg_answer_level: parseFloat(avg_answer_level).toFixed(1),
            };
        }

        accumulator[assignment_id].data.push({
            name: `${order_nbr}`,
            value: parseFloat(order_nbr_percentage),
        });

        return accumulator;
    }, {});

    const chartData = Object.values(groupedData).sort((a, b) => {
        return new Date(a.start_date) - new Date(b.start_date);
    });

    const handleSelectChart = (assignmentId) => {
        setSelectedCharts((prev) =>
            prev.includes(assignmentId)
                ? prev.filter((id) => id !== assignmentId)
                : [...prev, assignmentId],
        );
    };

    return (
        <div>
            <h2>
                {t('course_statistics_for_course')}: {course?.title}
            </h2>
            <div className="chart-selection">
                <h3>{t('select_assignments_to_display')}</h3>
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
