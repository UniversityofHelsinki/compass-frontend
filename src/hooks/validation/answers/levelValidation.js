import { LEVELS, FIELD_IS_VALID } from "../../../Constants";
import PropTypes from 'prop-types';


const levels = [
    ...LEVELS
];
const validateLevel = (level) => {

    const found = levels.map(t => t.value).includes(level);
    if (!found) {
        return 'validation_level_invalid';
    }
    return FIELD_IS_VALID;
};

validateLevel.PropTypes = {
    level: PropTypes.string
}

export default validateLevel;
