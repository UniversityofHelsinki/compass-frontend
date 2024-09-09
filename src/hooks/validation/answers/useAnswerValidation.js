/*import PropTypes from 'prop-types';
import useAnswersValidation from "./useAnswersValidation";

const useAnswerValidation = (fields, answer) => {
    const [isValids, messages, validate] = useAnswersValidation(
        fields,
        [answer]
    );

    return [
        isValids[0],
        messages[0],
        (record, previousRecord, validateAllFields) =>
            validate([record], [previousRecord], validateAllFields)
    ];
};

useAnswerValidation.propTypes = {
    fields: PropTypes.array
};

export default useAnswerValidation;*/

