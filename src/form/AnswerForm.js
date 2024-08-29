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
                </Col>
            </Row>
            <Row>
                <Col>
                    <HyButton variant="primary" type="submit" className="answer-form-send-button" >
                        Submit answers
                    </HyButton>
                </Col>
            </Row>
        </Container>
    );
};

AnswerForm.propTypes = {
};

export default AnswerForm;
