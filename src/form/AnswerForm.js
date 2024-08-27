import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import './AnswerForm.css';
import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";
import {Button} from "react-bootstrap";


const AnswerForm = () => {
    const { t } = useTranslation();


    return (
        <Container className="answer-form-container">
            <Row>
                <Col>
                    <h1>Welcome to using the Self-Reflection Compass</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>You have dealt with research ethics and integrity topics independently or have participated in a training to develop your research ethics and integrity competencies. To reflect on your learning, think back at your previous activity, evaluate your ethical competence, and receive feedback. </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="form-question-1" column="sm">Which activity/topic are you reflecting on?</Form.Label>
                        <Form.Control className="form-question-1" id="form-question-1" type="text"/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="form-question-2" column="sm">Please describe what you have been learning about research ethics in relation to the abovementioned activity/topic. You can provide examples.</Form.Label>
                        <Form.Control id="form-question-2" as="textarea" rows={5} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form>
                        <Form.Label> Choose the phrase that you think best describes your current level of understanding:</Form.Label>
                        {['radio'].map((type) => (
                            <div key={type} className="mb-3">
                                <Form.Check
                                    type={type}
                                    id="option-1"
                                    label="11111"
                                />
                                <Form.Check
                                    type={type}
                                    id="option-2"
                                    label="2222"
                                />
                                <Form.Check
                                    type={type}
                                    id="option-3"
                                    label="333333333333"
                                />
                            </div>
                        ))}
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button>
                        Send
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

AnswerForm.propTypes = {
};

export default AnswerForm;
