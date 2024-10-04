import useValidation from "../useValidation";
import validateDescriptionAnswer from "./descriptionAnswerValidation";
import validateLevel from "./levelValidation";

const validationFunctions = () => ({
    value: validateDescriptionAnswer,
    order_nbr: validateLevel
});

const useAnswersValidation = (fields, answers = []) => {
    const [isValids, messages, validate] = useValidation(
        answers.map(record => validationFunctions()),
        fields
    );

    return [isValids, messages, validate];
};

export default useAnswersValidation;
