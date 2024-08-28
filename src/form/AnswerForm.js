import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import './AnswerForm.css';
import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";
import FormSubjectSelection from "./FormSubjectSelection";
import FormFreeAnswer from "./FormFreeAnswer";
import HyButton from "../components/utilities/HyButton";


const AnswerForm = () => {
    const { t } = useTranslation();


    return (
        <Container className="answer-form-container">
            <Row className="answer-form-row">
                <Col className="answer-form-welcome-col">
                    <h1>Welcome to using the Self-Reflection Compass!</h1>
                </Col>
            </Row>
            <Row>
                <Col className="answer-form-description-col">
                    <p>You have dealt with research ethics and integrity topics independently or have participated in a training to develop your research ethics and integrity competencies. To reflect on your learning, think back at your previous activity, evaluate your ethical competence, and receive feedback. </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormSubjectSelection value={true}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormFreeAnswer value={true} />
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
                    <HyButton variant="primary" type="submit" className="answer-form-send-button">
                        Send answers
                    </HyButton>
                </Col>
            </Row>
        </Container>
    );
};

AnswerForm.propTypes = {
};

export default AnswerForm;
