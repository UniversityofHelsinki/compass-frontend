import HyButton from "../utilities/HyButton";
import React, {useState} from "react";
import { Col, Container, Form, Modal, Row } from 'react-bootstrap';
import {useTranslation} from "react-i18next";
import FormDialog from "../dialog/FormDialog";
import CourseEvaluationFooter from "./CourseEvaluationFooter";

const CourseEvaluation = ({modified, isValid, handleAddAnswer, msg, msgStyle, multiple_choice_answer}) => {

    const closeButton = { closeButton: true };
    const { t } = useTranslation();
    const [showForm, setShowForm] = useState(false);
    const hide = () => {
        setShowForm(false);
    };

    const onButtonClick = (event) => {
        event.preventDefault();
        setShowForm(true);
        handleAddAnswer();
    };

    const theButton = (
        <HyButton
            variant="primary" modified={modified} isValid={isValid} onClick={onButtonClick}
            className="answer-form-send-button" >
            {t('form_submit')}
        </HyButton>
    );
    /*const onSubmit = async (event) => {
        event.preventDefault();
        //await save(collection);
    };*/
    let answer_evaluation_form_header =  'answer_evaluation_form_header_' + multiple_choice_answer;
    let answer_evaluation_form_text =  'answer_evaluation_form_text_' + multiple_choice_answer;
    return (
        <FormDialog
            hide={hide}
            showComponent={theButton}
            show={showForm}
            size="xl"
            //touched={modified && progress.status !== ProgressStatus.NEW_COLLECTION.DONE}
        >
            <Modal.Header { ...closeButton }>{t(answer_evaluation_form_header)}</Modal.Header>
            <Form className="new-collection-form ms-3 me-3"> {/* onSubmit={onSubmit}> */}
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col lg>
                                {t(answer_evaluation_form_text)}
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer className="ps-0 pe-0">
                    <CourseEvaluationFooter isValid={isValid} message={msg} msgStyle={msgStyle}></CourseEvaluationFooter>
                </Modal.Footer>
            </Form>
        </FormDialog>
    );

}

export default CourseEvaluation;