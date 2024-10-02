import PropTypes from 'prop-types';
import { FIELD_IS_VALID } from '../../../Constants';

const validateTopicAnswer = (topicAnswer) => {
    if (topicAnswer.length === 0) {
        return 'validation_topic_assignment_is_empty';
    } else if (topicAnswer.length > 50) {
        return 'validation_topic_assignment_is_too_long';
    }
    return FIELD_IS_VALID;
};

validateTopicAnswer.PropTypes = {
    topicAnswer: PropTypes.string
};

export default validateTopicAnswer;
