import React, { useState } from 'react';
import Dialog from '../../components/dialog/Dialog';
import SummaryChart from './SummaryChart.js';
import { useTranslation } from 'react-i18next';
import useStudentAssignmentsForStudent from '../../hooks/teacher/useStudentAssignmentsForStudent';
import { Container, Modal } from 'react-bootstrap';
import './StudentSummaryDialog.css';
import SummaryTable from './SummaryTable';

const StudentSummaryDialog = ({ courseId, studentId, studentName }) => {
    const [showDialog, setShowDialog] = useState(false);
    const [assignments, error, reload] = useStudentAssignmentsForStudent(courseId, studentId);
    const { t } = useTranslation();
    const closeButton = { closeButton: true };

    const handleOpenDialog = () => {
        setShowDialog(true);
    };

    const handleCloseDialog = () => {
        setShowDialog(false);
    };

    return (
        <>
            <a
                href="#"
                className="student-summary-list-item-link"
                onClick={(e) => {
                    e.preventDefault();
                    handleOpenDialog();
                }}
                aria-haspopup="dialog"
            >
                {studentName}
            </a>
            {showDialog && (
                <Dialog
                    show={showDialog}
                    hide={handleCloseDialog}
                    aria-labelledby="student-summary-dialog"
                    size="xl"
                >
                    <Modal.Header className="assignment-answer-dialog-header" {...closeButton}>
                        <Modal.Title as="h4" className="modal-title">
                            {t('answer_dialog_student')}: {studentName}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <div>
                                <h4 id="student-summary-dialog" className="center-text">
                                    {t('student_summary_chart')}
                                </h4>
                                <div>
                                    <SummaryChart assignments={assignments} />
                                </div>
                                <div>
                                    <SummaryTable
                                        course={courseId}
                                        reload={reload}
                                        assignments={assignments}
                                        showAnswerColumn={false}
                                    />
                                </div>
                            </div>
                        </Container>
                    </Modal.Body>
                </Dialog>
            )}
        </>
    );
};

export default StudentSummaryDialog;
