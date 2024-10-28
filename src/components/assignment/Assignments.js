import './Assignments.css';
import Row from "react-bootstrap/Row";
import React from "react";
import {Container} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {Link, useLocation, useParams} from "react-router-dom";
import useStudentCourseAssignmentAnswer from "../../hooks/useStudentCourseAssignmentAnswer";
import useStudentCourse from "../../hooks/useStudentCourse";

const Assignments = () => {
    const { id } = useParams();
    const {t} = useTranslation();
    let course = useStudentCourse(id);
    const [due_assignment, previous_assignment] = useStudentCourseAssignmentAnswer(course?.course_id);

    const dueAssignmentRow = (studentAssignment) => {
        return (
            <span className="assignments-course-row">
                <Link to={`/student/assignment/${studentAssignment?.assignment_id}/${course?.course_id}`} >
                    {studentAssignment?.topic}
                </Link>
            </span>
        );
    }
    const previousAssignmentRow = (studentAssignment) => {
        return (
            <span className="assignments-course-row">
                <Link to={`/student/feedback/${studentAssignment?.assignment_id}/${course?.course_id}`}>
                    {studentAssignment?.topic}
                </Link>
            </span>
    )
        ;
    }
    const listStudentAssignments = () => {
        return(
            <div>
                <Container className="assignments-form-container">
                    <Row className="assignments-form-row">
                        <div className="assignments-form-title-col">
                            {course?.title}
                        </div>
                    </Row>
                </Container>

                <Container className="assignments-form-container">
                    <Row>
                        <div>
                            {t('assignments_due')}
                        </div>
                    </Row>
                </Container>

                <Container className="assignments-course-list">
                    {due_assignment.map((assignment) => {
                            return dueAssignmentRow(assignment);
                        }
                    )}
                </Container>

                <Container className="assignments-line-container">
                    <Row>
                        <hr className="line"></hr>
                    </Row>
                </Container>

                <Container className="assignments-form-container">
                    <Row>
                        <div>
                            {t('assignments_previous')}
                        </div>
                    </Row>
                </Container>
                <Container className="assignments-course-list">
                    {previous_assignment.map((assignment) => {
                            return previousAssignmentRow(assignment);
                        }
                    )}
                </Container>

                <Container className="assignments-summary-container">
                    <Link to={`/student/courses/${course?.course_id}/summary`}>
                        <Row className="assignments-summary-row">
                            {t('assignments_summary')}
                        </Row>
                    </Link>
                </Container>
            </div>)
    }

    if ((due_assignment && due_assignment?.length > 0) || (previous_assignment && previous_assignment?.length > 0)) {
        return listStudentAssignments();
    }
};

Assignments.propTypes = {};

export default Assignments;
