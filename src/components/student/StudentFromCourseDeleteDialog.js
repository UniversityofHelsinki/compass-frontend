import React, { useState } from 'react';
import Dialog from '../../components/dialog/Dialog';
import { useTranslation } from 'react-i18next';
import useDeleteStudentFromCourse from '../../hooks/teacher/useDeleteStudentFromCourse';
import { ReactComponent as TrashIcon } from '../utilities/icons/trash.svg';
import { Modal } from 'react-bootstrap';
import './StudentFromCourseDeleteDialog.css';
import Message from '../../form/Message';
import HyButton from '../utilities/HyButton';
import PropTypes from 'prop-types';

const StudentFromCourseDeleteDialog = ({ student, courseId, reload }) => {
    const [showDialog, setShowDialog] = useState(false);
    const deleteStudent = useDeleteStudentFromCourse(courseId);
    const { t } = useTranslation();
    const closeButton = { closeButton: true };
    const [message, setMessage] = useState({});
    const handleOpenDialog = () => {
        setShowDialog(true);
    };

    const handleCloseDialog = () => {
        setShowDialog(false);
        reload();
    };
    const deleteStudentFromCourse = async () => {
        const user = { student: student.user_name, course_id: courseId };
        const response = await deleteStudent(user);
        if (response.ok) {
            setMessage({ style: 'neutral', text: 'student_from_course_delete_ok' });
        } else {
            setMessage({ style: 'warning', text: 'student_from_course_delete_failed' });
        }
    };

    return (
        <div>
            <button
                className="student-from-course-delete-dialog-button"
                onClick={handleOpenDialog}
                aria-haspopup="dialog"
                aria-label={t('teacher_student_in_course_delete_student_button_aria_label', {
                    student: student.user_name,
                })}
            >
                <TrashIcon
                    title={t('teacher_student_in_course_delete_student_button_title')}
                    aria-hidden
                />
            </button>
            {showDialog && (
                <Dialog
                    show={showDialog}
                    hide={handleCloseDialog}
                    aria-labelledby="student-summary-dialog"
                    size="xl"
                >
                    <Modal.Header {...closeButton}>
                        <Modal.Title as="h4">{student.display_name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        {message.style && message.text && (
                            <Message type={message.style}>{t(`${message.text}`)}</Message>
                        )}
                        <HyButton
                            onClick={handleCloseDialog}
                            variant="primary"
                            disabled={message.style && message.text}
                            className={''}
                        >
                            {t('student_from_course_delete_dialog_cancel')}
                        </HyButton>
                        <HyButton
                            onClick={deleteStudentFromCourse}
                            variant="primary"
                            disabled={message.style && message.text}
                        >
                            {t('student_from_course_delete_dialog_delete')}
                        </HyButton>
                    </Modal.Footer>
                </Dialog>
            )}
        </div>
    );
};

StudentFromCourseDeleteDialog.propTypes = {
    student: PropTypes.object,
    courseId: PropTypes.string,
    reload: PropTypes.func,
};

export default StudentFromCourseDeleteDialog;
