import useValidation from "../useValidation";
import validateDescriptionAnswer from "./descriptionAnswerValidation";
import validateLevel from "./levelValidation";
import validateTopicAnswer from "./topicAnswerValidation";

const validationFunctions = () => ({
    topic_answer: validateTopicAnswer,
    description_answer: validateDescriptionAnswer,
    multiple_choice_answer: validateLevel
});

const useAnswersValidation = (fields, answers = []) => {
    const [isValids, messages, validate] = useValidation(
        answers.map(record => validationFunctions()),
        fields
    );

    return [isValids, messages, validate];
};

export default useAnswersValidation;
