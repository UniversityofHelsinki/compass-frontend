import { ASSIGNMENT_VALID_FOR_EDIT, ASSIGNMENT_OLD, ASSIGNMENT_FUTURE } from '../../Constants';

const regExp = /\..{3}Z$/;
const removeMillisecs = (dateString) => dateString.replace(regExp, 'Z');

export const validatePeriod = (assignment) => {
    if (!assignment || assignment.length === 0) {
        return 'true';
    }

    let startDate = assignment.start_date;
    let endDate = assignment.end_date;
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
        } else if (start_d <= today && today >= end_d) {
            return ASSIGNMENT_OLD;
        } else {
            return ASSIGNMENT_FUTURE;
        }
    }
};
