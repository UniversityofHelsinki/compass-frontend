import PropTypes from 'prop-types';
import { FIELD_IS_VALID } from '../../../Constants';

const validateFirstAnswer = (firstAnswer) => {
    if (firstAnswer.length === 0) {
        return 'validation_first_answer_is_empty';
    } else if (firstAnswer.length > 15) {
        return 'validation_first_answer_is_too_long';
    }
    return FIELD_IS_VALID;
};

validateFirstAnswer.PropTypes = {
    record: PropTypes.object
};

export default validateFirstAnswer;
