import useValidation from "../useValidation";
import validateDescriptionAnswer from "./descriptionAnswerValidation";
import validateLevel from "./levelValidation";

const validationFunctions = () => ({
    description_answer: validateDescriptionAnswer,
    radio_button_answer: validateLevel
});

const useAnswersValidation = (fields, answers = []) => {
    const [isValids, messages, validate] = useValidation(
        answers.map(record => validationFunctions()),
        fields
    );

    return [isValids, messages, validate];
};

export default useAnswersValidation;
