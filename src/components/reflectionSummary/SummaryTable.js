import React from 'react';
import Table from 'react-bootstrap/Table';
import './SummaryTable.css';
import {Col, Container, Row} from "react-bootstrap";

const SummaryRow = ({ assignment }) => {
    return (<tr>
        <td>{assignment.answer?.created}</td>
        <td>{assignment.topic}</td>
        <td>{assignment.answer?.order_nbr}</td>
        <td>View</td>
    </tr>);

};

const SummaryTable = ({ assignments }) => {

    console.log('asdf', assignments)

    return (
        <Container className="table-container">
            <Row className="table-row">
                <Col className="table-col">
                    <Table striped>
                        <thead>
                        <tr>
                            <th>Time</th>
                            <th>Topic</th>
                            <th>Level</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        {(assignments || []).map((assignment) => (
                            <SummaryRow assignment={assignment} key={assignment.id} />
                        ))}
                        <tr>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>View</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>8</td>
                            <td>999</td>
                            <td>View</td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default SummaryTable;