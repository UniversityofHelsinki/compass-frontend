import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import './SummaryTable.css';
import {Col, Container, Row} from "react-bootstrap";


const SummaryTable = () => {
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
                        <tr>
                            <td>1.11.2024</td>
                            <td>fsfdshhhdfhdfhdhfhdffhhfdhfhf</td>
                            <td>Very normal</td>
                            <td>View</td>
                        </tr>
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