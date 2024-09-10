import HyButton from "../utilities/HyButton";
import React from "react";
import {t} from "i18next";

const CourseEvaluation = ({modified, isValid, handleAddAnswer}) => {


    const onButtonClick = (event) => {
        event.preventDefault();
        handleAddAnswer();
    };

    return (
        <>
    <HyButton variant="primary" modified={modified} isValid={isValid} onClick={onButtonClick} className="answer-form-send-button" >
        {t('form_submit')}
    </HyButton>
        </>)
}

export default CourseEvaluation;