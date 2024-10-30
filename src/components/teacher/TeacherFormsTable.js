import React from 'react';
import PropTypes from 'prop-types';
import './TeacherFormsTable.css';
import { ReactComponent as CaretUp } from '../utilities/icons/caret-up.svg';
import { ReactComponent as CaretDown } from '../utilities/icons/caret-down.svg';
import { ReactComponent as CopyIcon } from '../utilities/icons/copy.svg';
import { ReactComponent as EditIcon } from '../utilities/icons/edit.svg';
import { ReactComponent as TrashIcon } from '../utilities/icons/trash.svg';
import { ReactComponent as ShareIcon } from '../utilities/icons/share.svg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useNotification } from '../../NotificationContext';

const HeadingColumn = ({ children, onSortCriteriaChange, sorted, direction }) => {
    const { t } = useTranslation();
    return (
        <div className="table-heading-column">
            <button onClick={onSortCriteriaChange}>
                {children}
                <div className="mx-1"></div>
                {sorted && (
                    <div className="table-heading-column-caret-container">
                        <div aria-hidden>{direction > 0 ? <CaretUp /> : <CaretDown />}</div>
                        <span className="screenreader-only">
                            {t(`teacher_forms_table_sort_${direction}`)}
                        </span>
                    </div>
                )}
            </button>
        </div>
    );
};

const Row = ({ teacherForm }) => {
    const { t } = useTranslation();
    const { setNotification } = useNotification();

    const Copy = () => (
        <div className="teacher-forms-table-row-copy-action">
            <button title={t('teacher_forms_table_copy_title')}>
                <span className="screenreader-only">
                    {t('teacher_forms_table_row_copy', { title: teacherForm.title })}
                </span>
                <CopyIcon aria-hidden />
            </button>
        </div>
    );

    const Edit = () => (
        <div className="teacher-forms-table-row-edit-action">
            <Link
                to={`/teacher/forms/edit/${teacherForm.id}`}
                title={t('teacher_forms_table_edit_title')}
            >
                <span className="screenreader-only">
                    {t('teacher_forms_table_row_edit', { title: teacherForm.title })}
                </span>
                <EditIcon aria-hidden />
            </Link>
        </div>
    );

    const Delete = () => (
        <div className="teacher-forms-table-row-delete-action">
            <button title={t('teacher_forms_table_delete_title')}>
                <span className="screenreader-only">
                    {t('teacher_forms_table_row_delete', { title: teacherForm.title })}
                </span>
                <TrashIcon aria-hidden />
            </button>
        </div>
    );

    const clipboardCopy = () => {
        setNotification(t('teacher_forms_table_share_copy_to_clipboard'), 'success', true);
        const target = `${window.location.origin}/student/assignments/${teacherForm.id}`;
        navigator.clipboard.writeText(target);
    };

    const Share = () => (
        <div className="teacher-forms-table-row-share-action">
            <button title={t('teacher_forms_table_share_title')} onClick={clipboardCopy}>
                <span className="screenreader-only">
                    {t('teacher_forms_table_row_share', { title: teacherForm.title })}
                </span>
                <ShareIcon aria-hidden />
            </button>
        </div>
    );

    const actions = [<Copy />, <Edit />, <Delete />, <Share />];

    const period = (startDate, endDate) => {
        return (
            <>
                <span>{new Date(startDate).toLocaleDateString('fi-FI')}</span>
                <span className="mx-1">-</span>
                <span>{new Date(endDate).toLocaleDateString('fi-FI')}</span>
            </>
        );
    };

    return (
        <tr className="teacher-forms-table-row">
            <td>{teacherForm.title}</td>
            <td className="teacher-forms-table-row-course-id">{teacherForm.course_id}</td>
            <td className="teacher-forms-table-row-period">
                <span>{period(teacherForm.start_date, teacherForm.end_date)}</span>
            </td>
            <td className="teacher-forms-table-actions-column">
                <div className="teacher-forms-table-actions">
                    {actions.map((action, i) => (
                        <div key={i} className="teacher-forms-table-action mx-1">
                            {action}
                        </div>
                    ))}
                </div>
            </td>
        </tr>
    );
};

const TeacherFormsTable = ({ teacherForms = [], onSortCriteriaChange, sortOpts }) => {
    const { t } = useTranslation();

    return (
        <div>
            <table className="teacher-forms-table">
                <caption className="screenreader-only">
                    {t('teacher_forms_table_description')}
                </caption>
                <thead>
                    <tr>
                        {['title', 'course_id', 'period'].map((property) => (
                            <th key={property} scope="col">
                                <HeadingColumn
                                    sorted={property === sortOpts.criteria}
                                    direction={sortOpts.direction}
                                    onSortCriteriaChange={(e) => onSortCriteriaChange(property)}
                                >
                                    {t(`teacher_forms_table_${property}`)}
                                </HeadingColumn>
                            </th>
                        ))}
                        <th scope="col">
                            <span className="screenreader-only">
                                {t('teacher_forms_table_actions')}
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {(teacherForms || []).map((teacherForm) => (
                        <Row key={teacherForm.id} teacherForm={teacherForm} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

TeacherFormsTable.propTypes = {};

export default TeacherFormsTable;
