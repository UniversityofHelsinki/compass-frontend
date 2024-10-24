import './Assignments.css';
import Row from "react-bootstrap/Row";
import BackButton from "../utilities/BackButton";
import React from "react";
import {Container} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {Link, useLocation} from "react-router-dom";
import useStudentCourseAssignmentAnswer from "../../hooks/useStudentCourseAssignmentAnswer";

const Assignments = ({showBackBtn = true, backBtnLabels, backBtnHref="/teacher"}) => {
    const location = useLocation();
    const {t} = useTranslation();
    let course = {...location.state.course};
    const [due_assignment, previous_assignment] = useStudentCourseAssignmentAnswer(course.course_id);

    const dueAssignmentRow = (studentAssignment) => {
        return (
            <li key={course.course_id} className="assignments-course-row">
                            <Link to={`/student/assignment/${studentAssignment?.assignment_id}`}>
                                <div>{studentAssignment?.topic}</div>
                            </Link>
            </li>
        );
    }
    const previousAssignmentRow = (studentAssignment) => {
        return (
            <li key={course.course_id} className="assignments-course-row">
                <Link to={`/student/feedback/${studentAssignment?.assignment_id}/${course.course_id}`}>
                    <div>{studentAssignment?.topic}</div>
                </Link>
            </li>
        );
    }
    const listStudentAssignments = () => {
        return(
            <div>
                <Container className="assignments-form-container">
                    <Row className="assignments-form-row">
                        <div className="assignments-form-back-col">
                            {showBackBtn && <BackButton labels={backBtnLabels} href={backBtnHref}/>}
                        </div>
                        <div className="assignments-form-title-col">
                            {course.title}
                        </div>
                    </Row>
                </Container>
                <Container className="assignments-summary-container">
                    <Link to={`/student/courses/${course.course_id}/summary`}>
                        <Row className="assignments-summary-row">
                            {t('assignments_summary')}
                        </Row>
                    </Link>
                </Container>
                <Container className="assignments-form-container">
                    <Row>
                        <div>
                            {t('assignments_due')}
                        </div>
                    </Row>
                </Container>

                <ul className="assignments-course-list">
                    <Container className="assignments-course-padding">
                        {due_assignment.map((assignment) => {
                                return dueAssignmentRow(assignment);
                            }
                        )}
                    </Container>
                </ul>

                <Container className="assignments-form-container">
                    <Row>
                        <div>
                            {t('assignments_previous')}
                        </div>
                    </Row>
                </Container>
                <ul className="assignments-course-list">
                    <Container className="assignments-course-padding">
                        {previous_assignment.map((assignment) => {
                                return previousAssignmentRow(assignment);
                            }
                        )}
                    </Container>
                </ul>

            </div>)
    }

    if ((due_assignment && due_assignment.length > 0) || (previous_assignment && previous_assignment.length > 0)) {
        return listStudentAssignments();
    }
};

Assignments.propTypes = {};

export default Assignments;
