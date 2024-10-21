import {ASSIGNMENT_VALID_FOR_EDIT} from "../../Constants";

const regExp = /\..{3}Z$/;
const removeMillisecs = (dateString) => dateString.replace(regExp, 'Z');

export const validatePeriod = (assignment) => {
    if (!assignment || assignment.length === 0) {
        return true;
    }

    let startDate = assignment[0].start_date;
    let endDate = assignment[0].end_date;
    const today = removeMillisecs(new Date().toISOString());
    if (!startDate) {
        return 'assignment_start_date_is_empty';
    } else if (!endDate) {
        return 'assignment_end_date_is_empty';
    } else {
        let start_d = removeMillisecs(startDate);
        let end_d = removeMillisecs(endDate);
        if (start_d <= today && today <= end_d) {
            return ASSIGNMENT_VALID_FOR_EDIT;
        }
    }
    return true;
};