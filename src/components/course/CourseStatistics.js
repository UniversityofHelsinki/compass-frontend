import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useCourseStatistics from '../../hooks/teacher/useCourseStatistics';
import PieCharts from '../charts/PieChart';
import './CourseStatistics.css';
import useTeacherCourse from '../../hooks/useTeacherCourse';
import { useTranslation } from 'react-i18next';
import TopBar from '../utilities/TopBar';
import { Col, Row } from 'react-bootstrap';

const CourseStatistics = () => {
    const { courseId } = useParams();
    const { courseStatistics, loading, error, reload } = useCourseStatistics(courseId);
    const [course] = useTeacherCourse(courseId);
    const [selectedCharts, setSelectedCharts] = useState([]);
    const { t } = useTranslation();
    useEffect(() => {
        const shouldUpdateCharts = (allChartIds) => {
            return (
                selectedCharts.length !== allChartIds.length ||
                !selectedCharts.every((id, index) => id === allChartIds[index])
            );
        };

        const updateSelectedCharts = () => {
            if (Array.isArray(courseStatistics) && courseStatistics.length > 0) {
                const allChartIds = courseStatistics.map((statistic) => statistic.assignment_id);

                if (shouldUpdateCharts(allChartIds)) {
                    setSelectedCharts(allChartIds);
                }
            } else if (selectedCharts.length > 0) {
                setSelectedCharts([]);
            }
        };

        updateSelectedCharts();
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

    // Step 1: Extract all answer arrays from courseStatistics
    const extractAnswerFeedbacks = (statistics) => {
        return statistics
            .filter((statistic) => statistic.answers && Array.isArray(statistic.answers)) // Ensure statistic.answers is a valid array
            .map((statistic) => statistic.answers); // Collect the answers arrays
    };

    const answerFeedbacks = extractAnswerFeedbacks(courseStatistics);

    if (!Array.isArray(courseStatistics) || courseStatistics.length === 0) {
        return (
            <>
                <TopBar
                    showBackBtn={true}
                    backBtnLabels={{
                        primary: t('teacher_forms_back_to_forms'),
                        secondary: t('teacher_forms_back_to_forms_secondary'),
                    }}
                    backBtnHref="/teacher/forms"
                    heading={`${t('course_statistics_for_course')}: ${course?.title}`}
                />
                <p>{t('no_statistic_data_available')}</p>
            </>
        );
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
        <Row>
            <Col>
                <TopBar
                    showBackBtn={true}
                    backBtnLabels={{
                        primary: t('teacher_forms_back_to_forms'),
                        secondary: t('teacher_forms_back_to_forms_secondary'),
                    }}
                    backBtnHref="/teacher/forms"
                    heading={`${t('course_statistics_for_course')}: ${course?.title}`}
                />
            </Col>
            <Row>
                <Col className="chart-selection">
                    <div className="chart-selection-title">
                        {t('select_assignments_to_display')}
                    </div>
                    <div className="chart-selection-buttons">
                        {chartData.map((assignment) => (
                            <button
                                key={assignment.assignmentId}
                                className={`tag-button ${selectedCharts.includes(assignment.assignmentId) ? 'selected' : ''}`}
                                aria-label={`${assignment.assignmentTopic},${selectedCharts.includes(assignment.assignmentId) ? t('course_statistics_selected') : t('course_statistics_not_selected')}`}
                                onClick={() => handleSelectChart(assignment.assignmentId)}
                            >
                                {assignment.assignmentTopic}
                            </button>
                        ))}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="pie-charts">
                    {Array.isArray(chartData) && chartData.length > 0 ? (
                        <PieCharts
                            data={chartData}
                            selectedChartIds={selectedCharts}
                            courseTitle={course?.title}
                            answersFeedbacks={answerFeedbacks}
                            reload={reload}
                        />
                    ) : (
                        <p>{t('course_statistics_no_assignments_to_display')}</p>
                    )}
                </Col>
            </Row>
        </Row>
    );
};

export default CourseStatistics;
