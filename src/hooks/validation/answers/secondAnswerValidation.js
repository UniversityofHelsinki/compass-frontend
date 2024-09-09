import PropTypes from 'prop-types';
import { FIELD_IS_VALID } from '../../../Constants';

const validateSecondAnswer = (secondAnswer) => {
    if (secondAnswer.length === 0) {
        return 'validation_second_answer_is_empty';
    } else if (secondAnswer.length > 300) {
        return 'validation_second_answer_is_too_long';
    }
    return FIELD_IS_VALID;
};

validateSecondAnswer.PropTypes = {
    secondAnswer: PropTypes.string,
};

export default validateSecondAnswer;
