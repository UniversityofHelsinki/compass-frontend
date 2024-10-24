import PropTypes from 'prop-types';
import { FIELD_IS_VALID } from '../../../Constants';

const validateDescriptionAnswer = (descriptionAnswer) => {
    if (!descriptionAnswer || descriptionAnswer.length === 0) {
        return 'validation_description_assignment_is_empty';
    } else if (descriptionAnswer.length > 300) {
        return 'validation_description_assignment_is_too_long';
    }
    return FIELD_IS_VALID;
};

validateDescriptionAnswer.PropTypes = {
    descriptionAnswer: PropTypes.string,
};

export default validateDescriptionAnswer;
