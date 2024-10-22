import './Assignments.css';
import Row from "react-bootstrap/Row";
import BackButton from "../utilities/BackButton";
import React from "react";
import {Container} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {useLocation} from "react-router-dom";
import useStudentCourseAssignmentAnswer from "../../hooks/useStudentCourseAssignmentAnswer";

const Assignments = ({showBackBtn = true, backBtnLabels, backBtnHref="/teacher"}) => {
    const location = useLocation();
    const {t} = useTranslation();
    let course = {...location.state.course};
    const [studentAnswerData] = useStudentCourseAssignmentAnswer(course.course_id);

    return (
        <>
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
                <Row className="assignments-summary-row">
                {t('assignments_summary')}
                </Row>
            </Container>
            <Container className="assignments-form-container">
                <Row>
                    <div>
                        {t('assignments_due')}
                    </div>
                </Row>
            </Container>
            <Container className="assignments-summary-container">
                <Row className="assignments-summary-row">
                        <div className="assignments-form-assignment-col">
                            <div>{studentAnswerData?.topic}</div>
                        </div>
                </Row>
            </Container>
            <Container className="assignments-form-container">
                <Row>
                    <div>
                        {t('assignments_previous')}
                    </div>
                </Row>
            </Container>
        </>
    );
};

Assignments.propTypes = {

};

export default Assignments;
