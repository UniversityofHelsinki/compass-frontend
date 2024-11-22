import React from 'react';
import Table from 'react-bootstrap/Table';
import './SummaryTable.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import AssignmentAnswersDialog from '../dialog/AssignmentAnswersDialog';

const SummaryRow = ({ assignment }) => {
    const { t } = useTranslation();
    const date = new Date(assignment.answer?.created);
    const formattedTime = date.toLocaleTimeString(['fi-FI'], {
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        <tr>
            <td>{formattedTime}</td>
            <td>{assignment.topic}</td>
            <td>{assignment.answer?.order_nbr}</td>
            <td>
                <AssignmentAnswersDialog
                    assignmentTopic={assignment?.topic}
                    value={assignment?.answer?.value}
                    userName={assignment?.answer?.user_name}
                    order_nbr={assignment?.answer?.order_nbr}
                />
            </td>
        </tr>
    );
};

const SummaryTable = ({ assignments }) => {
    const { t } = useTranslation();

    return (
        <Container className="table-container">
            <Row className="table-row">
                <Col className="table-col">
                    <Table striped>
                        <thead>
                            <tr>
                                <th>{t('summary_time')}</th>
                                <th>{t('summary_topic')}</th>
                                <th>{t('summary_level')}</th>
                                <th>{t('summary_answers_header')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(assignments || []).map((assignment) => (
                                <SummaryRow assignment={assignment} key={assignment.id} />
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

SummaryTable.propTypes = {
    assignments: PropTypes.any.isRequired,
};

export default SummaryTable;
