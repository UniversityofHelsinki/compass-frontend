import useValidation from "../useValidation";
import validateFirstAnswer from "./firstAnswerValidation";
import validateSecondAnswer from "./secondAnswerValidation";

const validationFunctions = () => ({
    first_answer: validateFirstAnswer,
    second_answer: validateSecondAnswer,
});

const useAnswersValidation = (fields, answers = []) => {
    const [isValids, messages, validate] = useValidation(
        answers.map(record => validationFunctions()),
        fields
    );

    return [isValids, messages, validate];
};

export default useAnswersValidation;
